let shareButtons = document.getElementsByClassName("btn--share");

function toggleShareContainer(e) {
	let articleCardShareElement = e.target.closest(".article-card__share");
	let mainShareButtonElement = articleCardShareElement.getElementsByClassName("btn--share_main")[0];
	if (mainShareButtonElement.classList.contains("btn--share_active")) {
		mainShareButtonElement.classList.remove("btn--share_active");
	} else {
		mainShareButtonElement.classList.add("btn--share_active");
	}
	
	let shareButtonElement = e.target.closest(".btn--share");
	let sharePopup = shareButtonElement.nextElementSibling;
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
	let shareButtons = document.getElementsByClassName("btn--share");
	for (var i = 0; i < shareButtons.length; i++) {
		shareButtons[i].classList.add("btn--share_with-outline");
	}
	document.removeEventListener("keyup", hideButtonOutline);
  }
}