import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Checkout from "../checkout";

const cart = [
	{ id: 1, name: "shirt", price: 321, image: "link.com" },
	{ id: 2, name: "pants", price: 22, image: "link2.com" },
];

describe("Checkout", () => {
	it("Should render the checkout page", () => {
		const { container } = render(
			<MemoryRouter>
				<Checkout cart={cart} />
			</MemoryRouter>
		);
		expect(container).toMatchSnapshot();
	});
});
