import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Homepage from "../home";

describe("Homepage", () => {
	it("Should render the homepage", () => {
		const { container } = render(
			<MemoryRouter>
				<Homepage />
			</MemoryRouter>
		);
		expect(container).toMatchSnapshot();
	});
});
