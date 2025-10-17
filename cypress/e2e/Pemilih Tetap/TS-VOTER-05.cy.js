describe("TS-VOTER-05", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.get("#username").type(Cypress.env("username"), { force: true });
    cy.get("#password").type(Cypress.env("password"), { force: true });
    cy.get("#kt_login_signin_submit").should("contain", "Masuk").click();
    cy.location("href").should("eq", "https://aps-rejanglebong.skwn.dev/dev/");
    cy.get(".menu-item").eq(1).click();
  });
  it("TS-VOTER-05-001", () => {
    const fileName = "Data Pemilih 2025-10-17 07_30_44.xlsx";

    cy.get("#cardDataPemilih button.dropdown-toggle").click();
    cy.get("#cardDataPemilih div.dropdown-menu a:nth-child(2)").click();
    cy.get('#form_upload_pemilih [name="excel_file"]')
      .click()
      .attachFile(fileName);
    cy.get('#form_upload_pemilih [name="excel_file"]').should(
      "have.value",
      "C:\\fakepath\\Data Pemilih 2025-10-17 07_30_44.xlsx"
    );
    cy.get("#form_upload_pemilih button.btn-aps").click();
    cy.get("#kt_body button.swal2-confirm").click();
    cy.get("#kt_body button.swal2-confirm").click();
    cy.get(".notification").should("contain", "Berhasil Mengimport Data");
  });
  it("TS-VOTER-05-002", () => {
    const fileName = "Data Pemilih 2025-10-17 07_30_44.pdf";

    cy.get("#cardDataPemilih button.dropdown-toggle").click();
    cy.get("#cardDataPemilih div.dropdown-menu a:nth-child(2)").click();
    cy.get('#form_upload_pemilih [name="excel_file"]')
      .click()
      .attachFile(fileName);
    cy.get(".error_upload_pemilih")
      .should("be.visible")
      .should("contain", "Format file tidak sesuai");
  });
  it("TS-VOTER-05-003", () => {
    const fileName = "pemilih_tetap.txt";

    cy.get("#cardDataPemilih button.dropdown-toggle").click();
    cy.get("#cardDataPemilih div.dropdown-menu a:nth-child(2)").click();
    cy.get('#form_upload_pemilih [name="excel_file"]')
      .click()
      .attachFile(fileName);
    cy.get('#form_upload_pemilih [name="excel_file"]').should(
      "have.value",
      "C:\\fakepath\\pemilih_tetap.xlsx"
    );
    cy.get("#form_upload_pemilih button.btn-aps").click();
    cy.get("#kt_body button.swal2-confirm").click();
    cy.get("#kt_body button.swal2-confirm").click();
    cy.get(".notification").should(
      "contain",
      "Gagal Mengimport Data, Template tidak sesuai"
    );
  });
  it("TS-VOTER-05-004", () => {
    const fileName = "pemilih_tetap.xlsx";

    cy.get("#cardDataPemilih button.dropdown-toggle").click();
    cy.get("#cardDataPemilih div.dropdown-menu a:nth-child(2)").click();
    cy.get('#form_upload_pemilih [name="excel_file"]')
      .click()
      .attachFile(fileName);
    cy.get(".error_upload_pemilih")
      .should("be.visible")
      .should("contain", "Template file tidak sesuai");
  });
  it("TS-VOTER-05-005", () => {
    const fileName = "test.jpg";

    cy.get("#cardDataPemilih button.dropdown-toggle").click();
    cy.get("#cardDataPemilih div.dropdown-menu a:nth-child(2)").click();
    cy.get('#form_upload_pemilih [name="excel_file"]')
      .click()
      .attachFile(fileName);
    cy.get(".error_upload_pemilih")
      .should("be.visible")
      .should("contain", "Format file tidak sesuai");
  });
  it("TS-VOTER-05-006", () => {
    cy.get("#cardDataPemilih button.dropdown-toggle").click();
    cy.get("#cardDataPemilih div.dropdown-menu a:nth-child(2)").click();
    cy.get("#form_upload_pemilih button.btn-aps").click();
    cy.get(".error_upload_pemilih")
      .should("be.visible")
      .should("contain", "File wajib diisi");
  });
  it("TS-VOTER-05-007", () => {
    cy.get("#cardDataPemilih button.dropdown-toggle").click();
    cy.get("#cardDataPemilih div.dropdown-menu a:nth-child(2)").click();
    // cy.get("#form_upload_pemilih button.btn-light-aps").click();
    cy.get("#menus_title")
      // .should("be.visible")
      .should("have.text", "Pemilih Tetap");
  });
});
