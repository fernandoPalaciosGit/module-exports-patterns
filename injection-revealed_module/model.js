var Model;

/* modulo 100% public */
Model = Backbone.Model.extends({
    defaults: {},

    init: function () {
        this.listenTo(this.view, 'test', _.noop);
    }
});

module.exports = Model;
