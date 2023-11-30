import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Shop from "../shop";
import userEvent from "@testing-library/user-event";
import { describe, expect, vi } from "vitest";

const images = [
	{ id: 1, name: "shirt", price: 321, image: "link.com" },
	{ id: 2, name: "pants", price: 22, image: "link2.com" },
];
const cart = [
	{ id: 1, name: "shirt", price: 321, image: "link.com" },
	{ id: 2, name: "pants", price: 22, image: "link2.com" },
];

describe("Shop Page", () => {
	it("Should render the shop page", (props) => {
		const { container } = render(
			<MemoryRouter>
				<Shop images={images} />
			</MemoryRouter>
		);
		expect(container).toMatchSnapshot();
	});

	it("Add to cart button", async () => {
		const setItemsNum = vi.fn();
		const setCartItems = vi.fn();
		const itemsNum = 0;
		const user = userEvent.setup();
		render(
			<MemoryRouter>
				<Shop
					images={images}
					setItemsNum={setItemsNum}
					itemsNum={itemsNum}
					cart={cart}
					setCartItems={setCartItems}
				/>
			</MemoryRouter>
		);

		const buttons = screen.getAllByRole("button", { name: "Add to Cart" });
		const cartnum0 = screen.getByText(/0 cart icon/i);
		expect(buttons[1]).toBeInTheDocument();
		expect(cartnum0).toBeInTheDocument();
		await user.click(buttons[1]);
		expect(setCartItems).toHaveBeenCalled();
		expect(setItemsNum).toHaveBeenCalled();
	});
});
