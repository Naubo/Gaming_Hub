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

  // função de quando scrollar a página
  $(Window).on("scroll", function () {
    const header = $("#header");
    const scrollPosition = $(Window) - header.outerHeight();

    if (scrollPosition <=0) {
        header.css('box-shadow', 'none');
    } else {
        header.css('box-shadow'), '5px 1px 5px rgba(0, 0, 0, 0.1)';
    }
    
  })
})
