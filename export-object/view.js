/**
 * funciones publicas tienen acceso a la referencia del modelo
 * funciones privadas interpretan las propiedades del modelo por asrgumento, y a la vista por referencia
 */

var view;

function testPrivate(attr) {
    attr.toLowerCase();
    view.testPublic2();
}

view = Backbone.View.extends({
    testPublic: function () {
        testPrivate(this.model.get('test'));
    },

    testPublic2: function () {
        return this.model.get('test2');
    },

    init: function () {
        this.listenTo(this.view, 'test', _.noop)
    }
});

module.exports = view;
