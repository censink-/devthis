import $ from 'jquery';
import _ from 'underscore';
import DashboardRouter from './routers/DashboardRouter';
import {Events} from 'backbone';
import Navigation from './views/Navigation';
import Room from './models/Room';
import EnergyCost from './models/EnergyCost';
import Rooms from './collections/Rooms';
import Lights from './collections/Lights';
import LightsGroup from './views/LightsGroup';
import ShowRooms from './views/ShowRooms';
import ShowRoom from './views/ShowRoom';
import WatchRooms from './views/WatchRooms';
import Calculate from './views/Calculate';

(function()
{
	let setGlobalVariables = function ()
	{
		window.App = {};
		App.events = _.clone(Events);
		window.$ = $;
	};

	/**
	 * Run after dom is ready
	 */
	let init = function ()
	{
		setGlobalVariables();

		let router = new DashboardRouter();

		let lightsCollection = new Lights();
		let roomsCollection = new Rooms();
		let roomModel = new Room();
		let costModel = new EnergyCost();
		new Navigation({el: "#navbar"});
		new WatchRooms({el: "#rooms"});
		new LightsGroup({el: "#livestatus", collection: lightsCollection});
		new ShowRooms({el: "#rooms", collection: roomsCollection});
		new ShowRoom({el: "#room", model: roomModel});
		new Calculate({el: "#cost", model: costModel});

		Backbone.history.start({pushState: true, root: '/FED/'});
	};

	window.addEventListener('load', init);

})();