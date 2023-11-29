import Cart from "../components/cart";
import NavBar from "../components/navbar";
import PropTypes from "prop-types";
import "./checkout.css";

export default function Checkout(props) {
	const total = props.cart.reduce((accum, item) => accum + item.price, 0);
	return (
		<div className="homeContainer">
			<NavBar />

			<div className="main-checkout">
				<div className="right-container">
					{props.cart.map((item, index) => {
						return (
							<Cart
								key={index}
								itemName={item.title}
								itemPrice={item.price}
								itemImage={item.image}
								itemDescription={item.description}
							/>
						);
					})}
				</div>
				<div className="left-container">TOTAL: ${total}</div>
			</div>
		</div>
	);
}

Checkout.propTypes = {
	cart: PropTypes.Object,
};
