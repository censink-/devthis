import {View} from 'backbone';
import _ from 'underscore';

const ShowRooms = View.extend({
	templateRooms: '',
	templateError: '',

	initialize: function ()
	{
		//Set templates to use later on
		this.templateRooms = _.template($('#template-rooms').html());
		this.templateError = _.template($('#template-error').html());

		//Listen to global events
		App.events.on('loadRooms', () => this.loadRooms());
	},

	/**
	 * Wrapper function to load the rooms
	 *
	 * @param data
	 */
	loadRooms: function (data)
	{
		console.log(data);

		this.collection.fetch({
			success: (collection, response) => this.loadRoomsSuccessHandler(collection, response),
			error: (collection, response) => this.loadRoomsErrorHandler(collection, response),
			data: {
			}
		});
	},

	/**
	 * Success Handler will add HTML
	 *
	 * @param collection
	 * @param response
	 */
	loadRoomsSuccessHandler: function (collection, response)
	{
		try
		{
			this.$el.html(this.templateRooms({rooms: collection.models[0].attributes}));
			this.$el.parent().children().hide();
			this.$el.show();
		} catch (e) {
			this.$el.html(this.templateError({message: "API Error: " + response[0].error.description}));
		}
	},

	/**
	 * On error, show error message in this $el
	 *
	 * @param collection
	 * @param response
	 */
	loadRoomsErrorHandler: function (collection, response)
	{
		this.$el.html(this.templateError({message: response.statusText}));
	}
});

export default ShowRooms;