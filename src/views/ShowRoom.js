import {View} from 'backbone';
import _ from 'underscore';

const ShowRoom = View.extend({
	templateLights: '',
	templateError: '',

	initialize: function ()
	{
		//Set templates to use later on
		this.templateLights = _.template($('#template-room').html());
		this.templateError = _.template($('#template-error').html());

		//Listen to global events
		App.events.on('loadRoom', this.loadRoom, this);
	},

	/**
	 * Wrapper function to load the rooms
	 *
	 * @param data
	 */
	loadRoom: function (data)
	{
		let api_url = this.model.url + '/' + data.id + ".json";

		this.model.fetch({
			url: api_url,
			success: (model, response) => this.loadRoomSuccessHandler(model, response),
			error: (model, response) => this.loadRoomErrorHandler(model, response),
			data: {
			}
		});
	},

	/**
	 * Success Handler will add HTML of rooms to this $el
	 *
	 * @param model
	 * @param response
	 */
	loadRoomSuccessHandler: function (model, response)
	{
		try
		{
			this.$el.html(this.templateLights({room: model.attributes}));
			this.$el.parent().children().hide();
			this.$el.show();
		} catch (e) {
			this.$el.html(this.templateError({message: "API Error: " + response[0].error.description}));
		}

	},

	/**
	 * On error, show error message in this $el
	 *
	 * @param model
	 * @param response
	 */
	loadRoomErrorHandler: function (model, response)
	{
		this.$el.html(this.templateError({message: response.statusText}));
	}
});

export default ShowRoom;