import express from 'express';
import configure from './server/configure.js';
let app = express();

app = configure(app);

app.listen(process.env.PORT || 3000,()=>{
	console.log('server running on 3000');
})