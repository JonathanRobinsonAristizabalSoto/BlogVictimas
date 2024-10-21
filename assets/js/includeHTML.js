$(document).ready(function() {
  includeHTML();
});

function includeHTML() {
  $('[include-html]').each(function() {
      var elmnt = $(this);
      var file = elmnt.attr('include-html');

      if (file) {
          $.get(file, function(data) {
              elmnt.html(data);
              elmnt.removeAttr('include-html');
              includeHTML(); // Llama nuevamente para procesar inclusiones anidadas
          });
      }
  });
}
