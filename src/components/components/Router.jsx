import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "../containers/home";

export default function Router() {
	const router = createBrowserRouter([
		{
			path: "/",
			element: <Homepage />,
		},
	]);

	return <RouterProvider router={router} />;
}
