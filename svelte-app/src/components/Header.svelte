<script>
    import { link } from 'svelte-spa-router'
    import active from 'svelte-spa-router/active' // active 관련 기능 import
  </script>
  
  <header>
    HEADER!
    <a
      use:link
      use:active={'/'} 
      href="/">
      Home
    </a>
    <a
      use:link
      use:active={'/about'} 
      href="/about">
      About
    </a>
  </header>