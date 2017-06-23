import {Collection} from 'backbone';
import Light from '../models/Light';

const ApiKey = "CG1-ThGZYP4VvLrOHD5cg7CYTY-sMVfHKJ2CuEet";
const ApiIP = "bb1b9d31.ngrok.io";

let api_url = `http://${ApiIP}/api/${ApiKey}/lights`;

const Lights = Collection.extend({
	model: Light,
	url: api_url
});

export default Lights;