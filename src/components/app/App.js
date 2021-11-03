import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import MainPage from '../pages/MainPage';
import ComicsPage from '../pages/ComicsPage';
import AppHeader from '../appHeader/AppHeader';
import Page404 from '../pages/404';
import SingleComicPage from '../pages/SingleComicPage';

const App = () => {
	return (
		<Router>
			<div className="app">
				<AppHeader />
				<main>
					<Switch>
						<Route exact path="/">
							<MainPage />
						</Route>
						<Route exact path="/comics">
							<ComicsPage />
						</Route>
						<Route exact path="/comics/:comicId">
							<SingleComicPage />
						</Route>
						<Route path="*">
							<Page404 />
						</Route>
					</Switch>
				</main>
			</div>
		</Router>
	);
};

export default App;
