import { useEffect, useState } from "react";
import Card from "../components/card";
import NavBar from "../components/navbar";

export default function Shop() {
	const [images, setImages] = useState([{}]);

	useEffect(() => {
		function getProducts() {
			fetch("https://fakestoreapi.com/products?limit=6")
				.then((res) => res.json())
				.then((json) => setImages(json))
				.catch((error) => console.log(error));
		}

		getProducts();
	}, []);

	if (images.length !== 1) {
		console.log("test");
		return (
			<>
				<NavBar />
				<div className="main">
					<div className="cards-container">
						{images.map((image) => {
							<Card
								id={image.id}
								name={image.title}
								image={image.image}
								description={image.description}
								price={image.price}
							/>;
						})}
					</div>
				</div>
			</>
		);
	}
}
