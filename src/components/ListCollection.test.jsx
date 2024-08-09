import { render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, it } from "vitest";
import ListCollection, { ListCollectionEntry } from "./ListCollection";
import userEvent from "@testing-library/user-event";

describe("ListCollectionEntry", () => {
	it("renders the text correctly", () => {
		render(
			<ListCollectionEntry
				text={"Hello"}
				onClick={() => {}}
				isSelected={false}
			/>
		);

		expect(screen.getByText("Hello")).toBeInTheDocument();
	});
});

describe("ListCollection", () => {
	const texts = ["All", "Clothing", "Jewelery", "Shoes"];
	beforeEach(() => {
		render(<ListCollection />);
	});

	it("renders the list correctly", () => {
		texts.forEach(text => {
			expect(screen.getByText(text)).toBeInTheDocument();
		});
	});

	it("correctly selects the list entry", async () => {
		const user = userEvent.setup();

		const clickAndVeryify = async (text, idx) => {
			const button0 = screen.getByRole("button", { name: text });
			await user.click(button0);
	
			expect(screen.getAllByRole("listitem")[idx]).toHaveClass("selected");	
		};
		
		for (let i = 0; i < texts.length; ++i) {
			await clickAndVeryify(texts[i], i);
		}
	});
});