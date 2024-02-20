function smoothScroll ({target}) {

  console.log(target.hash)
  console.log(target)


  if (target.hash !== '') {
    const element = document.querySelector(target.hash)

    window.scrollTo({
      top: element.offsetTop - 150,
      left: 0,
      behavior: "smooth",
    });
  }
}

export { smoothScroll }