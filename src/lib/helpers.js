export function debounce (func, wait, immediate) {
  let timeout
  return function () {
    let context = this
    let args = arguments
    const later = () => {
      timeout = null
      if (!immediate) func.apply(context, args)
    }
    let callNow = immediate && !timeout
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
    if (callNow) func.apply(context, args)
  }
}

export const regex = {
  alphaDashes: '^[\u00C0-\u1FFF\u2C00-\uD7FFA-Za-z ][\u00C0-\u1FFF\u2C00-\uD7FFA-Za-z- ]*[\u00C0-\u1FFF\u2C00-\uD7FFA-Za-z ]$',
  numberDashes: '^[0-9\\-]$'
}
