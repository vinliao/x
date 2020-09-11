const hide = async () => {
  setTimeout(() => {
    const followDiv = document.querySelector("[aria-label='Who to follow']").parentElement
    followDiv.style.display = "none"

    const trendingDiv = document.querySelector("[aria-label='Timeline: Trending now']").parentElement
    trendingDiv.style.display = "none"
  }, 2000);
}

hide()