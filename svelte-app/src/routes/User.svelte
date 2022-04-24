<script>
    import DataTable, { Head, Body, Row, Cell } from '@smui/data-table';
    import LinearProgress from '@smui/linear-progress';
    import Button from '@smui/button';

    import { getOrgList } from "../api/userApi";
    import { onMount } from 'svelte';

    let orgs = []
    let loaded = false;

    onMount(async () => {
        orgs = await getOrgList()
        loaded = true
    })
</script>

<h1>User</h1>
<h2>사용자 정보 관리</h2>
  <DataTable table$aria-label="User list" style="width: 100%;">
    <Head>
      <Row>
        <Cell numeric>ID</Cell>
        <Cell style="width: 100%;">Name</Cell>
        <Cell>Avatar</Cell>
        <Cell>CreatedDate</Cell>
      </Row>
    </Head>
    <Body>
      {#each orgs as item (item.id)}
        <Row>
          <Cell numeric>{item.id}</Cell>
          <Cell>{item.name}</Cell>
          <Cell>{item.avatar}</Cell>
          <Cell>{item.createdDate}</Cell>
        </Row>

      {:else}
        <p>No Data</p>
      {/each}

      
    </Body>
   
    <LinearProgress
      indeterminate
      bind:closed={loaded}
      aria-label="Data is being loaded..."
      slot="progress"
    />
  </DataTable>