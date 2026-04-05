import { render, screen } from "@testing-library/react";
import { SiteFooter } from "@/components/site-footer";

describe("SiteFooter", () => {
  it("states that copy uses US crochet terms", () => {
    render(<SiteFooter />);
    expect(screen.getByText(/US crochet terms/i)).toBeInTheDocument();
  });

  it("shows the current year in the copyright line", () => {
    const spy = jest
      .spyOn(Date.prototype, "getFullYear")
      .mockReturnValue(2031);
    render(<SiteFooter />);
    expect(screen.getByText(/© 2031 Crochet Hub/)).toBeInTheDocument();
    spy.mockRestore();
  });
});
