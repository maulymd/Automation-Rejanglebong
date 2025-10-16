describe("TS-VOTER-01", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.get("#username").type(Cypress.env("username"), { force: true });
    cy.get("#password").type(Cypress.env("password"), { force: true });
    cy.get("#kt_login_signin_submit").should("contain", "Masuk").click();
    cy.location("href").should("eq", "https://aps-rejanglebong.skwn.dev/dev/");
    cy.get(".menu-item").eq(1).click();
  });
  it("TS-VOTER-01-001", () => {
  });
  // it("TS-VOTER-01-002", () => {});
  // it("TS-VOTER-01-003", () => {});
  // it("TS-VOTER-01-004", () => {});
  // it("TS-VOTER-01-005", () => {});
  // it("TS-VOTER-01-006", () => {});
  // it("TS-VOTER-01-007", () => {});
  // it("TS-VOTER-01-008", () => {});
  // it("TS-VOTER-01-009", () => {});
  // it("TS-VOTER-01-010", () => {});
  // it("TS-VOTER-01-011", () => {});
  // it("TS-VOTER-01-012", () => {});
  // it("TS-VOTER-01-013", () => {});
  // it("TS-VOTER-01-014", () => {});
  // it("TS-VOTER-01-015", () => {});
  // it("TS-VOTER-01-016", () => {});
  // it("TS-VOTER-01-017", () => {});
  // it("TS-VOTER-01-018", () => {});
  // it("TS-VOTER-01-019", () => {});
  // it("TS-VOTER-01-020", () => {});
  // it("TS-VOTER-01-021", () => {});
  // it("TS-VOTER-01-022", () => {});
  // it("TS-VOTER-01-023", () => {});
  // it("TS-VOTER-01-024", () => {});
});
