var RatingTemplate = require('../../templates/components/ratingView.hbs');

const { View } = Backbone;

class RatingView extends View {
    constructor() {
        super();
        this.el = $('#page');
        // this.events = {
            // 'click .js_task_header': 'openTask'
        // };
        this.template = RatingTemplate;
        this.render();
        // View.apply(this);
    }

    render() {
        this.el.html(this.template({}));
    }
}

export { RatingView }