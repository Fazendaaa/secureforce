import { join } from 'path';
import { writeFile } from 'fs';
import { Request, Response } from 'express';
import { createClient } from 'redis';

const client = createClient();

client.on('connect', () => console.log('Client connected'));

interface Forms {
    user: string;
    email: string;
    image: Buffer;
}

export const get = (_: Request, res: Response): void => {
    res.send({
        user: '',
        email: '',
        image: ''
    });
};

export const post = ({ file, query }: Request, res: Response) => {
    const user = query.user;
    const email = query.email;
    const { originalname } = file;
    const path = join(__dirname, '../../../img', originalname);

    writeFile(path, file.buffer, err => {
        if (null !== err) {
            console.error(err);
            res.send(new Error('Server error, try again later.'));
        } else {
            client.publish('newsletter', JSON.stringify({
                user,
                email,
                filename: originalname
            }));
            res.json('Done');
        }
    });
};
