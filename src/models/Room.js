import {Model} from 'backbone';

const ApiKey = "CG1-ThGZYP4VvLrOHD5cg7CYTY-sMVfHKJ2CuEet";
const ApiIP = "stud.hosted.hr.nl/0891150";

let api_url = `https://${ApiIP}/api/${ApiKey}/groups`;

const Room = Model.extend({
	url: api_url
});

export default Room;