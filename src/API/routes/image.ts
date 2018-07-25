import { Express } from 'express';
import { get, post } from '../controllers/image';
import multer from 'multer';

const storage = multer.memoryStorage();
const upload = multer({ storage });

export const route = (app: Express) => {
    app.route('/image')
       .get(get)
       .post(upload.single('image'), post);
};
