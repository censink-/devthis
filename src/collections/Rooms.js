import {Collection} from 'backbone';
import Room from '../models/Room';

const ApiKey = "CG1-ThGZYP4VvLrOHD5cg7CYTY-sMVfHKJ2CuEet";
const ApiIP = "bb1b9d31.ngrok.io";

let api_url = `http://${ApiIP}/api/${ApiKey}/groups`;

const Rooms = Collection.extend({
	model: Room,
	url: api_url
});

export default Rooms;