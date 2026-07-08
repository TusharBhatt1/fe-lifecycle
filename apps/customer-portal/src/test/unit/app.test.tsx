import { render } from "@testing-library/react";
import App from "../../App";
import { sum } from "@repo/utils";

describe("App", () => {
	it("should render header", () => {
		const { getByRole } = render(<App />);
		expect(getByRole("heading")).toHaveTextContent("Complete life style");
	});

	it("sum function",()=>{
		expect(sum(10,40)).toBe("Sum is 50")
	})
});
