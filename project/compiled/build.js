"use strict";Config.cleanupWikifierOutput=!0,$(document).on(":passagerender",(function(t){var n=$(t.content).find(".macro-cycle");n.length&&(n.attr("aria-label",(function(t){return"(click to change) "+$(this).text()})),n.on("click",(function(t){$(this).find("p").contents().unwrap(),$(this).attr("aria-label","(click to change) "+$(this).text())})))}));