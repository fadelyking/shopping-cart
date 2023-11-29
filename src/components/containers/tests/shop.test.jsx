import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Shop from "../shop";

const images = [{ 1: 1, 2: 3, 4: 5 }];

describe("Shop Page", () => {
	it("Should render the shop page", (props) => {
		const { container } = render(
			<MemoryRouter>
				<Shop images={images} />
			</MemoryRouter>
		);
		expect(container).toMatchSnapshot();
	});
});
