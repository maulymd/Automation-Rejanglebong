describe("TS-VOTER-02", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.get("#username").type(Cypress.env("username"), { force: true });
    cy.get("#password").type(Cypress.env("password"), { force: true });
    cy.get("#kt_login_signin_submit").should("contain", "Masuk").click();
    cy.location("href").should("eq", "https://aps-rejanglebong.skwn.dev/dev/");
    cy.get(".menu-item").eq(1).click();
  });
  it("TS-VOTER-02-001", () => {
    cy.get("#table-inputpemilih_dtSearch").type("3984569044125904");
    cy.get("#table-inputpemilih td.sorting_1")
      .should("be.visible")
      .should("have.text", "3984569044125904");
  });
  it("TS-VOTER-02-002", () => {
    cy.get("#table-inputpemilih_dtSearch").type("Ahmad Solikin");
    cy.get("#table-inputpemilih td:nth-child(3)")
      .should("be.visible")
      .should("have.text", "Ahmad Solikin");
  });
  it("TS-VOTER-02-003", () => {
    cy.get("#table-inputpemilih_dtSearch").type("99999999999");
    cy.get("#table-inputpemilih td.dataTables_empty").click();
    cy.get("#table-inputpemilih td.dataTables_empty")
      .should("be.visible")
      .should("have.text", "Nothing found - sorry");
  });
});
