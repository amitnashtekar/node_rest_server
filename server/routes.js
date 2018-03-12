import express from 'express';
import {index} from '../features';//'../features/home/home';
let router = express.Router();
console.log('index',index);
export default function route(app) {
	router.get('/', index);
	app.use(router);
} 