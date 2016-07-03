const { Model, Collection } = Backbone;

class ResultModel extends Model {
    constructor(option) {
        super(option);
    }
    defaults() {
        return {
            usernid: 0,
            taskid: 0,
            stars: 4, // из 5
            text: 'text'
        }
    }
}

class ResultCollection extends Collection {
    constructor(options) {
        super(options);
        this.model = ResultModel;
    }
}

const Results = new ResultCollection;

Results.add([new ResultModel({
    usernid: 1,
    taskid: 1,
    stars: 4,
    text: 'text jlby'
}), new ResultModel({
    usernid: 1,
    taskid: 2,
    stars: 3,
    text: 'text ldf'
}), new ResultModel({
    usernid: 1,
    taskid: 3,
    stars: 4,
    text: 'text nhb'
})]);

export { ResultModel, Results }
