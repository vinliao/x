const hide = () => {
  setInterval(() => {

    // TODO: for some reason, if the condition is false here, it won't go on the code below it.
    if (document.querySelector("[aria-label='Timeline: Trending now']").parentElement !== null) {
      document.querySelector("[aria-label='Timeline: Trending now']").parentElement.style.display = "none"
    }

    if (document.querySelector("[aria-label='Who to follow']").parentElement !== null) {
      document.querySelector("[aria-label='Who to follow']").parentElement.style.display = "none"
    }
  }, 2000);
}

hide()