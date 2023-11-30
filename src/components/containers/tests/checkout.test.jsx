import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Checkout from "../checkout";
import userEvent from "@testing-library/user-event";
import { describe, expect, vi } from "vitest";

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
	const { container } = render(
		<MemoryRouter>
			<Checkout cart={cart} />
		</MemoryRouter>
	);

	const total = screen.getByRole("heading", /total: \$0/i);
	expect(total).toBeInTheDocument();
});
