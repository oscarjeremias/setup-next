import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import Home from "../pages/index";

it("", () => {
	const { getByText } = render(<Home />)

	expect(getByText("Ola mundo")).toBeInTheDocument()
})

