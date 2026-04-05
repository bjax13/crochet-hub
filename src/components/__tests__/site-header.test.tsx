import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { SiteHeader } from "@/components/site-header";

describe("SiteHeader", () => {
  it("renders site title linking home", () => {
    render(<SiteHeader />);
    const title = screen.getByRole("link", { name: "Crochet Hub" });
    expect(title).toHaveAttribute("href", "/");
  });

  it("renders all primary nav destinations in the desktop nav", () => {
    render(<SiteHeader />);
    const desktop = screen.getByRole("navigation", { name: "Primary" });
    expect(
      within(desktop).getByRole("link", { name: "Home" }),
    ).toHaveAttribute("href", "/");
    expect(
      within(desktop).getByRole("link", { name: "What is crochet?" }),
    ).toHaveAttribute("href", "/what-is-crochet");
    expect(
      within(desktop).getByRole("link", { name: "Supplies" }),
    ).toHaveAttribute("href", "/supplies");
    expect(
      within(desktop).getByRole("link", { name: "How projects work" }),
    ).toHaveAttribute("href", "/how-projects-work");
  });

  it("exposes the same routes in the mobile menu after expanding", async () => {
    const user = userEvent.setup();
    render(<SiteHeader />);

    const summary = screen.getByText("Menu").closest("summary");
    expect(summary).toBeTruthy();
    await user.click(summary as HTMLElement);

    const mobile = screen.getByRole("navigation", { name: "Primary mobile" });
    expect(
      within(mobile).getByRole("link", { name: "Home" }),
    ).toHaveAttribute("href", "/");
    expect(
      within(mobile).getByRole("link", { name: "What is crochet?" }),
    ).toHaveAttribute("href", "/what-is-crochet");
  });
});
