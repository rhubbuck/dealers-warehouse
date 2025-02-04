<script setup>

import { useAuthStore } from '@/stores/auth';
import { storeToRefs } from 'pinia';
import { reactive, onMounted } from 'vue';

const authStore = useAuthStore()
const { authenticateUser } = authStore

const loginFormData = reactive({
    email: "",
    password: "",
});

onMounted(() => {
    authStore.error = null
})

</script>

<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-6">
                <h1 class="mt-5">Login</h1>
                <p class="mt-4 text-danger mb-0">{{ authStore.error }}</p>
                <form @submit.prevent="authenticateUser(loginFormData, 'login')">
                    <fieldset>
                        <div class="form-group">
                            <label class="form-label mt-4">Email</label>
                            <input type="email" class="form-control" placeholder="Email" required
                                v-model="loginFormData.email" />
                        </div>
                        <div class="form-group">
                            <label class="form-label mt-4">Password</label>
                            <input type="password" class="form-control" placeholder="Password" required
                                v-model="loginFormData.password" />
                        </div>
                        <div class="d-flex mt-4 align-items-center">
                            <button class="btn btn-primary me-4">Login</button>
                            <p class="m-0">Don't have an account? <RouterLink to="/register">Register here.</RouterLink>
                            </p>
                        </div>
                    </fieldset>
                </form>
            </div>
        </div>
    </div>
</template>
