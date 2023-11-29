import { render, screen } from "@testing-library/react";
import { MemoryRouter, Router } from "react-router-dom";
import NavBar from "../navbar";

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
