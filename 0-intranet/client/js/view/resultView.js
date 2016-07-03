import { Results } from '../model/resultModel.js';

var ResultTemplate = require('../../templates/components/result.hbs');
var ResultItemTemplate = require('../../templates/components/resultItem.hbs');

const { View } = Backbone;

class ResultView extends View {
    constructor(el) {
        super();
        this.el = el;
        this.template = ResultTemplate;
        this.render();
    }

    render() {
        this.el.html(this.template({}));
        this.addAll()
    }

    addOne(model) {
        var view = new ResultItemView({ model });
        this.el.find('#resultItems').append(view.render().el);
    }

    addAll() {
        this.el.find('#resultItems').html(''); 
        Results.each(this.addOne, this);
    }
}

class ResultItemView extends View {
    constructor(options) {
        super(options);
        this.template = ResultItemTemplate;
        this.render();
        View.apply(this);
    }

    className() { return "results__item result";}

    render() {
        this.$el.html(this.template(this.model.toJSON()));
        return this;
    }
}

export { ResultView }