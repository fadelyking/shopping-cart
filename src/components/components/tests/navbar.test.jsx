import { render, screen } from "@testing-library/react";
import { MemoryRouter, Router } from "react-router-dom";
import NavBar from "../navbar";
import { describe, vi } from "vitest";
import userEvent from "@testing-library/user-event";
import Shop from "../../containers/shop";

describe("Navigation", () => {
	it("Should render the navigation bar", () => {
		const { container } = render(
			<MemoryRouter>
				<NavBar />
			</MemoryRouter>
		);
		expect(container).toMatchSnapshot();
	});
});

describe("Cart items", async () => {
	it("Add to cart button", async () => {
		const images = [
			{ id: 1, name: "shirt", price: 321, image: "link.com" },
			{ id: 2, name: "pants", price: 22, image: "link2.com" },
		];
		const cart = [
			{ id: 1, name: "shirt", price: 321, image: "link.com" },
			{ id: 2, name: "pants", price: 22, image: "link2.com" },
		];
		const setItemsNum = vi.fn();
		const setCartItems = vi.fn();
		const user = userEvent.setup();
		const { container } = render(
			<MemoryRouter>
				<Shop
					images={images}
					setItemsNum={setItemsNum}
					cart={cart}
					setCartItems={setCartItems}
				/>
			</MemoryRouter>
		);

		const buttons = screen.getAllByRole("button", { name: "Add to Cart" });
		await user.click(buttons[1]);
		expect(setCartItems).toHaveBeenCalled();
		expect(setItemsNum).toHaveBeenCalled();
		expect(cart.length).toBe(2);
	});
});
