<svelte:head>
    <!-- 여기는 렌더링 이후에 head 에 추가될 태그들을 정의하는 곳 -->
	<!-- Fonts -->
<link
    rel="stylesheet"
    href="https://fonts.googleapis.com/icon?family=Material+Icons"
  />
  <link
    rel="stylesheet"
    href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,600,700"
  />

  <!-- Material Typography -->
  <link
    rel="stylesheet"
    href="https://unpkg.com/@material/typography@13.0.0/dist/mdc.typography.css"
  />

  <!-- SMUI -->
  <link rel="stylesheet" href="https://unpkg.com/svelte-material-ui/bare.css" />

  <!-- SMUI Styles -->
<link
rel="stylesheet"
href="/smui.css"
media="(prefers-color-scheme: light)"
/>
<!-- <link
rel="stylesheet"
href="/smui-dark.css"
media="screen and (prefers-color-scheme: dark)"
/> -->
</svelte:head>

<script>
  	import Header from '~/components/Header.svelte'
	import Main from './Main.svelte'

</script>


<Header />
<Main />

<style lang="scss">
	
</style>