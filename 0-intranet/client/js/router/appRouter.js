import { RatingView } from '../view/ratingView';
import { PostsView } from '../view/postsView';

import { Profiles } from '../view/postsView';

const { Router } = Backbone;
const App = App || {};


class AppRouter extends Router {
    constructor() {
        super({
            routes: {
                // for student
                "": "tasks",
                "team": "team",
                "rating": "rating",

                // for mentor
                "students/:id/": "students",
                // "": "students",
                "teams/:id/": "teams",
                "ratings": "ratings"
            }
        });
    }

    tasks() {
        console.log('index');
        App.PostsView = new PostsView();
    }
    team() {
        console.log('team');
        App.PostsView = new PostsView();
    }
    rating(){
        console.log('rating')
        App.RatingView = new RatingView();
    }



    teams(id) {
        console.log('teams', id)
        App.PostsView = new PostsView();
    }
    students(id) {
        console.log('students', id)
        App.PostsView = new PostsView();
    }
    ratings(){
        console.log('ratings')
        App.RatingView = new RatingView();
    }
};

export { AppRouter };
