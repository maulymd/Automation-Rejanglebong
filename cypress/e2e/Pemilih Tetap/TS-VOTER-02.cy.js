describe("TS-VOTER-02", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.get("#username").type(Cypress.env("username"), { force: true });
    cy.get("#password").type(Cypress.env("password"), { force: true });
    cy.get("#kt_login_signin_submit").should("contain", "Masuk").click();
    cy.location("href").should("eq", "https://aps-rejanglebong.skwn.dev/dev/");
    cy.get(".menu-item").eq(1).click();
  });
  it("TS-VOTER-02-001", () => {});
  // it("TS-VOTER-02-002", () => {});
  // it("TS-VOTER-02-003", () => {});
  // it("TS-VOTER-02-004", () => {});
  // it("TS-VOTER-02-005", () => {});
  // it("TS-VOTER-02-006", () => {});
});
