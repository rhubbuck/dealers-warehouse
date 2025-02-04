<script setup>

import { useAuthStore } from '@/stores/auth';
import { storeToRefs } from 'pinia';
import { reactive, onMounted } from 'vue';

const authStore = useAuthStore()
const { authenticateUser } = authStore

const regFormData = reactive({
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
});

onMounted(() => {
    authStore.error = null
})

</script>

<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-6">
                <h1 class="mt-5">Register</h1>
                <p class="mt-4 text-danger mb-0">{{ authStore.error }}</p>
                <form @submit.prevent="authenticateUser(regFormData, 'register')">
                    <fieldset>
                        <div class="form-group mt-4">
                            <input type="text" class="form-control" placeholder="Name" required
                                v-model="regFormData.name" />
                        </div>
                        <div class="form-group mt-4">
                            <input type="email" class="form-control" placeholder="Email" required
                                v-model="regFormData.email" />
                        </div>
                        <div class="form-group mt-4">
                            <input type="password" class="form-control" placeholder="Password" required
                                v-model="regFormData.password" />
                        </div>
                        <div class="form-group mt-4">
                            <input type="password" class="form-control" placeholder="Password Confirm" required
                                v-model="regFormData.password_confirmation" />
                        </div>
                        <div class="d-flex mt-4 align-items-center">
                            <button class="btn btn-primary me-4">Register</button>
                            <RouterLink class="btn btn-danger me-4" to="/login">Back</RouterLink>
                        </div>
                    </fieldset>
                </form>
            </div>
        </div>
    </div>
</template>
