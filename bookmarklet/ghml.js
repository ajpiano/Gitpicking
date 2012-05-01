var extension_pattern,
	wrappers, 
	tables, 
	codes, 
	styleElem;

// Declare the extensions of the files we want to apply this to.
extension_pattern = /\.(md|txt|markdown|xml|rst|textile)$/;

// Get all the wrapper diff wrapper elements for selected file extensions.
wrappers = $(".data.highlight").filter(function() {
  var meta_div,
	filename;
  meta_div = $(this).prev();
  // Left-hand side of `||` works on diff pages.
  // Right-hand side works on blame pages.
  filename = (meta_div.data("path") || meta_div.find("#raw-url").attr("href"));
  return (filename || "").match(extension_pattern);
});

// Add our special class to the matched elements.
wrappers.addClass("ghml-wrapper");

// Get all the tables inside
tables = wrappers.children("table");

// Add our special class.
tables.addClass("ghml-table");

// Replace all non-breaking spaces with regular spaces
// Undoes GitHub's special sauce to prevent line-breaking
tables.html(function(i, html) {
  return html.replace(/&nbsp;/g, " ");
});

// Find table cells that contain code/prose for styling.
codes = tables.find("td:nth-child(3)");

// Add a class to those table cells.
codes.addClass("ghml-code");

// Inject a stylesheet to control the appearance of spaces in code cells
styleElem = $(["<style type=text/css>",
  ".ghml-code.line-data, .ghml-code pre {",
  "white-space: pre-wrap;",
  "}",
  "</style>"].join("")).appendTo(document.head);
