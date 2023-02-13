import { writable } from 'svelte/store'
import api from '$lib/api'

// const storedToken = localStorage.token
const storedToken = ""

export const currentUser = writable({
  token: storedToken || ""
})

// currentUser.subscribe((value) => localStorage.setItem("token", value.token))

currentUser.subscribe((value) => api.setAuthorization(value.token))