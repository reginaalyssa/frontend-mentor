console.log("yay");

let shareButtons = document.getElementsByClassName("btn--share");

function toggleShareContainer(e) {
	console.log("YO");
	shareButtonElement = e.target.closest(".btn--share");
	shareButtonElement.classList.toggle("btn--share_active");
	
	let sharePopup = shareButtonElement.nextElementSibling;
	console.log(sharePopup);
	if (sharePopup == null) { sharePopup = shareButtonElement.closest(".article-card__share-popup"); }
	sharePopup.classList.toggle("article-card__share-popup_visible");

	let footer = shareButtonElement.closest(".article-card__footer");
	footer.classList.toggle("article-card__footer_share-active");
}

for (var i = 0; i < shareButtons.length; i++) {
	shareButtons[i].addEventListener("click", toggleShareContainer);
}

document.addEventListener("keyup", hideButtonOutline);

function hideButtonOutline(e) {
  if (e.keyCode == 9) {
	let shareButtonElement = document.getElementsByClassName("btn--share")[0];
	shareButtonElement.classList.add("btn--share_with-outline");
	document.removeEventListener("keyup", hideButtonOutline);
  }
}