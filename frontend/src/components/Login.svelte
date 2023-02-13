<script>
  import { useForm, validators, HintGroup, Hint, email, required } from "svelte-use-form";
  import api from '@/lib/api'
  import {currentUser} from '@/stores/authentication'

  const form = useForm();

  async function handleSubmit() {
    if ($form.email && $form.password) {
      let email = $form.email.value;
      let password = $form.password.value;
      console.log(`logging in with ${email} and ${password}`)
      await api.logInGetToken(email, password).then(response => {
        console.log(response.data)
      }).catch(error => {
        console.log(error)
      })
  }

  function signOut() {
    console.log(`logging out`)
  }
}
</script>

{#if $currentUser}
  <p>Signed in as {$currentUser}
  <button on:click={signOut}>Sign out</button>
  </p>
{:else}
<form use:form>
  <h1>Login</h1>

  <input type="email" name="email" use:validators={[required, email]} />
  <HintGroup for="email">
    <Hint on="required">This is a mandatory field</Hint>
    <Hint on="email" hideWhenRequired>Email is not valid</Hint>
  </HintGroup>
  <br>

  <input type="password" name="password" use:validators={[required]} />
  <Hint for="password" on="required">This is a mandatory field</Hint>
  <br>

  <button disabled={!$form.valid} on:click|preventDefault={handleSubmit}>Login</button>
</form>
{/if}

<style>
	:global(.touched:invalid) {
		border-color: red;
		outline-color: red;
	}
</style>