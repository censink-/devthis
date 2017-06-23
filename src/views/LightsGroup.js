import {View} from 'backbone';
import _ from 'underscore';

const LightsGroup = View.extend({
	templateLights: '',
	templateError: '',

	initialize: function ()
	{
		//Set templates to use later on
		this.templateLights = _.template($('#template-lights').html());
		this.templateError = _.template($('#template-error').html());

		//Listen to global events
		App.events.on('loadGroup', this.loadLights, this);
	},

	/**
	 * Wrapper function to load the matches through the collection
	 *
	 * @param data
	 */
	loadLights: function (data)
	{
		let url;

		url = (data.id == -1) ? url = this.collection.url : url = this.collection.url + "/" + data.id;
		data = {};

		this.collection.fetch({
			success: (collection, response) => this.loadLightsSuccessHandler(collection, response),
			error: (collection, response) => this.loadLightsErrorHandler(collection, response),
			data: data,
			url: url
		});
	},

	/**
	 * Success Handler will add HTML of matches to this $el
	 *
	 * @param collection
	 * @param response
	 */
	loadLightsSuccessHandler: function (collection, response)
	{
		try
		{
			this.$el.html(this.templateLights({lights: collection.models[0].attributes}));
			this.$el.parent().children().hide();
			this.$el.show();
			this.$el.parent().find('#cost').show();
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
	loadLightsErrorHandler: function (collection, response)
	{
		this.$el.html(this.templateError({message: response.statusText}));
	}
});

export default LightsGroup;