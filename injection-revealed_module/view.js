/**
 * dependencia : la vista tiene una referencia del modelo
 * estrategia por modelos : polimorfismo del widget con referencias a diferentes modelos (calendarsearch: RT, OW, MT)
 * concepto de vistas agnosticas (el modelo recupera el estado del widgtet sin que la vista se involucre).
 */

var view;

view = function (model) {
    /* PRIVATE */
    var _test = function () {
        return model.attributes;
        // forzar a NO usar funciones publicas en privadas
    };

    /* PUBLIC */
    return Backbone.View.extends({
        init: function () {
            model.on("change", this.render);
        },

        test2: _.noop,

        render: _.noop
    });
};

module.exports = view;
