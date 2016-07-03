var CommentTemplate = require('../../templates/components/comment.hbs');

const { View } = Backbone;

class CommentView extends View {
    constructor(el) {
        super();
        this.el = el;
        this.events = {
            'click .js_comment_send': 'send'
        };
        this.template = CommentTemplate;
        this.render();
        View.apply(this);
    }

    render() {
        this.el.html(this.template({}));
    }

    send(e) {
        const block = $(e.currentTarget.parentElement);

        const text = $(block).find('.comment__text');
        const stars = $(block).find('.star.active');

        
    }
}


export { CommentView }