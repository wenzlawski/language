import { writable } from 'svelte/store'

const storedToken = localStorage.token

export const currentUser = writable({
  token: storedToken || ""
})

currentUser.subscribe((value) => localStorage.setItem("token", value.token))