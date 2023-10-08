new SimpleSlide({
  slide: "pratos-do-dia", // nome do atributo data-slide="principal"
  nav: true, // se deve ou não mostrar a navegação
  auto: true, // se o slide deve passar automaticamente
  time: 5000, // tempo de transição dos slides
  pauseOnHover: true, // pausa a transição automática
});

new SimpleSlide({
  slide: "comentarios", // nome do atributo data-slide="principal"
  nav: true, // se deve ou não mostrar a navegação
  auto: true, // se o slide deve passar automaticamente
  time: 4000, // tempo de transição dos slides
  pauseOnHover: true, // pausa a transição automática
});



if (window.SimpleAnime) {
  new SimpleAnime();
}

/* $(".show-more a").on("click", function() {
  var $this = $(this); 
  var $content = $this.parent().prev("div.content");
  var linkText = $this.text().toUpperCase();    

  if(linkText === "SHOW MORE"){
      linkText = "Show less";
      $content.switchClass("hideContent", "showContent", 400);
  } else {
      linkText = "Show more";
      $content.switchClass("showContent", "hideContent", 400);
  };

  $this.text(linkText);
});​ */

