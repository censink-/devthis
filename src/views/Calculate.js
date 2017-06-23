import {View} from 'backbone';
import _ from 'underscore';

const ShowRoom = View.extend({
	templateLights: '',
	templateError: '',

	initialize: function ()
	{
		//Set templates to use later on
		this.templateLights = _.template($('#template-calculate').html());
		this.templateError = _.template($('#template-error').html());

		App.events.on('calculate', this.calc, this);
	},

	/**
	 * Wrapper function to load the matches through the collection
	 *
	 * @param data
	 */
	calc: function (data)
	{
		console.log(data);

		this.model.fetch({
			success: (model, response) => this.calcSuccessHandler(model, response),
			error: (model, response) => this.calcErrorHandler(model, response),
			data: {
			}
		});
	},

	/**
	 * Success Handler will add HTML of matches to this $el
	 *
	 * @param model
	 */
	calcSuccessHandler: function (model, response)
	{
		try
		{
			this.$el.html(this.templateLights({cost: model.attributes}));
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
	calcErrorHandler: function (model, response)
	{
		this.$el.html(this.templateError({message: response.statusText}));
	}
});

export default ShowRoom;