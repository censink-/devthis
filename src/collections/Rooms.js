import {Collection} from 'backbone';
import Room from '../models/Room';

const ApiKey = "CG1-ThGZYP4VvLrOHD5cg7CYTY-sMVfHKJ2CuEet";
const ApiIP = "stud.hosted.hr.nl/0891150";

let api_url = `https://${ApiIP}/api/${ApiKey}/groups.json`;

const Rooms = Collection.extend({
	model: Room,
	url: api_url
});

export default Rooms;