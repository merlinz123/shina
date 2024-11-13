$(document).ready(function() {
    // Prevent closing on click outside or Esc key press
    $("#modal1").modal({
      backdrop: 'static',
      keyboard: false
    });
    $("#modal1").modal("show");
  });