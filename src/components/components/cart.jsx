import "./cart.css";
export default function Cart(props) {
	return (
		<>
			<div className="cart-item">
				<div className="cart-item-left">
					<img src={props.itemImage} />
					<div className="item-price">${props.itemPrice}</div>
				</div>
				<div className="cart-item-right">
					<div className="item-title">{props.itemName}</div>
					<div className="item-description">{props.itemDescription}</div>
				</div>
			</div>
		</>
	);
}
