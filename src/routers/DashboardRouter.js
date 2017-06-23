import {Router} from 'backbone';

/**
 * Router for the matches URL's
 *
 * @constructor
 */
const DashboardRouter = Router.extend({
	routes: {
		'': 'dashboardAction',
		'rooms': 'roomsAction',
		'room/:id': 'roomAction'
	},

	/**
	 * Route callback, used to trigger global event
	 *
	 */
	dashboardAction: function ()
	{
		console.log("Router: dashboard");

		App.events.trigger('loadGroup', {
			id: -1
		});
		App.events.trigger('calculate', {});
	},
	roomsAction: function()
	{
		console.log("Router: rooms");

		App.events.trigger('loadRooms', {});
	},
	roomAction: function(id)
	{
		console.log("Router: room " + id);

		App.events.trigger('loadRoom', {
			id: id
		});
	}
});

export default DashboardRouter;
