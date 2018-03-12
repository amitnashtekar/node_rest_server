import path from 'path';
import routes from './routes';

import express from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import morgan from'morgan';
import methodOverride from 'method-override';
import errorHandler from 'errorhandler';

export default function configure(app) {
	app.use(morgan('dev'));
	app.use(bodyParser.urlencoded({'extended': true}));
	app.use(bodyParser.json());
	app.use(methodOverride());
	app.use(cookieParser('amitashtekarcookie'));

	routes(app);


	//app.use('/public/',express.static(path.join(__dirname,'../public')));

	if(app.get('env') === 'development') {
		app.use(errorHandler());
	}
	return app;
};