let timeout = null
const debounce = (fn) => {
  timeout && clearTimeout(timeout);
  timeout = setTimeout(fn, 100);
};

export default animatedTag => {
  const scrollEvent = () => {
    const {
      scrollY: height
    } = window;

    const animations = document.querySelectorAll(animatedTag);

    animations.forEach((animation) => {
      const {
        offsetHeight
      } = animation;
     
      const actualPageHeight =  height + window.innerHeight
      const hasScrolled = actualPageHeight > offsetHeight;
      const actionPerScroll = {
        [true]: className => animation.classList.add(className),
        [false]: className => animation.classList.remove(className),
      }
      actionPerScroll[hasScrolled]("scrolled")
    });
  }



  window.addEventListener("scroll", () => debounce(scrollEvent));
}
