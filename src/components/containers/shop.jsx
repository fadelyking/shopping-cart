import PropTypes from "prop-types";
import Card from "../components/card";
import NavBar from "../components/navbar";
import "./shop.css";

export default function Shop(props) {
	if (props.images.length !== 1) {
		return (
			<>
				<NavBar itemsNumber={props.itemsNum} />
				<div className="main-container">
					<div className="main">
						<div className="cards-container">
							{props.images.map((image) => {
								return (
									<Card
										item={image}
										name={image.title}
										image={image.image}
										description={image.description}
										price={image.price}
										key={image.id}
										itemsNum={props.itemsNum}
										setItemsNum={props.setItemsNum}
										cart={props.cart}
										setCartItems={props.setCartItems}
									/>
								);
							})}
						</div>
					</div>
				</div>
			</>
		);
	}
}

Shop.propTypes = {
	images: PropTypes.array,
	itemsNum: PropTypes.number,
	setItemsNum: PropTypes.func,
	cart: PropTypes.array,
	setCartItems: PropTypes.func,
};
