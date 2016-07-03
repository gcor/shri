var HeaderTemplate = require('../../templates/components/header.hbs');
const { View } = Backbone;

class HeaderView extends View {
    constructor() {
        super();
        this.el = $('#header');
        this.events = {
            'click .tabs__item': 'changeActiveItem'
        };
        this.template = HeaderTemplate;
        this.render();
        View.apply(this);
    }

    render() {
        this.el.html(this.template({}));
    }

    changeActiveItem(e) {
        $('.tabs__item').removeClass('tabs__item_state_active');
        $(e.currentTarget).addClass('tabs__item_state_active');
    } 
}

export { HeaderView }