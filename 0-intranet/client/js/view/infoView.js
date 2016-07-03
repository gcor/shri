var InfoTemplate = require('../../templates/components/info.hbs');

const { View } = Backbone;

class InfoView extends View {
    constructor() {
        super();
        this.el = $('#info');
        // this.events = {
            // 'click .js_task_header': 'openTask'
        // };
        this.template = InfoTemplate;
        this.render();
        // View.apply(this);
    }

    render() {
        this.el.html(this.template({}));
    }
}


export { InfoView }