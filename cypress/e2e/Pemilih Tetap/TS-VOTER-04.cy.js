describe("TS-VOTER-04", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.get("#username").type(Cypress.env("username"), { force: true });
    cy.get("#password").type(Cypress.env("password"), { force: true });
    cy.get("#kt_login_signin_submit").should("contain", "Masuk").click();
    cy.location("href").should("eq", "https://aps-rejanglebong.skwn.dev/dev/");
    cy.get(".menu-item").eq(1).click();
  });
  it("TS-VOTER-04-001", () => {});
  // it("TS-VOTER-04-002", () => {});
  // it("TS-VOTER-04-003", () => {});
  // it("TS-VOTER-04-004", () => {});
  // it("TS-VOTER-04-005", () => {});
  // it("TS-VOTER-04-006", () => {});
});
