import cors from 'cors';
import express from 'express';
import bodyParser from 'body-parser';
import { route } from './routes/image';

const app = express();
const port = 3001;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors({
    optionsSuccessStatus: 200,
    allowedHeaders: 'localhost:3001'
}));

route(app);

app.use((req, res) => res.status(404).send({ url: req.originalUrl + ' not found' }));
app.listen(port, () => console.log(`App listening on port ${port}`));
