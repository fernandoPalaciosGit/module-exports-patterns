var Model;

Model = Backbone.Model.extends({
    defaults: {},

    init: function () {
        this.listenTo(this.view, 'test', _.noop)
    }
});

module.exports = Model;
