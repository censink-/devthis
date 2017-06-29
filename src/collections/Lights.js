import {Collection} from 'backbone';
import Light from '../models/Light';

const ApiKey = "CG1-ThGZYP4VvLrOHD5cg7CYTY-sMVfHKJ2CuEet";
const ApiIP = "stud.hosted.hr.nl/0891150";

let api_url = `https://${ApiIP}/api/${ApiKey}/lights`;

const Lights = Collection.extend({
	model: Light,
	url: api_url
});

export default Lights;