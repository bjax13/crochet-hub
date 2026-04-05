import { render, screen } from "@testing-library/react";
import SuppliesPage from "@/app/supplies/page";

describe("SuppliesPage", () => {
  it("renders essentials copy and navigation to how projects work", () => {
    render(<SuppliesPage />);
    expect(
      screen.getByRole("heading", { name: "Supplies for beginners" }),
    ).toBeInTheDocument();
    expect(
      screen.getByText(/two essentials to try crochet/i),
    ).toBeInTheDocument();
    expect(screen.getByText("yarn")).toBeInTheDocument();
    expect(screen.getByText("crochet hook")).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: /how projects work/i }),
    ).toHaveAttribute("href", "/how-projects-work");
  });
});
