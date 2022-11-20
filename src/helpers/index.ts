export function scrollToTarget(target: string) {
  const element = document.querySelector(target)

  if (element) {
    element.scrollIntoView()
    window.scrollBy(0, -75)
  }
}