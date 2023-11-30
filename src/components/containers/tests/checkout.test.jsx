import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Checkout from "../checkout";
import userEvent from "@testing-library/user-event";
import { describe, expect, vi } from "vitest";
import Cart from "../../components/cart";

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

describe("It should calculate total", () => {
	const cart = [
		{ id: 1, name: "shirt", price: 22.3, image: "link.com" },
		{ id: 2, name: "pants", price: 22.3, image: "link2.com" },
	];

	it("Should display total", () => {
		const { container } = render(
			<MemoryRouter>
				<Checkout cart={cart} />
			</MemoryRouter>
		);
		const total = screen.getByRole("heading", /total: \$0/i);
		expect(total).toBeInTheDocument();
	});

	describe("Calculate Total sum of items", () => {
		const item = [
			{ title: "shoes", price: 10, image: "image.com", description: "meow" },
			{ title: "shirt", price: 12, image: "image.com", description: "woof" },
		];
		it("should should calculate everything", () => {
			render(
				<MemoryRouter>
					<Cart
						itemName={item[0].title}
						itemPrice={item[0].price}
						itemImage={item[0].image}
						itemDescription={item[0].description}
					/>
				</MemoryRouter>
			);
			render(
				<MemoryRouter>
					<Cart
						itemName={item[1].title}
						itemPrice={item[1].price}
						itemImage={item[1].image}
						itemDescription={item[1].description}
					/>
				</MemoryRouter>
			);
			const { container } = render(
				<MemoryRouter>
					<Checkout cart={cart} />
				</MemoryRouter>
			);

			const total = screen.getByRole("heading", /total: \$22/i);
			expect(total).toBeInTheDocument();
		});
	});
});
