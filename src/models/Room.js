import {Model} from 'backbone';

const ApiKey = "CG1-ThGZYP4VvLrOHD5cg7CYTY-sMVfHKJ2CuEet";
const ApiIP = "bb1b9d31.ngrok.io";

let api_url = `http://${ApiIP}/api/${ApiKey}/groups`;

const Room = Model.extend({
	url: api_url
});

export default Room;