import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Shop from "../shop";
import userEvent from "@testing-library/user-event";
import { describe } from "vitest";

const images = [
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

	it("Add to cart button", () => {
		render(
			<MemoryRouter>
				<Shop images={images} />
			</MemoryRouter>
		);

		const buttons = screen.getAllByRole("button", { name: "Add to Cart" });
		expect(buttons[1]).toBeInTheDocument();
	});
});
