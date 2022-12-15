import { template, use } from '../src'


const tmpl = template`<div>Whats up?</div>`

document.body.appendChild(use(tmpl))
document.body.appendChild(use(tmpl))
