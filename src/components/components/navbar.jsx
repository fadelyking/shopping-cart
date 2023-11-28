import PropTypes from "prop-types";
import "./navbar.css";
import { Link, useParams } from "react-router-dom";
import Checkout from "../containers/checkout";
import Shop from "../containers/shop";
import Homepage from "../containers/home";
export default function NavBar(props) {
	const name = useParams();
	return (
		<div className="nav-bar">
			<div className="nav-links">
				<ul>
					<li>
						<Link to="/">
							<h1>Home</h1>
						</Link>
					</li>
					<Link to="shop/:name">
						<li>Shop</li>
					</Link>
				</ul>
			</div>

			<Link to="checkout">
				<div className="cart">{props.itemsNumber} Cart Icon</div>
			</Link>
		</div>
	);
}

NavBar.propTypes = {
	itemsNumber: PropTypes.number,
};
