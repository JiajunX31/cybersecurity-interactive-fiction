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

Config.ui.stowBarInitially = true;

// prevents infinite 'go back' when using character summaries sidebar
/* see https://www.motoslave.net/sugarcube/2/docs/#guide-tips-arbitrarily-long-return
   use $return to go back to a non-noreturn passage
e.g. <<link "GO BACK" $return>><</link>> */
$(document).on(':passagestart', function (ev) {
	if (!ev.passage.tags.includes('noreturn')) {
		State.variables.return = ev.passage.title;
	}
});

// identifies menu button to lock, and locks it until isUnlockCharacterSummaries == true
// https://stackoverflow.com/questions/2847561/add-a-different-id-to-each-li-element-by-jquery
// Execute the handler function each time the event triggers.
$(document).on(':passageend', function (ev) { // this has to be done after the special passage 'StoryMenu' runs
	if (State.variables.isUnlockCharacterSummaries == true) {
		// do nothing; will automatically unlock
	} else {
		$('#menu-story li a').attr('id', function(i) {
			return 'menubutton'+(i+1);
		});
		document.getElementById("menubutton1").setAttribute("aria-disabled",true);
		document.getElementById("menubutton1").setAttribute("disabled","");
		document.getElementById("menubutton1").setAttribute("type","button");
	}
});