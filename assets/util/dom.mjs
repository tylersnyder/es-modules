class ManipulatableElement {
  constructor(selector) {
    const matches = document.querySelectorAll(selector)
    this.elements = [...matches]
  }

  html(content) {
    this.elements.map((el) => {
      el.innerHTML = content
    })
  }
}

export default function $(selector) {
  return new ManipulatableElement(selector)
}
