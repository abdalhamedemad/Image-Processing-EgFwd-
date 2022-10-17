import express from 'express';
import imageProcess from './api/image';

const routes = express.Router();

// routes.get('/', (req: Request, res: Response) => {
// 	res.send('Hello , world! connected');
// });
// iam never use this get request so i comment it
routes.use('/imageprocess', imageProcess.imageProcess);

export default routes;
