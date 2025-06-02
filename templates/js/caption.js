//Versão refatorada
// Ele exibe legendas (captions) quando o mouse passa por cima 
// de uma imagem ou elemento com .caption.

$(function () {
  $('.caption').hover(
    function () {
      $(this).find('.caption-text').stop(true).fadeIn(250);
    },
    function () {
      $(this).find('.caption-text').stop(true).fadeOut(250);
    }
  );
});
