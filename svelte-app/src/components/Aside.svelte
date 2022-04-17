<Drawer variant="static" fixed={false} bind:open>
  <Header>
      <Title>사이드 네비</Title>
      <Subtitle>Test Drawer</Subtitle>
      <p>현재 페이지: {$location}</p>
  </Header>
  <Content>
      <List>
          <Item 
             on:click={() => goRoute('/') } activated={$location === '/'} 
          >
              <Graphic class="material-icons" aria-hidden="true">{$location === '/' ? 'keyboard_arrow_down' : 'keyboard_arrow_right'}</Graphic>
              <Text>HOME</Text>
          </Item>
          <Separator />
          <Item 
            on:click={() => goRoute('/about') } activated={$location === '/about'} 
          >
              <Graphic class="material-icons" aria-hidden="true">{$location === '/about' ? 'keyboard_arrow_down' : 'keyboard_arrow_right'}</Graphic>
              <Text>ABOUT</Text>
          </Item>
          <Separator />
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

  const setActive = value => {
      active = value;
      open = false;
  };

  const goRoute = (route) => {
    push(route)
  }
</script>