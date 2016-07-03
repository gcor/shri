const { Model, Collection } = Backbone;

class TeamModel extends Model {
    constructor(option) {
        super(option);
        this.urlRoot = '/team/';
    }
    defaults() {
        return {
            id: 0,
            title: 'string'
        }
    }
}

class TeamCollection extends Collection {
    constructor() {
        super();
        this.model = TeamModel;
    }
}

const Teams = new TeamCollection;


Teams.add([new TeamModel({
        id: 1,
        title: 'Гречка'
    }), new TeamModel({
        id: 2,
        title: 'Yet another team'
})])

export { TeamModel, Teams }