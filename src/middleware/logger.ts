import express from 'express';
import QueryTestParameters from './QueryTest';

const QueryT = (
	req: express.Request,
	res: express.Response,
	// eslint-disable-next-line @typescript-eslint/ban-types
	next: Function
): void => {
	const url: string = req.url;
	if (
		QueryTestParameters(
			String(req.query.name),
			Number(req.query.width),
			Number(req.query.height)
		)
	) {
		console.log(`${url} => was visited`);
		next();
	} else {
		res.send(`<h1 text-align='center' > 404 Not Found </h1>
		<p> YOU MUST ENTER A VALID NAME AND VALID WIDTH AND HEIGHT</p>
		<p>HEIGHT && WIDTH MUST >= 40  </p>
		<p> available images : pic,pic2,pic3,pic4</p>
		`);
	}
};

export default QueryT;
