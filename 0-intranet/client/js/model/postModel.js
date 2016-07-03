const { Model, Collection } = Backbone;

class PostModel extends Model {
    constructor(option) {
        super(option);
        this.urlRoot = '/user/1/post/';
    }
    defaults() {
        return {
            title: 'string',
            text: 'html',
            date: new Date(),
            status: 1 // 0 – активна, 1 – оценивание, 2 – оценено
        }
    }
}

class PostCollection extends Collection {
    constructor(options) {
        super(options);
        this.model = PostModel;
    }
}

const Posts = new PostCollection;

Posts.add([new PostModel({
    title: "Один",
    text: "Два",
    date: (new Date()),
    status: 0
}), new PostModel({
    title: "Два",
    text: "Три",
    date: (new Date()),
    status: 1
}), new PostModel({
    title: "Три",
    text: "Четыре",
    date: (new Date()),
    status: 2
})]);

export { PostModel, Posts }
