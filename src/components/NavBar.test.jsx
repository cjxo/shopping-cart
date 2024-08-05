import NavBar from "./NavBar";
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

describe("NavBar Component", () => {
  it("renders the navbar logo and links correctly", () => {
    // https://v5.reactrouter.com/web/guides/testing
    // https://stackoverflow.com/questions/74399490/how-to-test-routing-logic-with-react-router-v6-and-testing-library
    render(
      <BrowserRouter>
        <NavBar />
      </BrowserRouter>
    );
    
    expect(screen.getByText("Fashion Hive")).toBeInTheDocument();
    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.getByText("Shop")).toBeInTheDocument();
    expect(screen.getByText("About")).toBeInTheDocument();
    expect(screen.getByAltText("shopping cart image")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Search...")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "" })).toBeInTheDocument();
  });
});