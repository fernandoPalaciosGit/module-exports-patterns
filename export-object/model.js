var model;

model = Backbone.Model.extends({
    defaults: {},

    init: function () {
        this.listenTo(this.view, 'test', _.noop)
    }
});

module.exports = model;
