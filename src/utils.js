export function valuate (template, state) {
  return template.replace(/{{\s*([^{}]*)\s*}}/ig,
    function (orig, key) {
      return fromDot(key, state, orig)
    })
}

export function fromDot (accessor, state, orig) {
  let prop = state
  let parts = accessor.split('.')
  parts.forEach((part) => {
    prop = prop[part]
  })
  return (!prop) ? orig : prop
}

export function htmlToNodes (html) {
  let template = document.createElement('template')

  template.innerHTML = html.trim()
  return template.content.childNodes
}
