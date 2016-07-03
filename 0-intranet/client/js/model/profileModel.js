const { Model, Collection } = Backbone;

class ProfileModel extends Model {
    constructor(option) {
        super(option);
        this.urlRoot = '/user/';
    }
    defaults() {
        return {
            id: 0,
            name: 'string',
            access: 1 // 0 – студент, 1 – менторство
        }
    }
}

class ProfileCollection extends Collection {
    constructor() {
        super();
        this.model = ProfileModel;
    }
}

const Profiles = new ProfileCollection;


Profiles.add([new ProfileModel({
    id: 1,
    name: 'Антон Ахатов',
    access: 0
}), new ProfileModel({
    id: 2,
    name: 'Арсений Лукин',
    access: 1
})])

export { ProfileModel, Profiles }