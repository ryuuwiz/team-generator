describe("Dark mode desktop", () => {
  let ls, theme: any, dark: boolean;
  before(() => {
    cy.viewport("macbook-11");
    cy.then(() => {
      window.localStorage.clear();
    });
  });
  beforeEach(() => {
    cy.visit("http://localhost:3000");
    cy.then(() => {
      ls = window.localStorage.getItem("tg-theme-storage");
      if (ls !== null) {
        theme = JSON.parse(ls);
        dark = theme.state.dark;
      }
    });
  });
  it("should toggle dark mode", () => {
    expect(dark).to.be.false;
    cy.get("[data-cy='darkModeDesktop']").click();
    cy.then(() => {
      ls = window.localStorage.getItem("tg-theme-storage");
      if (ls !== null) {
        theme = JSON.parse(ls);
        dark = theme.state.dark;
        expect(dark).to.be.true;
      }
    });
    cy.get("[data-cy='darkModeDesktop']").click();
    cy.then(() => {
      ls = window.localStorage.getItem("tg-theme-storage");
      if (ls !== null) {
        theme = JSON.parse(ls);
        dark = theme.state.dark;
        expect(dark).to.be.false;
      }
    });
  });
});

describe("Dark mode mobile", () => {
  let ls, theme: any, dark: boolean;
  before(() => {
    cy.viewport("iphone-xr");
    cy.then(() => {
      window.localStorage.clear();
    });
  });
  beforeEach(() => {
    cy.visit("http://localhost:3000");
    cy.then(() => {
      ls = window.localStorage.getItem("tg-theme-storage");
      if (ls !== null) {
        theme = JSON.parse(ls);
        dark = theme.state.dark;
      }
    });
  });
  it("should toggle dark mode", () => {
    expect(dark).to.be.false;
    cy.get("[data-cy='dropdownBtn']").click();
    cy.get("[data-cy='darkModeMobile']").click();
    cy.then(() => {
      ls = window.localStorage.getItem("tg-theme-storage");
      if (ls !== null) {
        theme = JSON.parse(ls);
        dark = theme.state.dark;
        expect(dark).to.be.true;
      }
    });
    cy.get("[data-cy='darkModeMobile']").click();
    cy.then(() => {
      ls = window.localStorage.getItem("tg-theme-storage");
      if (ls !== null) {
        theme = JSON.parse(ls);
        dark = theme.state.dark;
        expect(dark).to.be.false;
      }
    });
  });
});

export {};
