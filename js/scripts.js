//////////////// Business Logic //////////////
function gridify (str) {
  var depunct = str.toLowerCase().replace(/\W/g,"");
  var col = 0, row = 0;
  var output = "";

  while (col * col < depunct.length) {
    col ++;
  }
  row = Math.ceil(depunct.length / col);

  for (var i = 0; i < row; i++) {
    for (var ii = 0; ii < depunct.length; ii+= row) {
      if (output.replace(/\W/g,"").length % 5 === 0) {
        output += " " + depunct.charAt(i + ii);
      } else {
        output += depunct.charAt(i + ii);
      }
    }
  }
  return output;
}

///////////////// User Logic /////////////////////
$(function() {
  $(".formOne").keyup(function() {
    var input = $("#sentence").val();
    $(".result").text(gridify(input));
  });
});
