let shareButtons = document.getElementsByClassName("btn--share");

function toggleShareContainer(e) {
    const articleCardShareElement = e.target.closest(".article-card__share");
    let mainShareButtonElement = articleCardShareElement.getElementsByClassName("btn--share-main")[0];
    if (mainShareButtonElement.classList.contains("btn--share_active")) {
        mainShareButtonElement.ariaLabel = "Open popup on sharing article on social media";
        mainShareButtonElement.classList.remove("btn--share_active");
    } else {
        mainShareButtonElement.ariaLabel = "Close popup on sharing article on social media";
        mainShareButtonElement.classList.add("btn--share_active");
    }

    const clickedShareButtonElement = e.target.closest(".btn--share");
    let sharePopup = clickedShareButtonElement.nextElementSibling;
    if (sharePopup == null) { sharePopup = clickedShareButtonElement.closest(".article-card__share-popup"); }
    sharePopup.classList.toggle("article-card__share-popup_visible");

    let footer = clickedShareButtonElement.closest(".article-card__footer");
    footer.classList.toggle("article-card__footer--share-active");
}

function hideButtonOutline(e) {
  if (e.keyCode == 9) {
    let shareButtons = document.getElementsByClassName("btn--share");
    for (var i = 0; i < shareButtons.length; i++) {
        shareButtons[i].classList.add("btn--share-with-outline");
    }
    document.removeEventListener("keyup", hideButtonOutline);
  }
}

for (var i = 0; i < shareButtons.length; i++) {
    shareButtons[i].addEventListener("click", toggleShareContainer);
}

document.addEventListener("keyup", hideButtonOutline);