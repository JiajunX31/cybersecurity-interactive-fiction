"use strict";Config.cleanupWikifierOutput=!0,$(document).on(":passagerender",(function(t){var e=$(t.content).find(".macro-cycle");e.length&&(e.attr("aria-label",(function(t){return"(click to change) "+$(this).text()})),e.on("click",(function(t){$(this).find("p").contents().unwrap(),$(this).attr("aria-label","(click to change) "+$(this).text())})))})),$(document).on(":passagestart",(function(t){t.passage.tags.includes("noreturn")||(State.variables.return=t.passage.title)})),$(document).on(":passageend",(function(t){1==State.variables.isUnlockCharacterSummaries||($("#menu-story li a").attr("id",(function(t){return"menubutton"+(t+1)})),document.getElementById("menubutton1").setAttribute("aria-disabled",!0),document.getElementById("menubutton1").setAttribute("disabled",""),document.getElementById("menubutton1").setAttribute("type","button"))})),$(document).on(":passageend",(function(t){if(t.passage.tags.includes("interactiveList")){var e,n=function(){e=+this.closest("li").getAttribute("data-index")},a=function(){this.classList.add("over")},r=function(){this.classList.remove("over")},i=function(t){t.preventDefault()},s=function(){var t=+this.getAttribute("data-index");c(e,t),this.classList.remove("over")},c=function(t,e){var n=g[t].querySelector(".draggable"),a=g[e].querySelector(".draggable");g[t].appendChild(a),g[e].appendChild(n)},o=function(){var t=document.querySelectorAll(".draggable"),e=document.querySelectorAll(".draggable-list li");t.forEach((function(t){t.addEventListener("dragstart",n)})),e.forEach((function(t){t.addEventListener("dragover",i),t.addEventListener("drop",s),t.addEventListener("dragenter",a),t.addEventListener("dragleave",r)}))},u=document.getElementById("draggable-list"),d=document.getElementById("check"),l=["Don't panic! Verify the email's authenticity","Don't use links in the email address - navigate directly to the site.","Change your password","Enable two-factor authentication","Review and reinforce your security practices"],g=[];[].concat(l).map((function(t){return{value:t,sort:Math.random()}})).sort((function(t,e){return t.sort-e.sort})).map((function(t){return t.value})).forEach((function(t,e){var n=document.createElement("li");n.setAttribute("data-index",e),n.innerHTML='\n\t\t\t\t<span class="number">'.concat(e+1,'</span>\n\t\t\t\t<div class="draggable" draggable="true">\n\t\t\t\t<p class="item-name">').concat(t,"</p>\n\t\t\t\t</div>\n\t\t\t\t"),g.push(n),u.appendChild(n)})),o(),d.addEventListener("click",(function(){var t=0;g.forEach((function(e,n){e.querySelector(".draggable").innerText.trim()!==l[n]?e.classList.add("wrong"):(e.classList.remove("wrong"),e.classList.add("right"),t++)})),State.variables.isAllCorrect=5==t}))}}));