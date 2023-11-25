import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "../containers/home";
import Shop from "../containers/shop";

export default function Router() {
	const router = createBrowserRouter([
		{
			path: "/",
			element: <Homepage />,
		},
		{
			path: "shop",
			element: <Shop />,
		},
	]);

	return <RouterProvider router={router} />;
}
