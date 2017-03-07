<template>
  <div id='app'>
    <header>
      <h1>Vue.js at <img src='./assets/logos-fromatob/full_white.svg' /></h1>
    </header>

    <article :id='`page${i}`' v-for='(page,i) in pages' v-if='current === i'>
      <header>{{ page.heading }}</header>
      <p v-for="line in page.content">{{ line }}</p>
    </article>

    <nav>
      <button @click='first' :disabled='current === 0'>«</button>
      <button @click='prev' :disabled='current === 0'>←</button>
      <button @click='next' :disabled='pages.length === current + 1'>→</button>
      <button @click='last' :disabled='pages.length === current + 1'>»</button>
    </nav>

    <footer>
      ©2017 Norman Köhring // fromAtoB &lt;norman.koehring@fromatob.com&gt;
    </footer>
  </div>
</template>

<script>
import { pages } from './pages.json'

export default {
  name: 'app',
  data () { return { pages, current: 0 } },
  methods: {
    prev () {
      this.current = this.current ? this.current - 1 : 0
    },
    next () {
      const max = this.pages.length - 1
      this.current = this.current < max ? this.current + 1 : max
    },
    first () {
      this.current = 0
    },
    last () {
      this.current = this.pages.length - 1
    }
  }
}
</script>

<style>
html {
  height: 100%;
}
body {
  min-height: 100%;
  height: 100%;
}
html, body {
  margin: 0;
  padding: 0;
  font-size: 10px;
  max-width: 100%;
  overflow-x: hidden;
}
html, button, input, select, textarea, #app {
  font-family: 'Open Sans', Helvetica, Arial, sans-serif;
}
#app {
  display: flex;
  flex-direction: column;
  flex: 1 0 100%;
  background: #FFF;
  color: #000;
  min-height: 100%;
}
#app > article {
  flex: 1 0 auto;
  width: 60%;
  margin: auto;
  font-size: 3rem;
}
#app > article > header {
  display: block;
  margin: 1em 0;
  font-size: 6rem;
}
#app > header, #app > footer {
  flex: 0 0 8rem;
  width: 100%;
  background: #455a64;
  color: #FFF;
}
#app > header h1 {
  line-height: 8rem;
  font-size: 4rem;
  text-align: center;
}
#app > header img {
  height: 8rem;
  margin-top: .1rem;
  vertical-align: middle;
}
#app > nav {
  text-align: center;
}
#app > nav > button {
  display: inline-block;
  font-size: 3rem;
  height: 10rem;
  width: 42%;
  background: #EEE;
  border: none;
  outline: none;
}
#app > nav > button:first-of-type,
#app > nav > button:last-of-type {
  width: 7.5%;
}
#app > nav > button:hover {
  background: #EEF;
}
#app > nav > button:disabled {
  opacity: .5;
}
#app > nav > button:disabled:hover {
  background: #EEE;
}
#app > footer {
  font-size: 2rem;
  text-align: center;
  line-height: 4em;
}
</style>
<style src='./styles.css' />
