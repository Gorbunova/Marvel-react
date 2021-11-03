import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/App';
import './style/style.scss';

ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById('root')
);

/* this.marvelService.getCharacter(id).then((res) =>
			res.data.results.forEach((item) => {
				console.log(item.name);
			})
		); */
