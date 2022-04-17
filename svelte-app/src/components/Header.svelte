<TopAppBar variant="static" dense>
  <Row>
      <Section
      >
          <IconButton  class="material-icons" on:click={ onClick }>menu</IconButton>
          <Title>ghpark</Title>
      </Section>
      <Section
        align="end" toolbar
      >
          <IconButton href="https://github.com/HOBOOK" target="_blank"><Github /></IconButton>
      </Section>
  </Row>
</TopAppBar>

<script>
  import TopAppBar, { Row, Section, Title } from '@smui/top-app-bar';
  import IconButton from '@smui/icon-button';
  import Github from "svelte-material-icons/Github.svelte";



  const onClick = () => {
  };
</script>

<style>
</style>