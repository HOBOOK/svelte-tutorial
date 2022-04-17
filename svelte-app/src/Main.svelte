<div class="main-container">
  <Aside bind:open={open}></Aside>

  <AppContent class="app-content">
      <main class="main-content">
          <Router {routes} />
      </main>
  </AppContent>
</div>

<script>
  import Router from 'svelte-spa-router';
  import routes from '~/routes';

  import { AppContent } from '@smui/drawer';

  import Aside from '~/components/Aside.svelte';

  let open = false;
</script>

<style lang="scss">
  /* These classes are only needed because the
  drawer is in a container on the page. */
  .main-container {
      position: relative;
      display: flex;
      height: calc(100% - 48px);
      overflow: hidden;
      z-index: 0;
      
      .main-content {
        margin: 16px;
        height: calc(100% - 48px);
        box-sizing: border-box;
    }
  }

  :global(.app-content) {
      flex: auto;
      overflow: auto;
      position: relative;
      flex-grow: 1;
  }

  
</style>