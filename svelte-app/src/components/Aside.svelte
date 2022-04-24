<Drawer variant="static" fixed={false} bind:open>
  <Header>
      <Title>사이드 네비</Title>
      <Subtitle>Test Drawer</Subtitle>
      <p>현재 페이지: {$location}</p>
  </Header>
  <Content>
      <List>
        {#each routes as route (route.path)}
          <Item 
             on:click={() => goRoute(route.path) } activated={$location === route.path} 
          >
              <Graphic class="material-icons" aria-hidden="true">{$location === route.path ? 'keyboard_arrow_down' : 'keyboard_arrow_right'}</Graphic>
              <Text>{route.text}</Text>
          </Item>
          <Separator />
        {/each}
      </List>
  </Content>
</Drawer>

<!-- Don't include fixed={false} if this is a page wide drawer.
  It adds a style for absolute positioning. -->
<Scrim fixed={false} />

<script>
  import Drawer, { Content, Header, Title, Subtitle, Scrim } from '@smui/drawer';
  import List, { Item, Text, Graphic, Separator } from '@smui/list';
  import { push, location } from 'svelte-spa-router'

  export let open;

  const routes = [{
    path:'/',
    text:'HOME'
  },{
    path:'/about',
    text:'ABOUT'
  },{
    path:'/user',
    text:'USER'
  }];

  const goRoute = (route) => {
    push(route)
  }
</script>