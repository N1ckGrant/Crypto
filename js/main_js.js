$(document).ready(function(){
	// $('.coin_unit').find('i').on('click', fucnction(){
	// 	// $(this).toggleClass('marker')
	// }
	$('.coin_unit').find('i').on('click', function(){
		$(this).toggleClass('marker')
	})
})
$(document).ready(function(){
	// $('.coin_unit').find('i').on('click', fucnction(){
	// 	// $(this).toggleClass('marker')
	// }
	$('.table_block_left').find('i').on('click', function(){
		$(this).toggleClass('marker')
	})
})
$(document).ready(function(){
	// $('.coin_unit').find('i').on('click', fucnction(){
	// 	// $(this).toggleClass('marker')
	// }
	$('.nav_orders').find('span').on('click', function(){
		$(this).toggleClass('close_button')
	})
})


// выпадающие селекты
const selectList = document.getElementsByTagName("select");
const maxHeight = 450;

let currentlyOpened = false;
let currentlySelectedOptions = [];

(Element.prototype.appendAfter = function(element) {
	element.parentNode.insertBefore(this, element.nextSibling);
}),
	false;

for (let i = 0; i < selectList.length; i++) {
	const select = selectList[i];
	currentlySelectedOptions.push(false);

	// Build fake select

	var selectWrapper = document.createElement("div");
	selectWrapper.className = "selectWrapper";

	let selectBox = document.createElement("div");
	selectBox.className = "selectBox";
	selectBox.innerHTML = "<p>" + select[select.selectedIndex].text + "</p>";

	let selectButton = document.createElement("button");
	selectButton.innerHTML = "<i class='fa fa-caret-down' aria-hidden='true'></i>";
	selectBox.appendChild(selectButton);

	let selectOptions = document.createElement("ul");
	selectOptions.style.maxHeight = maxHeight + "px";

	// Build options

	for (let options of Array.from(select.options)) {
		let optionItem = document.createElement("li");
		optionItem.innerHTML = options.text;

		if (options.selected) {
			optionItem.className = "active";
			currentlySelectedOptions[i] = optionItem;
		}

		selectOptions.appendChild(optionItem);
	}

	selectBox.appendChild(selectOptions);
	selectWrapper.appendChild(selectBox);

	selectWrapper.appendAfter(select);
	selectWrapper.appendChild(select);

	// Select an option

	var itemsList = selectOptions.getElementsByTagName("li");

	for (let y = 0; y < itemsList.length; y++) {
		const item = itemsList[y];

		item.addEventListener("click", function(event) {
			select.selectedIndex = y;
			selectBox.getElementsByTagName("p")[0].innerHTML =
				select[select.selectedIndex].text;

			currentlySelectedOptions[i].classList.remove("active");
			currentlySelectedOptions[i] = item;
			currentlySelectedOptions[i].classList.add("active");
			closeSelect(selectBox);
		});
	}

	// Open/Close select

	selectBox.addEventListener("click", function(event) {
		event.stopPropagation();

		if (this.classList.contains("active")) {
			closeSelect(this);
			currentlyOpened = false;
		} else {
			if (currentlyOpened) closeSelect(currentlyOpened);

			setPosition(this); // Set position up or down

			this.classList.add("active");
			currentlyOpened = this;
		}
	});

	selectOptions.addEventListener("click", function(event) {
		event.stopPropagation();
	});
}

// Close opened select if the user click out of it

document.addEventListener("click", function(event) {
	if (currentlyOpened) {
		closeSelect(currentlyOpened);
	}
});

// Close select action

function closeSelect(target) {
	target.classList.remove("active");
}

// Set options div position (up or down)

function setPosition(target) {
	const space = window.innerHeight - target.offsetTop + target.offsetHeight;

	// This part works but the condition is wrong...

	if (space < maxHeight) {
		target.classList.add("up");
	} else if (target.classList.contains("up")) {
		target.classList.remove("up");
	}
}

window.addEventListener(
	"resize",
	function() {
		currentlyOpened ? setPosition(currentlyOpened) : null;
	},
	true
);
