import img from './error.gif';
import './errorMessage.scss';

const ErrorMessage = () => {
	return (
		<div className="message-wrapper">
			<img className="error-img" src={img} alt="error" />
		</div>
	);
};

export default ErrorMessage;
