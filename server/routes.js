import express from 'express';
import {index,image} from '../features';//'../features/home/home';
let router = express.Router();
console.log('index',index);
export default function route(app) {
	router.get('/home', index);
	router.get('/home/1', image);
	app.use(router);
} 