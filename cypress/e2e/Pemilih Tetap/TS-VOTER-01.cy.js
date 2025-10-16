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
    cy.get("#cardDataPemilih button.font-weight-bolder").click();
    cy.get('[name="pemilih_kk"]').type(1234567890123456);
    cy.get('[name="pemilih_nik"]').type(1234567890123456);
    cy.get('[name="pemilih_nama"]').type("Budi Santoso");
    cy.get('[name="pemilih_alamat"]').type("Jalan Santai No. 123");
    cy.get('[name="pemilih_rt"]').type("01");
    cy.get('[name="pemilih_rw"]').type("02");
    cy.get(
      "#select2-pemilih_kelurahan_id-container span.select2-selection__placeholder"
    ).click();
    cy.get("#kt_body input.select2-search__field").type("cu");
    cy.get(".select2-results").first().click();
    cy.get('[name="pemilih_tempat_lahir"]').type("Curup");
    cy.get('[name="pemilih_tgl_lahir"]').click();
    cy.get('#kt_body td[data-date="1760400000000"]').click();
    cy.get("#form_inputpemilih div.col-12").click();
    cy.get("#form_inputpemilih div.col-8 label:nth-child(1) span").click();
    cy.get('input[value="L"]').check();
    cy.get(
      "#select2-pemilih_status_kawin-container span.select2-selection__placeholder"
    ).click();
    cy.get(".select2-results").first().click();
    cy.get(
      "#select2-pemilih_caleg_id-container span.select2-selection__placeholder"
    ).click();
    cy.get(".select2-results").first().click();
    cy.get("#select2-pemilih_tps_id-container").click();
    cy.get(".select2-results").first().click();
    cy.get("#Statusradio label:nth-child(1)").click();
    cy.get('label:nth-child(1) [name="pemilih_status_id"]').check();
    cy.get("#btn-simpan").click();
    cy.get("#modal-confirm-save button.btn-primary").click();
    cy.get(".swal2-confirm").click();
    cy.get(".toast-message")
      .should("be.visible")
      .should("have.text", "Data berhasil disimpan");
  });
  it("TS-VOTER-01-002", () => {
    cy.get("#cardDataPemilih button.font-weight-bolder").click();
    cy.get('[name="pemilih_kk"]').type(1234567890123456);
    cy.get('[name="pemilih_nik"]').type(1234567890123456);
    cy.get('[name="pemilih_nama"]').type("Budi Santoso");
    cy.get('[name="pemilih_alamat"]').type("Jalan Santai No. 123");
    cy.get('[name="pemilih_rt"]').type("01");
    cy.get('[name="pemilih_rw"]').type("02");
    cy.get(
      "#select2-pemilih_kelurahan_id-container span.select2-selection__placeholder"
    ).click();
    cy.get("#kt_body input.select2-search__field").type("cu");
    cy.get(".select2-results").first().click();
    cy.get('[name="pemilih_tempat_lahir"]').type("Curup");
    cy.get('[name="pemilih_tgl_lahir"]').click();
    cy.get('#kt_body td[data-date="1760400000000"]').click();
    cy.get("#form_inputpemilih div.col-12").click();
    cy.get("#form_inputpemilih div.col-8 label:nth-child(1) span").click();
    cy.get('input[value="L"]').check();
    cy.get(
      "#select2-pemilih_status_kawin-container span.select2-selection__placeholder"
    ).click();
    cy.get(".select2-results").first().click();
    cy.get(
      "#select2-pemilih_caleg_id-container span.select2-selection__placeholder"
    ).click();
    cy.get(".select2-results").first().click();
    cy.get("#select2-pemilih_tps_id-container").click();
    cy.get(".select2-results").first().click();
    cy.get("#Statusradio label:nth-child(1)").click();
    cy.get('label:nth-child(1) [name="pemilih_status_id"]').check();
    cy.get("#btn-simpan").click();
    cy.get("#modal-confirm-save button.btn-primary").click();
    cy.get(".swal2-confirm").click();
    cy.get(".toast-message")
      .should("be.visible")
      .should("have.text", "Data pemilih sudah terdaftar");
  });
  it("TS-VOTER-01-003", () => {
    cy.get("#cardDataPemilih button.font-weight-bolder").click();
    cy.get('[name="pemilih_kk"]').type(12345);
    cy.get("#error_kk")
      .should("be.visible")
      .should(
        "have.text",
        "Jumlah karakter KK tidak boleh lebih atau kurang dari 16 karakter"
      );
  });
  it("TS-VOTER-01-004", () => {
    cy.get("#cardDataPemilih button.font-weight-bolder").click();
    cy.get('[name="pemilih_kk"]').type("abcdefghijklmnop");
    cy.get("#error_kk")
      .should("be.visible")
      .should("have.text", "No KK hanya boleh diisi dengan angka");
  });
  it("TS-VOTER-01-005", () => {
    cy.get("#cardDataPemilih button.font-weight-bolder").click();
    cy.get('[name="pemilih_kk"]').type("!@#$%^&*()_+{}|;");
    cy.get("#error_kk")
      .should("be.visible")
      .should("have.text", "No KK hanya boleh diisi dengan angka");
  });
  it("TS-VOTER-01-006", () => {
    cy.get("#cardDataPemilih button.font-weight-bolder").click();
    cy.get('[name="pemilih_nik"]').type(12345);
    cy.get("#error_nik")
      .should("be.visible")
      .should(
        "have.text",
        "Jumlah karakter NIK tidak boleh lebih atau kurang dari 16 karakter"
      );
  });
  it("TS-VOTER-01-007", () => {
    cy.get("#cardDataPemilih button.font-weight-bolder").click();
    cy.get('[name="pemilih_nik"]').type("abcdefghijklmnop");
    cy.get("#error_nik")
      .should("be.visible")
      .should("have.text", "No NIK hanya boleh diisi dengan angka");
  });
  it("TS-VOTER-01-008", () => {
    cy.get("#cardDataPemilih button.font-weight-bolder").click();
    cy.get('[name="pemilih_nik"]').type("!@#$%^&*()_+{}|;");
    cy.get("#error_nik")
      .should("be.visible")
      .should("have.text", "No NIK hanya boleh diisi dengan angka");
  });
  it("TS-VOTER-01-009", () => {
    cy.get("#cardDataPemilih button.font-weight-bolder").click();
    cy.get('[name="pemilih_tgl_lahir"]').click();
    cy.get('#kt_body td[data-date="1762560000000"]').click();
    cy.get(
      "#form_inputpemilih div:nth-child(2) > div:nth-child(3) > label.col-form-label"
    ).click();
    cy.get('#kt_body td[data-date="1797686400000"]').click();
    cy.get("#error_tgl_lahir")
      .should("be.visible")
      .should("have.text", "Tanggal lahir tidak valid");
  });
  it("TS-VOTER-01-010", () => {
    cy.get("#cardDataPemilih button.font-weight-bolder").click();
    cy.get('[name="pemilih_nik"]').type(1234567890123456);
    cy.get('[name="pemilih_nama"]').type("Budi Santoso");
    cy.get('[name="pemilih_alamat"]').type("Jalan Santai No. 123");
    cy.get('[name="pemilih_rt"]').type("01");
    cy.get('[name="pemilih_rw"]').type("02");
    cy.get(
      "#select2-pemilih_kelurahan_id-container span.select2-selection__placeholder"
    ).click();
    cy.get("#kt_body input.select2-search__field").type("cu");
    cy.get(".select2-results").first().click();
    cy.get('[name="pemilih_tempat_lahir"]').type("Curup");
    cy.get('[name="pemilih_tgl_lahir"]').click();
    cy.get('#kt_body td[data-date="1760400000000"]').click();
    cy.get("#form_inputpemilih div.col-12").click();
    cy.get("#form_inputpemilih div.col-8 label:nth-child(1) span").click();
    cy.get('input[value="L"]').check();
    cy.get(
      "#select2-pemilih_status_kawin-container span.select2-selection__placeholder"
    ).click();
    cy.get(".select2-results").first().click();
    cy.get(
      "#select2-pemilih_caleg_id-container span.select2-selection__placeholder"
    ).click();
    cy.get(".select2-results").first().click();
    cy.get("#select2-pemilih_tps_id-container").click();
    cy.get(".select2-results").first().click();
    cy.get("#Statusradio label:nth-child(1)").click();
    cy.get('label:nth-child(1) [name="pemilih_status_id"]').check();
    cy.get("#btn-simpan").click();
    cy.get("#form_inputpemilih div.fv-help-block")
      .should("be.visible")
      .should("have.text", " No. KK  tidak boleh kosong.");
  });
  it("TS-VOTER-01-011", () => {
    cy.get("#cardDataPemilih button.font-weight-bolder").click();
    cy.get('[name="pemilih_kk"]').type(1234567890123456);
    cy.get('[name="pemilih_nama"]').type("Budi Santoso");
    cy.get('[name="pemilih_alamat"]').type("Jalan Santai No. 123");
    cy.get('[name="pemilih_rt"]').type("01");
    cy.get('[name="pemilih_rw"]').type("02");
    cy.get(
      "#select2-pemilih_kelurahan_id-container span.select2-selection__placeholder"
    ).click();
    cy.get("#kt_body input.select2-search__field").type("cu");
    cy.get(".select2-results").first().click();
    cy.get('[name="pemilih_tempat_lahir"]').type("Curup");
    cy.get('[name="pemilih_tgl_lahir"]').click();
    cy.get('#kt_body td[data-date="1760400000000"]').click();
    cy.get("#form_inputpemilih div.col-12").click();
    cy.get("#form_inputpemilih div.col-8 label:nth-child(1) span").click();
    cy.get('input[value="L"]').check();
    cy.get(
      "#select2-pemilih_status_kawin-container span.select2-selection__placeholder"
    ).click();
    cy.get(".select2-results").first().click();
    cy.get(
      "#select2-pemilih_caleg_id-container span.select2-selection__placeholder"
    ).click();
    cy.get(".select2-results").first().click();
    cy.get("#select2-pemilih_tps_id-container").click();
    cy.get(".select2-results").first().click();
    cy.get("#Statusradio label:nth-child(1)").click();
    cy.get('label:nth-child(1) [name="pemilih_status_id"]').check();
    cy.get("#btn-simpan").click();
    cy.get("#form_inputpemilih div.fv-help-block").should("be.visible");
    // .should("contain.text", " No. NIK  tidak boleh kosong.");
  });
  it("TS-VOTER-01-012", () => {
    cy.get("#cardDataPemilih button.font-weight-bolder").click();
    cy.get('[name="pemilih_kk"]').type(1234567890123456);
    cy.get('[name="pemilih_nik"]').type(1234567890123456);
    cy.get('[name="pemilih_alamat"]').type("Jalan Santai No. 123");
    cy.get('[name="pemilih_rt"]').type("01");
    cy.get('[name="pemilih_rw"]').type("02");
    cy.get(
      "#select2-pemilih_kelurahan_id-container span.select2-selection__placeholder"
    ).click();
    cy.get("#kt_body input.select2-search__field").type("cu");
    cy.get(".select2-results").first().click();
    cy.get('[name="pemilih_tempat_lahir"]').type("Curup");
    cy.get('[name="pemilih_tgl_lahir"]').click();
    cy.get('#kt_body td[data-date="1760400000000"]').click();
    cy.get("#form_inputpemilih div.col-12").click();
    cy.get("#form_inputpemilih div.col-8 label:nth-child(1) span").click();
    cy.get('input[value="L"]').check();
    cy.get(
      "#select2-pemilih_status_kawin-container span.select2-selection__placeholder"
    ).click();
    cy.get(".select2-results").first().click();
    cy.get(
      "#select2-pemilih_caleg_id-container span.select2-selection__placeholder"
    ).click();
    cy.get(".select2-results").first().click();
    cy.get("#select2-pemilih_tps_id-container").click();
    cy.get(".select2-results").first().click();
    cy.get("#Statusradio label:nth-child(1)").click();
    cy.get('label:nth-child(1) [name="pemilih_status_id"]').check();
    cy.get("#btn-simpan").click();
    cy.get("#form_inputpemilih div.fv-help-block").should("be.visible");
    // .should("contain.text", "Nama tidak boleh kosong.");
  });
  it("TS-VOTER-01-013", () => {
    cy.get("#cardDataPemilih button.font-weight-bolder").click();
    cy.get('[name="pemilih_kk"]').type(1234567890123456);
    cy.get('[name="pemilih_nik"]').type(1234567890123456);
    cy.get('[name="pemilih_nama"]').type("Budi Santoso");
    cy.get('[name="pemilih_rt"]').type("01");
    cy.get('[name="pemilih_rw"]').type("02");
    cy.get(
      "#select2-pemilih_kelurahan_id-container span.select2-selection__placeholder"
    ).click();
    cy.get("#kt_body input.select2-search__field").type("cu");
    cy.get(".select2-results").first().click();
    cy.get('[name="pemilih_tempat_lahir"]').type("Curup");
    cy.get('[name="pemilih_tgl_lahir"]').click();
    cy.get('#kt_body td[data-date="1760400000000"]').click();
    cy.get("#form_inputpemilih div.col-12").click();
    cy.get("#form_inputpemilih div.col-8 label:nth-child(1) span").click();
    cy.get('input[value="L"]').check();
    cy.get(
      "#select2-pemilih_status_kawin-container span.select2-selection__placeholder"
    ).click();
    cy.get(".select2-results").first().click();
    cy.get(
      "#select2-pemilih_caleg_id-container span.select2-selection__placeholder"
    ).click();
    cy.get(".select2-results").first().click();
    cy.get("#select2-pemilih_tps_id-container").click();
    cy.get(".select2-results").first().click();
    cy.get("#Statusradio label:nth-child(1)").click();
    cy.get('label:nth-child(1) [name="pemilih_status_id"]').check();
    cy.get("#btn-simpan").click();
    cy.get("#form_inputpemilih div.fv-help-block").should("be.visible");
    // .should("contain.text", " Alamat tidak boleh kosong.");
  });
  it("TS-VOTER-01-014", () => {
    cy.get("#cardDataPemilih button.font-weight-bolder").click();
    cy.get('[name="pemilih_kk"]').type(1234567890123456);
    cy.get('[name="pemilih_nik"]').type(1234567890123456);
    cy.get('[name="pemilih_nama"]').type("Budi Santoso");
    cy.get('[name="pemilih_alamat"]').type("Jalan Santai No. 123");
    cy.get('[name="pemilih_rw"]').type("02");
    cy.get(
      "#select2-pemilih_kelurahan_id-container span.select2-selection__placeholder"
    ).click();
    cy.get("#kt_body input.select2-search__field").type("cu");
    cy.get(".select2-results").first().click();
    cy.get('[name="pemilih_tempat_lahir"]').type("Curup");
    cy.get('[name="pemilih_tgl_lahir"]').click();
    cy.get('#kt_body td[data-date="1760400000000"]').click();
    cy.get("#form_inputpemilih div.col-12").click();
    cy.get("#form_inputpemilih div.col-8 label:nth-child(1) span").click();
    cy.get('input[value="L"]').check();
    cy.get(
      "#select2-pemilih_status_kawin-container span.select2-selection__placeholder"
    ).click();
    cy.get(".select2-results").first().click();
    cy.get(
      "#select2-pemilih_caleg_id-container span.select2-selection__placeholder"
    ).click();
    cy.get(".select2-results").first().click();
    cy.get("#select2-pemilih_tps_id-container").click();
    cy.get(".select2-results").first().click();
    cy.get("#Statusradio label:nth-child(1)").click();
    cy.get('label:nth-child(1) [name="pemilih_status_id"]').check();
    cy.get("#btn-simpan").click();
    cy.get("#form_inputpemilih div.fv-help-block").should("be.visible");
    // .should("contain.text", "RT tidak boleh kosong.");
  });
  it("TS-VOTER-01-015", () => {
    cy.get("#cardDataPemilih button.font-weight-bolder").click();
    cy.get('[name="pemilih_kk"]').type(1234567890123456);
    cy.get('[name="pemilih_nik"]').type(1234567890123456);
    cy.get('[name="pemilih_nama"]').type("Budi Santoso");
    cy.get('[name="pemilih_alamat"]').type("Jalan Santai No. 123");
    cy.get('[name="pemilih_rt"]').type("01");
    cy.get(
      "#select2-pemilih_kelurahan_id-container span.select2-selection__placeholder"
    ).click();
    cy.get("#kt_body input.select2-search__field").type("cu");
    cy.get(".select2-results").first().click();
    cy.get('[name="pemilih_tempat_lahir"]').type("Curup");
    cy.get('[name="pemilih_tgl_lahir"]').click();
    cy.get('#kt_body td[data-date="1760400000000"]').click();
    cy.get("#form_inputpemilih div.col-12").click();
    cy.get("#form_inputpemilih div.col-8 label:nth-child(1) span").click();
    cy.get('input[value="L"]').check();
    cy.get(
      "#select2-pemilih_status_kawin-container span.select2-selection__placeholder"
    ).click();
    cy.get(".select2-results").first().click();
    cy.get(
      "#select2-pemilih_caleg_id-container span.select2-selection__placeholder"
    ).click();
    cy.get(".select2-results").first().click();
    cy.get("#select2-pemilih_tps_id-container").click();
    cy.get(".select2-results").first().click();
    cy.get("#Statusradio label:nth-child(1)").click();
    cy.get('label:nth-child(1) [name="pemilih_status_id"]').check();
    cy.get("#btn-simpan").click();
    cy.get("#form_inputpemilih div.fv-help-block").should("be.visible");
    // .should("contain.text", "RT tidak boleh kosong.");
  });
  it("TS-VOTER-01-016", () => {
    cy.get("#cardDataPemilih button.font-weight-bolder").click();
    cy.get('[name="pemilih_kk"]').type(1234567890123456);
    cy.get('[name="pemilih_nik"]').type(1234567890123456);
    cy.get('[name="pemilih_nama"]').type("Budi Santoso");
    cy.get('[name="pemilih_alamat"]').type("Jalan Santai No. 123");
    cy.get('[name="pemilih_rt"]').type("01");
    cy.get('[name="pemilih_rw"]').type("02");
    cy.get('[name="pemilih_tempat_lahir"]').type("Curup");
    cy.get('[name="pemilih_tgl_lahir"]').click();
    cy.get('#kt_body td[data-date="1760400000000"]').click();
    cy.get("#form_inputpemilih div.col-12").click();
    cy.get("#form_inputpemilih div.col-8 label:nth-child(1) span").click();
    cy.get('input[value="L"]').check();
    cy.get(
      "#select2-pemilih_status_kawin-container span.select2-selection__placeholder"
    ).click();
    cy.get(".select2-results").first().click();
    cy.get(
      "#select2-pemilih_caleg_id-container span.select2-selection__placeholder"
    ).click();
    cy.get(".select2-results").first().click();
    cy.get("#select2-pemilih_tps_id-container").click();
    cy.get(".select2-results").first().click();
    cy.get("#Statusradio label:nth-child(1)").click();
    cy.get('label:nth-child(1) [name="pemilih_status_id"]').check();
    cy.get("#btn-simpan").click();
    cy.get("#form_inputpemilih div.fv-help-block").should("be.visible");
    // .should("contain.text", "Kelurahan tidak boleh kosong.");
  });
  it("TS-VOTER-01-017", () => {
    cy.get("#cardDataPemilih button.font-weight-bolder").click();
    cy.get('[name="pemilih_kk"]').type(1234567890123456);
    cy.get('[name="pemilih_nik"]').type(1234567890123456);
    cy.get('[name="pemilih_nama"]').type("Budi Santoso");
    cy.get('[name="pemilih_alamat"]').type("Jalan Santai No. 123");
    cy.get('[name="pemilih_rt"]').type("01");
    cy.get('[name="pemilih_rw"]').type("02");
    cy.get(
      "#select2-pemilih_kelurahan_id-container span.select2-selection__placeholder"
    ).click();
    cy.get("#kt_body input.select2-search__field").type("cu");
    cy.get(".select2-results").first().click();
    cy.get('[name="pemilih_tgl_lahir"]').click();
    cy.get('#kt_body td[data-date="1760400000000"]').click();
    cy.get("#form_inputpemilih div.col-12").click();
    cy.get("#form_inputpemilih div.col-8 label:nth-child(1) span").click();
    cy.get('input[value="L"]').check();
    cy.get(
      "#select2-pemilih_status_kawin-container span.select2-selection__placeholder"
    ).click();
    cy.get(".select2-results").first().click();
    cy.get(
      "#select2-pemilih_caleg_id-container span.select2-selection__placeholder"
    ).click();
    cy.get(".select2-results").first().click();
    cy.get("#select2-pemilih_tps_id-container").click();
    cy.get(".select2-results").first().click();
    cy.get("#Statusradio label:nth-child(1)").click();
    cy.get('label:nth-child(1) [name="pemilih_status_id"]').check();
    cy.get("#btn-simpan").click();
    cy.get("#form_inputpemilih div.fv-help-block").should("be.visible");
    // .should("contain.text", "Tempat Lahir tidak boleh kosong.");
  });
  it("TS-VOTER-01-018", () => {
    cy.get("#cardDataPemilih button.font-weight-bolder").click();
    cy.get('[name="pemilih_kk"]').type(1234567890123456);
    cy.get('[name="pemilih_nik"]').type(1234567890123456);
    cy.get('[name="pemilih_nama"]').type("Budi Santoso");
    cy.get('[name="pemilih_alamat"]').type("Jalan Santai No. 123");
    cy.get('[name="pemilih_rt"]').type("01");
    cy.get('[name="pemilih_rw"]').type("02");
    cy.get(
      "#select2-pemilih_kelurahan_id-container span.select2-selection__placeholder"
    ).click();
    cy.get("#kt_body input.select2-search__field").type("cu");
    cy.get(".select2-results").first().click();
    cy.get('[name="pemilih_tempat_lahir"]').type("Curup");
    cy.get("#form_inputpemilih div.col-12").click();
    cy.get("#form_inputpemilih div.col-8 label:nth-child(1) span").click();
    cy.get('input[value="L"]').check();
    cy.get(
      "#select2-pemilih_status_kawin-container span.select2-selection__placeholder"
    ).click();
    cy.get(".select2-results").first().click();
    cy.get(
      "#select2-pemilih_caleg_id-container span.select2-selection__placeholder"
    ).click();
    cy.get(".select2-results").first().click();
    cy.get("#select2-pemilih_tps_id-container").click();
    cy.get(".select2-results").first().click();
    cy.get("#Statusradio label:nth-child(1)").click();
    cy.get('label:nth-child(1) [name="pemilih_status_id"]').check();
    cy.get("#btn-simpan").click();
    cy.get("#form_inputpemilih div.fv-help-block").should("be.visible");
    // .should("contain.text", "Tanggal Lahir tidak boleh kosong.");
  });
  it("TS-VOTER-01-019", () => {
    cy.get("#cardDataPemilih button.font-weight-bolder").click();
    cy.get('[name="pemilih_kk"]').type(1234567890123456);
    cy.get('[name="pemilih_nik"]').type(1234567890123456);
    cy.get('[name="pemilih_nama"]').type("Budi Santoso");
    cy.get('[name="pemilih_alamat"]').type("Jalan Santai No. 123");
    cy.get('[name="pemilih_rt"]').type("01");
    cy.get('[name="pemilih_rw"]').type("02");
    cy.get(
      "#select2-pemilih_kelurahan_id-container span.select2-selection__placeholder"
    ).click();
    cy.get("#kt_body input.select2-search__field").type("cu");
    cy.get(".select2-results").first().click();
    cy.get('[name="pemilih_tempat_lahir"]').type("Curup");
    cy.get('[name="pemilih_tgl_lahir"]').click();
    cy.get('#kt_body td[data-date="1760400000000"]').click();
    cy.get("#form_inputpemilih div.col-12").click();
    cy.get("#form_inputpemilih div.col-8 label:nth-child(1) span").click();
    cy.get(
      "#select2-pemilih_status_kawin-container span.select2-selection__placeholder"
    ).click();
    cy.get(".select2-results").first().click();
    cy.get(
      "#select2-pemilih_caleg_id-container span.select2-selection__placeholder"
    ).click();
    cy.get(".select2-results").first().click();
    cy.get("#select2-pemilih_tps_id-container").click();
    cy.get(".select2-results").first().click();
    cy.get("#Statusradio label:nth-child(1)").click();
    cy.get('label:nth-child(1) [name="pemilih_status_id"]').check();
    cy.get("#btn-simpan").click();
    cy.get("#form_inputpemilih div.fv-help-block").should("be.visible");
    // .should("contain.text", "Jenis Kalamin tidak boleh kosong.");
  });
  it("TS-VOTER-01-020", () => {
    cy.get("#cardDataPemilih button.font-weight-bolder").click();
    cy.get('[name="pemilih_kk"]').type(1234567890123456);
    cy.get('[name="pemilih_nik"]').type(1234567890123456);
    cy.get('[name="pemilih_nama"]').type("Budi Santoso");
    cy.get('[name="pemilih_alamat"]').type("Jalan Santai No. 123");
    cy.get('[name="pemilih_rt"]').type("01");
    cy.get('[name="pemilih_rw"]').type("02");
    cy.get(
      "#select2-pemilih_kelurahan_id-container span.select2-selection__placeholder"
    ).click();
    cy.get("#kt_body input.select2-search__field").type("cu");
    cy.get(".select2-results").first().click();
    cy.get('[name="pemilih_tempat_lahir"]').type("Curup");
    cy.get('[name="pemilih_tgl_lahir"]').click();
    cy.get('#kt_body td[data-date="1760400000000"]').click();
    cy.get("#form_inputpemilih div.col-12").click();
    cy.get("#form_inputpemilih div.col-8 label:nth-child(1) span").click();
    cy.get('input[value="L"]').check();
    cy.get(
      "#select2-pemilih_caleg_id-container span.select2-selection__placeholder"
    ).click();
    cy.get(".select2-results").first().click();
    cy.get("#select2-pemilih_tps_id-container").click();
    cy.get(".select2-results").first().click();
    cy.get("#Statusradio label:nth-child(1)").click();
    cy.get('label:nth-child(1) [name="pemilih_status_id"]').check();
    cy.get("#btn-simpan").click();
    cy.get("#form_inputpemilih div.fv-help-block").should("be.visible");
    // .should("contain.text", "Status Kawin tidak boleh kosong.");
  });
  it("TS-VOTER-01-021", () => {
    cy.get("#cardDataPemilih button.font-weight-bolder").click();
    cy.get('[name="pemilih_kk"]').type(1234567890123456);
    cy.get('[name="pemilih_nik"]').type(1234567890123456);
    cy.get('[name="pemilih_nama"]').type("Budi Santoso");
    cy.get('[name="pemilih_alamat"]').type("Jalan Santai No. 123");
    cy.get('[name="pemilih_rt"]').type("01");
    cy.get('[name="pemilih_rw"]').type("02");
    cy.get(
      "#select2-pemilih_kelurahan_id-container span.select2-selection__placeholder"
    ).click();
    cy.get("#kt_body input.select2-search__field").type("cu");
    cy.get(".select2-results").first().click();
    cy.get('[name="pemilih_tempat_lahir"]').type("Curup");
    cy.get('[name="pemilih_tgl_lahir"]').click();
    cy.get('#kt_body td[data-date="1760400000000"]').click();
    cy.get("#form_inputpemilih div.col-12").click();
    cy.get("#form_inputpemilih div.col-8 label:nth-child(1) span").click();
    cy.get('input[value="L"]').check();
    cy.get(
      "#select2-pemilih_status_kawin-container span.select2-selection__placeholder"
    ).click();
    cy.get(".select2-results").first().click();
    cy.get("#select2-pemilih_tps_id-container").click();
    cy.get(".select2-results").first().click();
    cy.get("#Statusradio label:nth-child(1)").click();
    cy.get('label:nth-child(1) [name="pemilih_status_id"]').check();
    cy.get("#btn-simpan").click();
    cy.get("#form_inputpemilih div.fv-help-block").should("be.visible");
    // .should("contain.text", "Caleg tidak boleh kosong.");
  });
  it("TS-VOTER-01-022", () => {
    cy.get("#cardDataPemilih button.font-weight-bolder").click();
    cy.get('[name="pemilih_kk"]').type(1234567890123456);
    cy.get('[name="pemilih_nik"]').type(1234567890123456);
    cy.get('[name="pemilih_nama"]').type("Budi Santoso");
    cy.get('[name="pemilih_alamat"]').type("Jalan Santai No. 123");
    cy.get('[name="pemilih_rt"]').type("01");
    cy.get('[name="pemilih_rw"]').type("02");
    cy.get(
      "#select2-pemilih_kelurahan_id-container span.select2-selection__placeholder"
    ).click();
    cy.get("#kt_body input.select2-search__field").type("cu");
    cy.get(".select2-results").first().click();
    cy.get('[name="pemilih_tempat_lahir"]').type("Curup");
    cy.get('[name="pemilih_tgl_lahir"]').click();
    cy.get('#kt_body td[data-date="1760400000000"]').click();
    cy.get("#form_inputpemilih div.col-12").click();
    cy.get("#form_inputpemilih div.col-8 label:nth-child(1) span").click();
    cy.get('input[value="L"]').check();
    cy.get(
      "#select2-pemilih_status_kawin-container span.select2-selection__placeholder"
    ).click();
    cy.get(".select2-results").first().click();
    cy.get(
      "#select2-pemilih_caleg_id-container span.select2-selection__placeholder"
    ).click();
    cy.get(".select2-results").first().click();
    cy.get("#Statusradio label:nth-child(1)").click();
    cy.get('label:nth-child(1) [name="pemilih_status_id"]').check();
    cy.get("#btn-simpan").click();
    cy.get("#form_inputpemilih div.fv-help-block").should("be.visible");
    // .should("contain.text", "TPS tidak boleh kosong.");
  });
  it("TS-VOTER-01-023", () => {
    cy.get("#cardDataPemilih button.font-weight-bolder").click();
    cy.get('[name="pemilih_kk"]').type(1234567890123456);
    cy.get('[name="pemilih_nik"]').type(1234567890123456);
    cy.get('[name="pemilih_nama"]').type("Budi Santoso");
    cy.get('[name="pemilih_alamat"]').type("Jalan Santai No. 123");
    cy.get('[name="pemilih_rt"]').type("01");
    cy.get('[name="pemilih_rw"]').type("02");
    cy.get(
      "#select2-pemilih_kelurahan_id-container span.select2-selection__placeholder"
    ).click();
    cy.get("#kt_body input.select2-search__field").type("cu");
    cy.get(".select2-results").first().click();
    cy.get('[name="pemilih_tempat_lahir"]').type("Curup");
    cy.get('[name="pemilih_tgl_lahir"]').click();
    cy.get('#kt_body td[data-date="1760400000000"]').click();
    cy.get("#form_inputpemilih div.col-12").click();
    cy.get("#form_inputpemilih div.col-8 label:nth-child(1) span").click();
    cy.get('input[value="L"]').check();
    cy.get(
      "#select2-pemilih_status_kawin-container span.select2-selection__placeholder"
    ).click();
    cy.get(".select2-results").first().click();
    cy.get(
      "#select2-pemilih_caleg_id-container span.select2-selection__placeholder"
    ).click();
    cy.get(".select2-results").first().click();
    cy.get("#select2-pemilih_tps_id-container").click();
    cy.get(".select2-results").first().click();
    cy.get("#Statusradio label:nth-child(1)").click();
    cy.get('label:nth-child(1) [name="pemilih_status_id"]').check();
    cy.get("#btn-simpan").click();
    cy.get("#form_inputpemilih div.fv-help-block").should("be.visible");
    // .should("contain.text", "Status tidak boleh kosong.");
  });
  it("TS-VOTER-01-024", () => {
    cy.get("#cardDataPemilih button.font-weight-bolder").click();
    cy.get(
      "#pagecontainer div.card-toolbar > button.btn-light-aps.btn-sm"
    ).click();
    cy.get("#menus_title")
      .should("be.visible")
      .should("have.text", "Pemilih Tetap");
  });
});
