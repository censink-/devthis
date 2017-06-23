import {View} from 'backbone';
import DashboardRouter from '../routers/DashboardRouter';

/**
 * Object representing the TeamLinks element
 *
 * @constructor
 */
const Navigation = View.extend({
	router: null,

	events: {
		'click a': 'clickHandler'
	},

	initialize: function ()
	{
		//Initialize the router to activate navigation
		this.router = new DashboardRouter();
	},

	/**
	 * Click handler for links, retrieve data attributes and navigate router
	 *
	 * @param e
	 */
	clickHandler: function (e)
	{
		e.preventDefault();

		//Get target the retrieve data properties
		let target = e.currentTarget;
		let url = target.dataset['link'];

		//Use trigger & replace to update URL and make the router listen to change
		this.router.navigate(url, {trigger: true, replace: true});
	}
});

export default Navigation;
