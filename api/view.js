module.exports = function view (model, dep1, dep2) {
    /* PUBLIC */
    return Backbone.View.extends({
        init: function () {
            parse(model.get('test'));
            this.render(model.toJson());
        },

        render: _.noop
    });

    /* PRIVATE */
    function parse (attr) {

    }
};