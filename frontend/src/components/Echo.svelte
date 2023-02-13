<script lang="ts">
  // import {api} from '../lib/api'
  import axios from 'axios';
  import api from '../lib/api'

  let value: string

  async function handle() {
    api.getEcho(value).then(response => {
      console.log(response.data)
      value = response.data.msg
    }).catch(error => {
      console.log(error)
    })
  }

</script>

<input bind:value />
<button on:click={handle}>Send</button>

<p>{value}</p>