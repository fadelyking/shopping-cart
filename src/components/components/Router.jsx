import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "../containers/home";
import Shop from "../containers/shop";
import { useEffect, useState } from "react";

export default function Router() {
	const [images, setImages] = useState([{}]);
	const [itemsNum, setItemsNum] = useState(0);
	const [cart, setCartItems] = useState([{}]);

	useEffect(() => {
		function getProducts() {
			fetch("https://fakestoreapi.com/products?limit=6")
				.then((res) => res.json())
				.then((json) => setImages(json))
				.catch((error) => console.log(error));
		}

		getProducts();
	}, []);

	const router = createBrowserRouter([
		{
			path: "/",
			element: <Homepage itemsNum={itemsNum} />,
		},
		{
			path: "shop",
			element: <Shop images={images} itemsNum={itemsNum} setItemsNum={setItemsNum} />,
		},
	]);

	return <RouterProvider router={router} />;
}
