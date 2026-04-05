import { render, screen } from "@testing-library/react";
import HowProjectsWorkPage from "@/app/how-projects-work/page";

describe("HowProjectsWorkPage", () => {
  it("renders conceptual sections and US terms note in body copy", () => {
    render(<HowProjectsWorkPage />);
    expect(
      screen.getByRole("heading", { name: "How projects work" }),
    ).toBeInTheDocument();
    expect(screen.getByText(/single crochet.*double crochet/i)).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: /what is crochet/i }),
    ).toHaveAttribute("href", "/what-is-crochet");
  });
});
