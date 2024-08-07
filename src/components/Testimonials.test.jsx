import { render, screen } from "@testing-library/react";
import Testimonials, { TestimonyPersonListEntry } from "./Testimonials";
import { beforeEach, describe, expect, it } from "vitest";

const testPerson = {
  id: 0,
  name: "Albert Einstein",
  profession: "Theoretical Physicist",
  img: "",
  quote: `"Relativity? No, try Fashion Hive. I might have cracked the code of the universe, 
          but Fashion Hive cracked the code of timeless style. E = mc² is nothing compared to their 
          effortlessly cool factor. If only they made lab coats"`
};

describe("TestimonyPersonListEntry", () => {  
  it("renders testimony list entry correctly", () => {
    render(
      <TestimonyPersonListEntry
        key={testPerson.id}
        name={testPerson.name}
        profession={testPerson.profession}
        img={testPerson.img}
        isSelected={false}
        onClick={() => {}}
      />
    )

    expect(screen.getByRole("listitem")).toBeInTheDocument();
    expect(screen.getByText(testPerson.name)).toBeInTheDocument();
    expect(screen.getByText(testPerson.profession)).toBeInTheDocument();
  });
});

describe("Testomonials", () => {
  it("renders the Testimonial Header correctly", () => {
    render(<Testimonials />);
    expect(screen.getByText("Testimonials")).toBeInTheDocument();
  });
});