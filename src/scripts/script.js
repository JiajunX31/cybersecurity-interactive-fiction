Config.cleanupWikifierOutput = true;
$(document).on(":passagerender", function (event) {
	var clinks = $(event.content).find(".macro-cycle");
	if (clinks.length) {
		clinks.attr("aria-label", function (event) {
			return "(click to change) " + $(this).text();
		});
		clinks.on("click", function (evnt) {
			$(this).find("p").contents().unwrap();  // Fix SugarCube bug with <<cycle>>+Config.cleanupWikifierOutput
			$(this).attr("aria-label", "(click to change) " + $(this).text());
		});
	}
});