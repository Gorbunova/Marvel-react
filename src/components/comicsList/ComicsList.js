import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

import useMarvelService from '../../services/MarvelService';
import Spinner from '../spinner/spinner';
import ErrorMessage from '../errorMessage/errorMessage';

import './comicsList.scss';
import uw from '../../resources/img/UW.png';
import xMen from '../../resources/img/x-men.png';

const ComicsList = () => {
	const [comicslist, setComicslist] = useState([]);
	const [newItemLoading, setNewItemLoading] = useState(false);
	const [offset, setOffset] = useState(0);
	const [comicsEnded, setComicsEnded] = useState(false);

	const { loading, error, getAllComics } = useMarvelService();

	useEffect(() => {
		onRequest(offset, true);
	}, []);

	const onRequest = (offset, initial) => {
		initial ? setNewItemLoading(false) : setNewItemLoading(true);
		getAllComics(offset).then(onComicsListLoaded);
	};

	const onComicsListLoaded = (newComicslist) => {
		let ended = false;
		if (newComicslist.length < 8) {
			ended = true;
		}

		setComicslist((comicslist) => [...comicslist, ...newComicslist]);
		setNewItemLoading((newItemLoading) => false);
		setOffset((offset) => offset + 8);
		setComicsEnded((charEnded) => ended);
	};

	function renderListItems(comicslist) {
		const items = comicslist.map((item, i) => {
			return (
				<li className="comics__item" key={i}>
					<Link to={`/comics/${item.id}`}>
						<img src={item.thumbnail} alt={item.title} className="comics__item-img" />
						<div className="comics__item-name">{item.title}</div>
						<div className="comics__item-price">{item.price}</div>
					</Link>
				</li>
			);
		});
		return <ul className="comics__grid">{items}</ul>;
	}

	const items = renderListItems(comicslist);

	const errorMessage = error ? <ErrorMessage /> : null;
	const spinner = loading && !newItemLoading ? <Spinner /> : null;
	return (
		<div className="comics__list">
			{errorMessage}
			{spinner}
			{items}
			<button
				className="button button__main button__long"
				disabled={newItemLoading}
				onClick={() => onRequest(offset)}
				style={{ display: comicsEnded ? 'none' : 'block' }}
			>
				<div className="inner">load more</div>
			</button>
		</div>
	);
};

export default ComicsList;
