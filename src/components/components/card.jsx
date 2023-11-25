import "./card.css";

export default function Card({ id, name, image, description, price }) {
	return (
		<>
			<div className="card">
				<div className="card-top">
					<img src={image} />
				</div>
				<div className="card-bottom">
					<p>{name}</p>
					<p>${price}</p>
					<form action="#">
						<label htmlFor="quantity">Quantity</label>
						<select name="Quantity" id="quantity">
							<option value="1">1</option>
							<option value="2">2</option>
							<option value="3">4</option>
							<option value="5">6</option>
							<option value="7">7</option>
							<option value="8">8</option>
							<option value="9">9</option>
							<option value="10">10</option>
						</select>
						<input type="submit" value="Submit" />
					</form>
				</div>
			</div>
		</>
	);
}
