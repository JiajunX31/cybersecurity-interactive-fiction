"use strict";Config.cleanupWikifierOutput=!0,$(document).on(":passagerender",(function(t){var e=$(t.content).find(".macro-cycle");e.length&&(e.attr("aria-label",(function(t){return"(click to change) "+$(this).text()})),e.on("click",(function(t){$(this).find("p").contents().unwrap(),$(this).attr("aria-label","(click to change) "+$(this).text())})))})),Config.ui.stowBarInitially=!0,$(document).on(":passagestart",(function(t){t.passage.tags.includes("noreturn")||(State.variables.return=t.passage.title)})),$(document).on(":passageend",(function(t){1==State.variables.isUnlockCharacterSummaries||($("#menu-story li a").attr("id",(function(t){return"menubutton"+(t+1)})),document.getElementById("menubutton1").setAttribute("aria-disabled",!0),document.getElementById("menubutton1").setAttribute("disabled",""),document.getElementById("menubutton1").setAttribute("type","button"))}));