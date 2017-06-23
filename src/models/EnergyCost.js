import {Model} from 'backbone';

const ApiKey = "jOyQKLsbf3aFc7PT0LelXOpkOrBa6mX6ukUPMHEY";
const ApiIP = "developer.nrel.gov";

let api_url = `https://${ApiIP}/api/utility_rates/v3.json?api_key=${ApiKey}&lat=35.45&lon=-82.98`;

const EnergyCost = Model.extend({
	url: api_url
});

export default EnergyCost;