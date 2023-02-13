<script lang="ts">
  import svelteLogo from './assets/svelte.svg'
  import {currentUser} from './stores/authentication'
  import Login from '@/components/Login.svelte'
  import Dashboard from '@/components/Dashboard.svelte'
  import Navbar from '@/components/Navbar.svelte'
  import Welcome from '@/components/Welcome.svelte'

</script>

<main>
  <Navbar/>

  <Welcome />

  <Login/>

  {#if $currentUser.token}

    <Dashboard />

  {/if}


</main>

<style lang="scss">
</style>