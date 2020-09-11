const hide = async () => {
  setInterval(() => {
    if (document.querySelector("[aria-label='Who to follow']").parentElement != null) {
      document.querySelector("[aria-label='Who to follow']").parentElement.style.display = "none"
    }
    if (document.querySelector("[aria-label='Timeline: Trending now']").parentElement != null) {
      document.querySelector("[aria-label='Timeline: Trending now']").parentElement.style.display = "none"
    }
  }, 2000);
}

hide()