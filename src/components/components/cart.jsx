import "./cart.css";
import PropTypes from "prop-types";
export default function Cart(props) {
	return (
		<>
			<div className="cart-item">
				<div className="cart-item-left">
					<div className="item-price">${props.itemPrice}</div>
				</div>
				<div className="cart-item-right">
					<div className="item-title">{props.itemName}</div>
				</div>
			</div>
		</>
	);
}

Cart.propTypes = {
	itemPrice: PropTypes.number,
	itemName: PropTypes.string,
};
