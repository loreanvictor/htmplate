jest.mock('htm', () => require('htm/dist/htm.umd'))

import { template, use } from '../'


test('creates templates for later use.', () => {
  const tmpl$ = template`<button/>`

  expect(tmpl$).toBeInstanceOf(HTMLTemplateElement)

  document.body.appendChild(use(tmpl$))
  document.body.appendChild(use(tmpl$))

  expect(document.body.querySelectorAll('button').length).toBe(2)
})
