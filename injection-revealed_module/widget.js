var view = require('./view');
var model = require('./model');

Odigeo.Widget.define({
    // injectar un modelo diferente dependiendo de un estado del widget
    view: view(model),
    model: model
});
