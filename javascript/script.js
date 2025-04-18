/* Iniciando o Jquery*/
$(document).ready(function () {
  $("#mobile_btn").on("click", function () {
    $("#mobile_menu").toggleClass("active");

    // trocar icone para x
    $("#mobile_btn").find("i").toggleClass("fa-x");
  });
  // selecionar as sessões e os icones de cada
  const sections = $("section");
  const navitens = $(".nav-item");

  // função de quando scrollar a página fazer sombra no header
  $(Window).on("scroll", function () {
    const header = $("header");
    const scrollPosition = $(Window).scrollTop() - header.outerHeight();

    let activeSectionIndex = 0;

    if (scrollPosition <= 0) {
      header.css("box-shadow", "none");
    } else {
      header.css("box-shadow", "5px 1px 5px rgba(0, 0, 0, 0.1");
    }

    sections.each(function (i) {
      const section = $(this);
      const sectionTop = section.offset().top - 96;
      const sectionBottom = sectionTop + section.outerHeight();

      if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
        activeSectionIndex = i;
        return false; // sair do loop se a seção ativa for encontrada
      }
    });

    // se não for encontrada, o index vai ser
    navitens.removeClass("active");
    $(navitens[activeSectionIndex]).addClass("active");
  });
});
