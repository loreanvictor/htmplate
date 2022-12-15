import htm from 'htm'
import vhtml from 'vhtml'


export const html = htm.bind(vhtml)


export const template = (strings: TemplateStringsArray, ...values: unknown[]) => {
  const tmpl$ = document.createElement('template')
  tmpl$.innerHTML = html(strings, ...values) as string

  return tmpl$
}


export function use(tmpl$: HTMLTemplateElement) {
  return document.importNode(tmpl$.content, true)
}
