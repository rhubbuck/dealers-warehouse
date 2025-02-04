<script>
import axios from 'axios';
import router from '@/router';

export default {
    name: 'UpdateCustomer',
    props: {
        id: String
    },
    data() {
        return {
            formData: {
                name: '',
                address1: '',
                address2: '',
                city: '',
                state: '',
                zip: '',
                phone: '',
                email: '',
                businessType: '',
                prefMon: false,
                prefTue: false,
                prefWed: false,
                prefThu: false,
                prefFri: false,

            }
        }
    },
    created() { //populate the form with customer data 
        axios.get(`/api/customers/${this.$route.params.id}`)
            .then(response => {
                this.apiData = response.data;
                this.formData.name = this.apiData.name
                this.formData.address1 = this.apiData.address1
                this.formData.address2 = this.apiData.address2
                this.formData.city = this.apiData.city
                this.formData.state = this.apiData.state
                this.formData.zip = this.apiData.zip
                this.formData.phone = this.apiData.phone
                this.formData.email = this.apiData.email
                this.formData.businessType = this.apiData.businessType
                this.formData.prefMon = this.apiData.prefMon
                this.formData.prefTue = this.apiData.prefTue
                this.formData.prefWed = this.apiData.prefWed
                this.formData.prefThu = this.apiData.prefThu
                if (this.apiData.prefMon == 1) {
                    this.formData.prefMon = true
                }
                if (this.apiData.prefTue == 1) {
                    this.formData.prefTue = true
                }
                if (this.apiData.prefWed == 1) {
                    this.formData.prefWed = true
                }
                if (this.apiData.prefThu == 1) {
                    this.formData.prefThu = true
                }
                if (this.apiData.prefFri == 1) {
                    this.formData.prefFri = true
                }
            })
            .catch(error => {
                this.error = error;
            });
    },
    methods: {
        async updateCustomer() {
            await axios.put(`/api/customers/${this.$route.params.id}`, this.formData, {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                }
            })
                .then(response => {
                    router.push('/')
                })
                .catch(error => {
                    console.log(error);
                })
        },
        isValidEmail() {
            const emailRegex = /^[^@]+@\w+(\.\w+)+\w$/;
            return emailRegex.test(this.email);
        },
        numKeydown(e) {
            if ((/^\W$/.test(e.key)) || (/^[a-z]+$/.test(e.key))) {
                e.preventDefault();
            }
        },
    },
}
</script>

