import { render, screen } from "@testing-library/react";
import HomePage from "@/app/page";

describe("HomePage", () => {
  it("renders the hero and topic links", () => {
    render(<HomePage />);
    expect(
      screen.getByRole("heading", {
        name: /learn crochet from zero/i,
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: /what is crochet/i }),
    ).toHaveAttribute("href", "/what-is-crochet");
    expect(
      screen.getByRole("link", { name: /supplies for beginners/i }),
    ).toHaveAttribute("href", "/supplies");
    expect(
      screen.getByRole("link", { name: /how projects work/i }),
    ).toHaveAttribute("href", "/how-projects-work");
  });

  it("renders supporting copy for empty-state clarity (no account pitch)", () => {
    render(<HomePage />);
    expect(
      screen.getByText(/no account, no payment/i),
    ).toBeInTheDocument();
  });
});
