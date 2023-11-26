import { useState } from "react";
import "./card.css";

export default function Card(props) {
	const handleSubmit = (e) => {
		e.preventDefault();
	};

	const [quantity, setQuantity] = useState(0);

	const handleClick = (e) => {
		e.preventDefault();
		props.setItemsNum(props.itemsNum + 1);

		const newCart = props.cart.slice();
		for (let i = -1; i < quantity; i++) {
			console.log("pushed");
			newCart.push(props.item);
		}
		props.setCartItems(newCart);
		setQuantity(0);
		console.log(props.cart);
	};

	const handleSelect = (e) => {
		setQuantity(e.target.value);
	};

	return (
		<>
			<div className="card">
				<div className="card-top">
					<img src={props.image} />
				</div>
				<div className="card-bottom">
					<p>{props.name}</p>
					<p>${props.price}</p>
					<form onSubmit={handleSubmit}>
						<label htmlFor="quantity">Quantity</label>
						<select
							name="Quantity"
							value={quantity}
							onChange={handleSelect}
							id="quantity"
						>
							<option value="1">1</option>
							<option value="2">2</option>
							<option value="3">4</option>
							<option value="5">6</option>
							<option value="7">7</option>
							<option value="8">8</option>
							<option value="9">9</option>
							<option value="10">10</option>
						</select>
						<button onClick={handleClick}>Add to Cart</button>
					</form>
				</div>
			</div>
		</>
	);
}
