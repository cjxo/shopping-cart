import { render, screen } from "@testing-library/react";
import Slider, { SliderCardProduct } from "./Slider";
import { describe, expect, it } from "vitest";

describe("SliderCardProduct test", () => {
  const testProduct = {
    type: "Jeans",
    name: "Slim Fit Fit 5-Pocket Jeans In Colored Denim Fabric",
    price: "$20.75"
  };

  it("renders the product card correctly", () => {
    render(
      <SliderCardProduct product={testProduct} />
    );

    expect(screen.getByText(testProduct.type)).toBeInTheDocument();
    expect(screen.getByText(testProduct.name)).toBeInTheDocument();
    expect(screen.getByText(testProduct.price)).toBeInTheDocument();
  });
});

describe("Slider test", () => {
  const testProducts = [
    {
      type: "Soap",
      name: "Mint Mild Liquid Soap0",
      price: "$7.95"
    },
    {
      type: "Soap",
      name: "Mint Mild Liquid Soap1",
      price: "$7.95",
    },
    {
      type: "Soap",
      name: "Mint Mild Liquid Soap2",
      price: "$7.95"
    },
    {
      type: "Soap",
      name: "Mint Mild Liquid Soap3",
      price: "$7.95"
    },
    {
      type: "Soap",
      name: "Mint Mild Liquid Soap4",
      price: "$7.95"
    },
    {
      type: "Soap",
      name: "Mint Mild Liquid Soap5",
      price: "$7.95"
    },
    {
      type: "Soap",
      name: "Mint Mild Liquid Soap6",
      price: "$7.95"
    },
    {
      type: "Soap",
      name: "Mint Mild Liquid Soap7",
      price: "$7.95"
    },
  ];

  it("renders products correctly", () => {
    render(
      <Slider displayedProducts={testProducts} />
    );

    testProducts.forEach(product => {
      expect(screen.getByText(product.name)).toBeInTheDocument();
    });
  });

  it("renders scrollers correctly", () => {
    render(<Slider displayedProducts={testProducts} />);
    const button0 = screen.getByTestId("scroll-left-btn");
    const button1 = screen.getByTestId("scroll-right-btn");

    expect(button0).toBeInTheDocument();
    expect(button1).toBeInTheDocument();
  });
});