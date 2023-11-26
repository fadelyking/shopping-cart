import Cart from "../components/cart";
import NavBar from "../components/navbar";
import "./checkout.css";

export default function Checkout(props) {
	return (
		<>
			<NavBar />

			<div className="main-checkout">
				<div className="left-container"></div>
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
			</div>
		</>
	);
}
