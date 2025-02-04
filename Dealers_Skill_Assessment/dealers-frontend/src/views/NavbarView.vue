<script setup>
import { useAuthStore } from '@/stores/auth';

const authStore = useAuthStore()
const { getUser } = authStore

</script>

<template>
    <nav class="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
        <div class="container-fluid">
            <h2 class="navbar-brand">Dealer's Warehouse</h2>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor02"
                aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarColor02">
                <ul class="navbar-nav me-auto">
                    <li class="nav-item" v-if="authStore.username">
                        <RouterLink class="nav-link active" to="/">Dashboard
                            <span class="visually-hidden">(current)</span>
                        </RouterLink>
                    </li>
                    <li class="nav-item" v-if="authStore.username">
                        <RouterLink class="nav-link" to="/create-customer">New Customer</RouterLink>
                    </li>
                </ul>
                <ul class="navbar-nav">
                    <span class="navbar-text" v-if="authStore.username">Hello, {{ authStore.username }}</span>

                    <li class="nav-item" v-if="authStore.username">
                        <form @submit.prevent="authStore.logoutUser">
                            <button class="nav-link ms-5">Logout</button>
                        </form>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>
