import { InfoView } from './infoView';
import { ResultView } from './resultView';
import { CommentView } from './commentView';
import { Posts } from '../model/postModel.js';

const PostsTemplate = require('../../templates/components/post.hbs');
const PostTemplate = require('../../templates/components/postItem.hbs');

const { View } = Backbone;

class PostsView extends View {
    constructor() {
        super();
        this.el = $('#page');
        this.template = PostsTemplate;
        this.render();
    }

    render() {
        this.el.html(this.template({}));
        this.addAll()
        const info = new InfoView();
    }

    addOne(model) {
        var view = new PostItemView({ model });
        $('#posts').append(view.render().el);
    }

    addAll() {
        this.$('#posts').html('');
        Posts.each(this.addOne, this);
    }
}

class PostItemView extends View {
    constructor(options) {
        super(options);
        this.events = {
            'click .js_post_open': 'toggleForm'
        };
        this.template = PostTemplate;
        this.render();
        View.apply(this);
    }

    className() { return "post";}

    render() {
        this.$el.html(this.template(this.model.toJSON()));
        return this;
    }

    toggleForm(e) {
        const block = e.currentTarget.parentElement;
        const resultBlock = $(block).find('#result');
        const commentBlock = $(block).find('#comment');

        if ($(e.currentTarget).hasClass('open')) {
            $(e.currentTarget).removeClass('open');
            $(e.currentTarget).html('Открыть');
            $(resultBlock).html('');
            $(commentBlock).html('');
        } else {
            $(e.currentTarget).html('Свернуть');
            $(e.currentTarget).addClass('open');
            const result = new ResultView(resultBlock);
            const comment = new CommentView(commentBlock);
        }
        
    }
}

export { PostsView }
