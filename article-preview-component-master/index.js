console.log("yay");

let shareButton = document.getElementsByClassName("btn--share")[0];

shareButton.onclick = function toggleShareContainer(e) {
	shareButtonElement = e.target.closest(".btn--share");
	shareButtonElement.classList.toggle("btn--share_active");
	
	let sharePopup = shareButtonElement.nextElementSibling;
	sharePopup.classList.toggle("article-card__share-popup_visible");
}

document.addEventListener('keyup', hideButtonOutline);

function hideButtonOutline(e) {
  if (e.keyCode == 9) {
	let shareButtonElement = document.getElementsByClassName("btn--share")[0];
	console.log(shareButtonElement)
	shareButtonElement.classList.add("btn--share_with-outline");
	document.removeEventListener('keyup', hideButtonOutline);
  }
}