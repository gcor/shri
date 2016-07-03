import { AppRouter } from './router/appRouter';
import { HeaderView } from './view/headerView';

$(() => {
	const App = {};
    App.Router = new AppRouter();

    App.HeaderView = new HeaderView();

    Backbone.history.start();
});