<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-6">
                <h1>Update Customer Account</h1>
                <form @submit.prevent="updateCustomer" novalidate>
                    <fieldset>
                        <div class="form-group">
                            <label class="form-label mt-2">Name</label>
                            <input type="text" class="form-control" placeholder="" v-model="formData.name" />
                        </div>
                        <div class="form-group">
                            <label class="form-label mt-4">Address Line 1</label>
                            <input type="text" class="form-control" placeholder="" v-model="formData.address1" />
                        </div>
                        <div class="form-group">
                            <label class="form-label mt-4">Address Line 2</label>
                            <input type="text" class="form-control" placeholder="" v-model="formData.address2" />
                        </div>
                        <div class="form-group">
                            <label class="form-label mt-4">City</label>
                            <input type="text" class="form-control" placeholder="" v-model="formData.city" />
                        </div>
                        <div class="form-group">
                            <label class="form-label mt-4">State</label>
                            <select class="form-select" placeholder="" v-model="formData.state">
                                <option value="AL">Alabama</option>
                                <option value="AK">Alaska</option>
                                <option value="AZ">Arizona</option>
                                <option value="AR">Arkansas</option>
                                <option value="CA">California</option>
                                <option value="CO">Colorado</option>
                                <option value="CT">Connecticut</option>
                                <option value="DE">Delaware</option>
                                <option value="FL">Florida</option>
                                <option value="GA">Georgia</option>
                                <option value="HI">Hawaii</option>
                                <option value="ID">Idaho</option>
                                <option value="IL">Illinois</option>
                                <option value="IN">Indiana</option>
                                <option value="IA">Iowa</option>
                                <option value="KS">Kansas</option>
                                <option value="KY">Kentucky</option>
                                <option value="LA">Louisiana</option>
                                <option value="ME">Maine</option>
                                <option value="MD">Maryland</option>
                                <option value="MA">Massachusetts</option>
                                <option value="MI">Michigan</option>
                                <option value="MN">Minnesota</option>
                                <option value="MS">Mississippi</option>
                                <option value="MO">Missouri</option>
                                <option value="MT">Montana</option>
                                <option value="NE">Nebraska</option>
                                <option value="NV">Nevada</option>
                                <option value="NH">New Hampshire</option>
                                <option value="NJ">New Jersey</option>
                                <option value="NM">New Mexico</option>
                                <option value="NY">New York</option>
                                <option value="NC">North Carolina</option>
                                <option value="ND">North Dakota</option>
                                <option value="OH">Ohio</option>
                                <option value="OK">Oklahoma</option>
                                <option value="OR">Oregon</option>
                                <option value="PA">Pennsylvania</option>
                                <option value="RI">Rhode Island</option>
                                <option value="SC">South Carolina</option>
                                <option value="SD">South Dakota</option>
                                <option value="TN">Tennessee</option>
                                <option value="TX">Texas</option>
                                <option value="UT">Utah</option>
                                <option value="VT">Vermont</option>
                                <option value="VA">Virginia</option>
                                <option value="WA">Washington</option>
                                <option value="WV">West Virginia</option>
                                <option value="WI">Wisconsin</option>
                                <option value="WY">Wyoming</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <label class="form-label mt-4">Zip</label>
                            <input pattern="[0-9]+" @keydown="numKeydown($event)" maxlength="5" type="text"
                                class="form-control" placeholder="" v-model="formData.zip" />
                        </div>
                        <div class="form-group">
                            <label class="form-label mt-4">Phone</label>
                            <input @keydown="numKeydown($event)" maxlength="10" minlength="10" type="tel"
                                class="form-control" placeholder="" v-model="formData.phone" />
                        </div>
                        <div class="form-group">
                            <label class="form-label mt-4">Email</label>
                            <input type="email" class="form-control" placeholder="" required v-model="formData.email" />
                        </div>
                        <div class="form-group">
                            <label class="form-label mt-4">Business Type</label>
                            <select class="form-select pe-auto" aria-label="Business type"
                                v-model="formData.businessType">
                                <option value="Corporation" selected>Corporation</option>
                                <option value="LLC">LLC</option>
                                <option value="Sole Proprietor">Sole Proprietor</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <label class="form-label mt-4 me-2">Preferred Day(s)</label>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="checkbox" name="inlineRadioOptions"
                                    id="inlineRadio1" value="option1" v-model="formData.prefMon">
                                <label class="form-check-label" for="inlineRadio1">Mon</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="checkbox" name="inlineRadioOptions"
                                    id="inlineRadio2" value="option2" v-model="formData.prefTue">
                                <label class="form-check-label" for="inlineRadio2">Tue</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="checkbox" name="inlineRadioOptions"
                                    id="inlineRadio3" value="option2" v-model="formData.prefWed">
                                <label class="form-check-label" for="inlineRadio2">Wed</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="checkbox" name="inlineRadioOptions"
                                    id="inlineRadio4" value="option2" v-model="formData.prefThu">
                                <label class="form-check-label" for="inlineRadio2">Thu</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input ref="checkbox5" class="form-check-input" type="checkbox"
                                    name="inlineRadioOptions" id="inlineRadio5" value="option2"
                                    v-model="formData.prefFri">
                                <label class="form-check-label" for="inlineRadio2">Fri</label>
                            </div>
                        </div>
                        <div class="d-flex mt-4 align-items-center mt-4">
                            <button class="btn btn-primary me-4">Submit</button>
                            <RouterLink class="btn btn-danger" to="/">Back</RouterLink>
                        </div>

                    </fieldset>
                </form>
            </div>
        </div>
    </div>
</template>
