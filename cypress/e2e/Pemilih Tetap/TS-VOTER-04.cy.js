describe("TS-VOTER-04", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.get("#username").type(Cypress.env("username"), { force: true });
    cy.get("#password").type(Cypress.env("password"), { force: true });
    cy.get("#kt_login_signin_submit").should("contain", "Masuk").click();
    cy.location("href").should("eq", "https://aps-rejanglebong.skwn.dev/dev/");
    cy.get(".menu-item").eq(1).click();
    cy.get("#table-inputpemilih_dtSearch").type("3984569044125904");
    cy.get("#table-inputpemilih td.sorting_1")
      .should("be.visible")
      .should("have.text", "3984569044125904");
  });
  it("TS-VOTER-04-001", () => {
    cy.get("#table-inputpemilih tr:nth-child(1) i.far").click();
    cy.get('[name="pemilih_nik"]').clear();
    cy.get('[name="pemilih_nik"]').type("1232323232323232");
    cy.get("#btn-simpan").click();
    cy.get(".swal2-confirm").click();
    cy.get(".notification").should("contain", "Berhasil Memperbarui Data");
  });
  it("TS-VOTER-04-002", () => {
    cy.get("#table-inputpemilih tr:nth-child(1) i.far").click();
    cy.get('[name="pemilih_nama"]').clear();
    cy.get('[name="pemilih_nama"]').type("Santoso");
    cy.get("#btn-simpan").click();
    cy.get(".swal2-confirm").click();
    cy.get(".notification").should("contain", "Berhasil Memperbarui Data");
  });
  it("TS-VOTER-04-003", () => {
    cy.get("#table-inputpemilih tr:nth-child(1) i.far").click();
    cy.get('[name="pemilih_alamat"]').clear();
    cy.get('[name="pemilih_alamat"]').type("Jl. Raya No. 123");
    cy.get("#btn-simpan").click();
    cy.get(".swal2-confirm").click();
    cy.get(".notification").should("contain", "Berhasil Memperbarui Data");
  });
  it("TS-VOTER-04-004", () => {
    cy.get("#table-inputpemilih tr:nth-child(1) i.far").click();
    cy.get("#select2-pemilih_tps_id-container").click();
    cy.get(".select2-results").first().click();
    cy.get("#btn-simpan").click();
    cy.get(".swal2-confirm").click();
    cy.get(".notification").should("contain", "Berhasil Memperbarui Data");
  });
  it.only("TS-VOTER-04-005", () => {
    cy.get("#table-inputpemilih tr:nth-child(1) i.far").click();
    cy.get("#Statusradio label:nth-child(2)").click();
    cy.get('label:nth-child(2) [name="pemilih_status_id"]').check();
    cy.get("#btn-simpan").click();
    cy.get(".swal2-confirm").click();
    cy.get(".notification").should("contain", "Berhasil Memperbarui Data");
  });
  it("TS-VOTER-04-006", () => {
    cy.get("#table-inputpemilih tr:nth-child(1) i.far").click();
    cy.get(
      "#pagecontainer div.card-toolbar > button.btn-light-aps.btn-sm"
    ).click();
    cy.get("#menus_title")
      .should("be.visible")
      .should("have.text", "Pemilih Tetap");
  });
});
