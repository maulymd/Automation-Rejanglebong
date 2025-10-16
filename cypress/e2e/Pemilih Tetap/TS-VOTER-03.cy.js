describe("TS-VOTER-03", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.get("#username").type(Cypress.env("username"), { force: true });
    cy.get("#password").type(Cypress.env("password"), { force: true });
    cy.get("#kt_login_signin_submit").should("contain", "Masuk").click();
    cy.location("href").should("eq", "https://aps-rejanglebong.skwn.dev/dev/");
    cy.get(".menu-item").eq(1).click();
  });
  it("TS-VOTER-03-001", () => {
    cy.get("#cardDataPemilih span.mr-0 svg").click();
    cy.get(
      "#select2-filter_provinsi_id-container span.select2-selection__placeholder"
    ).click();
    cy.get("#kt_body input.select2-search__field").type("Bengkulu");
    cy.get(".select2-results").first().click();
    cy.get("#table-inputpemilih_id-modal button.btn-aps").click();
    cy.get("#table-inputpemilih tr:nth-child(2) a.text-aps").click();
    cy.get("#table-inputpemilih span:nth-child(1) span").should("be.visible");
    cy.get("#table-inputpemilih tr:nth-child(2) label.text-wrap")
      .invoke("text")
      .should("match", /Bengkulu/);
  });
  it("TS-VOTER-03-002", () => {
    cy.get("#cardDataPemilih span.mr-0 svg").click();
    cy.get(
      "#select2-filter_provinsi_id-container span.select2-selection__placeholder"
    ).click();
    cy.get("#kt_body input.select2-search__field").type("Bengkulu"); //provinsi
    cy.get(".select2-results").first().click();
    cy.get("#select2-filter_kota_id-container").click(); //kota
    cy.get(".select2-results").first().click();
    cy.get("#table-inputpemilih_id-modal button.btn-aps").click();
    cy.get("#table-inputpemilih tr:nth-child(2) a.text-aps").click();
    cy.get("#table-inputpemilih span:nth-child(1) span").should("be.visible");
    cy.get("#table-inputpemilih tr:nth-child(2) label.text-wrap")
      .invoke("text")
      .should("match", /Rejang Lebong/);
  });
  it("TS-VOTER-03-003", () => {
    cy.get("#cardDataPemilih span.mr-0 svg").click();
    cy.get(
      "#select2-filter_provinsi_id-container span.select2-selection__placeholder"
    ).click();
    cy.get("#kt_body input.select2-search__field").type("Bengkulu"); //provinsi
    cy.get(".select2-results").first().click();
    cy.get("#select2-filter_kota_id-container").click(); //kota
    cy.get(".select2-results").first().click();
    cy.get(
      "#select2-filter_kecamatan_id-container span.select2-selection__placeholder"
    ).click(); //kecamatan
    cy.get("#kt_body input.select2-search__field").type("utara");
    cy.get(".select2-results").first().click();
    cy.get("#table-inputpemilih_id-modal button.btn-aps").click();
    cy.get("#table-inputpemilih tr:nth-child(2) a.text-aps").click();
    cy.get("#table-inputpemilih span:nth-child(1) span").should("be.visible");
    cy.get("#table-inputpemilih tr:nth-child(2) label.text-wrap")
      .invoke("text")
      .should("match", /Curup Utara/);
  });
  it("TS-VOTER-03-004", () => {
    cy.get("#cardDataPemilih span.mr-0 svg").click();
    cy.get(
      "#select2-filter_provinsi_id-container span.select2-selection__placeholder"
    ).click();
    cy.get("#kt_body input.select2-search__field").type("Bengkulu"); //provinsi
    cy.get(".select2-results").first().click();
    cy.get("#select2-filter_kota_id-container").click(); //kota
    cy.get(".select2-results").first().click();
    cy.get(
      "#select2-filter_kecamatan_id-container span.select2-selection__placeholder"
    ).click(); //kecamatan
    cy.get("#kt_body input.select2-search__field").type("utara");
    cy.get(".select2-results").first().click();

    cy.get("#select2-filter_kelurahan_id-container").click(); //kelurahan
    cy.get("#kt_body input.select2-search__field").type("dusun curup");
    cy.get(".select2-results").first().click();

    cy.get("#select2-filter_tps_id-container").click(); // tps
    cy.get("#kt_body input.select2-search__field").type("tes");
    cy.get(".select2-results").first().click();
    cy.get("#table-inputpemilih_id-modal button.btn-aps").click();
    cy.get("#table-inputpemilih tr:nth-child(2) a.text-aps").click();
    cy.get("#table-inputpemilih span:nth-child(1) span").should("be.visible");
    cy.get("#table-inputpemilih tr:nth-child(2) label.text-wrap")
      .invoke("text")
      .should("match", /Dusun Curup/);
  });
  it.only("TS-VOTER-03-005", () => {
    cy.get("#cardDataPemilih span.mr-0 svg").click();
    cy.get(
      "#select2-filter_provinsi_id-container span.select2-selection__placeholder"
    ).click();
    cy.get("#kt_body input.select2-search__field").type("Bengkulu"); //provinsi
    cy.get(".select2-results").first().click();
    cy.get("#table-inputpemilih_id-modal button.btn-aps").click();
    cy.get("#table-inputpemilih tr:nth-child(2) a.text-aps").click();
    cy.get("#table-inputpemilih span:nth-child(1) span").should("be.visible");
    cy.get("#table-inputpemilih tr:nth-child(2) label.text-wrap")
      .invoke("text")
      .should("match", /Bengkulu/);
    cy.get(
      '#cardDataPemilih path[d="M5,4 L19,4 C19.2761424,4 19.5,4.22385763 19.5,4.5 C19.5,4.60818511 19.4649111,4.71345191 19.4,4.8 L14,12 L14,20.190983 C14,20.4671254 13.7761424,20.690983 13.5,20.690983 C13.4223775,20.690983 13.3458209,20.6729105 13.2763932,20.6381966 L10,19 L10,12 L4.6,4.8 C4.43431458,4.5790861 4.4790861,4.26568542 4.7,4.1 C4.78654809,4.03508894 4.89181489,4 5,4 Z"]'
    ).click();
    cy.get(
      "div#table-inputpemilih_id-modal:nth-of-type(2) button.table-inputpemilih_btn-reset-filter"
    ).click();
    cy.get("#table-inputpemilih tr:nth-child(2) label.text-wrap").should("be.visible");
  });
});
