describe("TS-VOTER-05", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.get("#username").type(Cypress.env("username"), { force: true });
    cy.get("#password").type(Cypress.env("password"), { force: true });
    cy.get("#kt_login_signin_submit").should("contain", "Masuk").click();
    cy.location("href").should("eq", "https://aps-rejanglebong.skwn.dev/dev/");
    cy.get(".menu-item").eq(1).click();
  });
  it("TS-VOTER-05-001", () => {});
  // it("TS-VOTER-05-002", () => {});
  // it("TS-VOTER-05-003", () => {});
  // it("TS-VOTER-05-004", () => {});
  // it("TS-VOTER-05-005", () => {});
  // it("TS-VOTER-05-006", () => {});
});
