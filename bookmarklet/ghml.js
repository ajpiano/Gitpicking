var
// Get all the wrapper diff wrapper elements for selected file extensions
wrappers = $(".data.highlight").filter(function() {
  return $(this).prev().data("path").match(/\.(md|txt|markdown|xml|rst|textile)$/);
}).addClass("ghml-wrapper"),
// Get all the tables inide and replace all non-breaking spaces with regular spaces
// Undoes GitHub's special sauce to prevent line-breaking
tables = wrappers.children("table").addClass("ghml-table").html(function(i, html) {
  return html.replace(/&nbsp;/g, " ");
}),
// Add a class to all the table cells that contain code/prose for styling
codes = tables.find("td:nth-child(3)").addClass("ghml-code"),
// Inject a stylesheet to control the appearance of spaces in code cells
styleElem = $(["<style type=text/css>",
  ".ghml-code pre{",
  "white-space:pre-wrap;",
  "}",
  "</style>"].join("")).appendTo(document.head);
