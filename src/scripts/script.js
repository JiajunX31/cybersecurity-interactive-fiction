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

/* Config.ui.stowBarInitially = true; */

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
		$('#menu-story li a').attr('id', function (i) {
			return 'menubutton' + (i + 1);
		});
		document.getElementById("menubutton1").setAttribute("aria-disabled", true);
		document.getElementById("menubutton1").setAttribute("disabled", "");
		document.getElementById("menubutton1").setAttribute("type", "button");
	}
});



// draggable list with order checker
// adapted from https://www.codewithrandom.com/2022/12/31/sortable-list-drag-drop-drag-drop-using-html-css-javascript-codewithrandom/
// for some reason there were problems importing external plugins (error: 'require not defined'), so I had to use something which would work with pure js
// not very ideal since list is in .js rather than .twee, also doesn't work on mobile
// ideally, import plugin like https://shopify.github.io/draggable/ or https://github.com/SortableJS/Sortable
$(document).on(':passageend', function (ev) {
	if (ev.passage.tags.includes('interactiveList')) {
		const draggable_list = document.getElementById("draggable-list");
		const check = document.getElementById("check");
		const listToOrder = [ // can use twine/html directly inside the strings below
			"Don't panic! Verify the Email's authenticity",
			"Don't use links in the email address - navigate directly to the site.",
			"Change your password",
			"Enable two-factor authentication",
			"Review and reinforce your security practices",
		];
		// Store listitems
		const listItems = [];
		let dragStartIndex;
		createList();
		// Insert list items into DOM
		function createList() {
			[...listToOrder]
				.map((a) => ({ value: a, sort: Math.random() }))
				.sort((a, b) => a.sort - b.sort)
				.map((a) => a.value)
				.forEach((x, index) => {
					const listItem = document.createElement("li");
					listItem.setAttribute("data-index", index);
					listItem.innerHTML = `
				<span class="number">${index + 1}</span>
				<div class="draggable" draggable="true">
				<p class="item-name">${x}</p>
				</div>
				`;
					listItems.push(listItem);
					draggable_list.appendChild(listItem);
				});
			addEventListeners();
		}
		function dragStart() {
			// console.log('Event: ', 'dragstart');
			dragStartIndex = +this.closest("li").getAttribute("data-index");
		}
		function dragEnter() {
			// console.log('Event: ', 'dragenter');
			this.classList.add("over");
		}
		function dragLeave() {
			// console.log('Event: ', 'dragleave');
			this.classList.remove("over");
		}
		function dragOver(e) {
			// console.log('Event: ', 'dragover');
			e.preventDefault();
		}
		function dragDrop() {
			// console.log('Event: ', 'drop');
			const dragEndIndex = +this.getAttribute("data-index");
			swapItems(dragStartIndex, dragEndIndex);
			this.classList.remove("over");
		}

		// Swap list items that are drag and drop
		function swapItems(fromIndex, toIndex) {
			const itemOne = listItems[fromIndex].querySelector(".draggable");
			const itemTwo = listItems[toIndex].querySelector(".draggable");
			listItems[fromIndex].appendChild(itemTwo);
			listItems[toIndex].appendChild(itemOne);
		}

		// Check the order of list items
		function checkOrder() {
			listItems.forEach((listItem, index) => {
				const itemName = listItem.querySelector(".draggable").innerText.trim();
				if (itemName !== listToOrder[index]) {
					listItem.classList.add("wrong");
				} else {
					listItem.classList.remove("wrong");
					listItem.classList.add("right");
				}
			});
		}
		function addEventListeners() {
			const draggables = document.querySelectorAll(".draggable");
			const dragListItems = document.querySelectorAll(".draggable-list li");
			draggables.forEach((draggable) => {
				draggable.addEventListener("dragstart", dragStart);
			});
			dragListItems.forEach((item) => {
				item.addEventListener("dragover", dragOver);
				item.addEventListener("drop", dragDrop);
				item.addEventListener("dragenter", dragEnter);
				item.addEventListener("dragleave", dragLeave);
			});
		}
		check.addEventListener("click", checkOrder);
	}
});
