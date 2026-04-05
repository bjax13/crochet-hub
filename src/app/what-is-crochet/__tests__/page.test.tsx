import { render, screen } from "@testing-library/react";
import WhatIsCrochetPage from "@/app/what-is-crochet/page";

describe("WhatIsCrochetPage", () => {
  it("renders the page title and a next-step link to supplies", () => {
    render(<WhatIsCrochetPage />);
    expect(
      screen.getByRole("heading", { name: "What is crochet?" }),
    ).toBeInTheDocument();
    const nextLink = screen.getByRole("link", { name: /supplies for beginners/i });
    expect(nextLink).toHaveAttribute("href", "/supplies");
  });

  it("mentions crochet vs knitting for beginner orientation", () => {
    render(<WhatIsCrochetPage />);
    expect(screen.getByText(/crochet vs knitting/i)).toBeInTheDocument();
  });
});
