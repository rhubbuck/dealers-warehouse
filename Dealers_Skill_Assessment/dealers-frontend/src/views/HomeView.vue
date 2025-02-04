<script>
import axios from 'axios';

export default {
  name: 'CustomerList',
  data() {
    return {
      customers: Array
    }
  },
  created() {
    this.getCustomers()
  },
  methods: {
    async getCustomers() {
      await axios.get('/api/customers')
        .then(response => {
          this.customers = response.data
        })
        .catch(error => {
          console.log(error)
        })
    },
    async deleteCustomer(acc) {
      if (confirm('Are you sure you want to delete this account?')) {
        await axios
          .delete(`/api/customers/${acc}`, {
            headers: {
              'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
          })
          .then(response => {
            location.reload()
          })
          .catch(error => {
            console.log(error)
          })
      }
    }

  },
}
</script>

<template>
  <div class="container">
    <table class="table table-hover">
      <thead>
        <tr>
          <th scope="col">Act. #</th>
          <th scope="col">Name</th>
          <th scope="col">Email</th>
          <th scope="col">Location</th>
          <th scope="col">Business Type</th>
          <th scope="col"></th>
        </tr>
      </thead>
      <!-- loop through each customer pulled in via API call and use the id as key -->
      <tbody v-for="customer in customers" :key="customer.id">
        <tr class="">
          <th scope="row">{{ customer.id }}</th>
          <th scope="row">{{ customer.name }}</th>
          <th scope="row">{{ customer.email }}</th>
          <th scope="row">{{ customer.city }}, {{ customer.state }}</th>
          <th scope="row">{{ customer.businessType }}</th>
          <th scope="row" class="d-flex justify-content-around">
            <RouterLink class="btn btn-secondary" :to="{ name: 'update-customer', params: { id: customer.id } }">Manage
            </RouterLink>
            <button class="btn btn-danger" @click="deleteCustomer(customer.id)">Delete</button>
          </th>
        </tr>
      </tbody>
    </table>
  </div>
</template>
