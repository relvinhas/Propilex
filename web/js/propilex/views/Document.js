define(
    [
        'text!templates/document.html'
    ],
    function (template) {
        return Backbone.View.extend({
            template: _.template(template),

            initialize: function (options) {
                this.documentModel = options.documentModel;
            },

            render: function () {
                this.$el.html(this.template(this.documentModel.toJSON()));
            }
        });
    }
);
