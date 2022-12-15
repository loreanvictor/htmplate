# htmplate

[![tests](https://github.com/loreanvictor/htmplate/actions/workflows/test.yml/badge.svg)](https://github.com/loreanvictor/htmplate/actions/workflows/test.yml)
[![version](https://img.shields.io/npm/v/htmplate?logo=npm)](https://www.npmjs.com/package/htmplate)
![types](https://img.shields.io/npm/types/htmplate)
[![npm bundle size](https://img.shields.io/bundlephobia/minzip/htmplate?color=black&label=size)](https://bundlephobia.com/package/htmplate@latest)


Create [HTML templates](https://www.w3schools.com/tags/tag_template.asp) using [HTM (HyperScript Tagged Markup)](https://github.com/developit/htm).

```js
import { template, use } from 'htmplate'

const tmpl = template`
  <div class=container>
    <h1>Hellow World!</h1>
    <button>CLICK ME!</button>
  </div>
`

document.body.appendChild(use(tmpl))
```
[👉 Try it out!](https://codepen.io/lorean_victor/pen/vYroJwP)

<br>

## Installation

On [node](https://nodejs.org/en/):
```bash
npm i htmplate
```
In the browser:
```js
import { template, use } from 'https://esm.sh/htmplate'
```

<br>

## Usage

👉 Define [HTML templates](https://www.w3schools.com/tags/tag_template.asp) using a JSX-like syntax:

```js
const tmpl = template`<div>Hellow World!</div>`
```

The syntax is powered by [HTM](https://github.com/developit/htm), so you get bonuses such as self-closing tags (`<div/>`), components (`<${Foo}/>`), syntax-highlighting (e.g. [this VSCode plugin](https://marketplace.visualstudio.com/items?itemName=bierner.lit-html), though requires additional configuration), etc. See [HTM's docs](https://github.com/developit/htm) for more info.

👉 Use [HTM templates](https://www.w3schools.com/tags/tag_template.asp) (whether defined using `template` or not) to create elements:
```js
document.body.appendChild(use(tmpl))
```

<br>
