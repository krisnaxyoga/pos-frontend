<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-12 col-lg-12 col-md-12">
                <div class="row">
                    <div class="container">
                        <div class="row justify-content-center">
                            <div class="col-12 col-lg-5">
                                <!-- <div v-if="loading">Loading...</div> -->
                                <!-- <div v-if="!loading"> -->
                                    <!-- <div v-if="loginFailed" class="alert alert-danger"> -->
                                    Email atau Password Anda salah.
                                    <!-- </div> -->
                                    <p v-if='feedback' class="text-danger">{{ feedback }}</p>
                                    <div class="card border-0 rounded shadow">
                                        <div class="card-body">
                                            <div class="text-center">
                                                    <h1>LOGIN</h1>
                                            </div>
                                            
                                            <hr>
                                            <form @submit.prevent="login">
                                                <div class="form-group">
                                                    <label>Email address</label>
                                                    <input type="email" v-model="login.email" class="form-control"
                                                        placeholder="Email Address">
                                                </div>
                                                <!-- <div v-if="validation.email" class="mt-2 alert alert-danger">
                                                    {{ validation.email[0] }}
                                                </div> -->

                                                <div class="form-group">
                                                    <label>Password</label>
                                                    <input type="password" v-model="login.password" class="form-control"
                                                        placeholder="Password">
                                                </div>
                                                <!-- <div v-if="validation.password" class="mt-2 alert alert-danger">
                                                    {{ validation.password[0] }}
                                                </div> -->
                                                <div class="text-center">
                                                    <button 
                                                    v-on:click.prevent="userlogin"
                                                    type="submit" 
                                                    class="btn btn-primary my-4"
                                                        >Login</button>
                                                    </div>
                                            </form>
                                        </div>
                                    </div>
                                <!-- </div> -->
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
        </div>
      
    </div>  
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-12 col-lg-6 text-right">
                    <a href="#" class="text-light"><small>Forgot password?</small></a>
                </div>
                <div class="col-12 col-lg-6 ">
                    <router-link to="/register" class="text-light"><small>Create new account</small></router-link>
                </div>
        </div>
    </div>
</template>
<script> 

import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import { BaseUrl } from '../router/BaseUrl'
import qs from 'qs'
import axios from 'axios'
    export default {
        name : 'Login',
        data(){
            return {
                login: {
                email:"",
                password:"" 
                },
                feedback:null,
            }
        },
        methods: {
            userlogin: function(){
                if(this.login.email != "" && this.login.password != ""){
                    let self = this;
                     this.$swal({
                            title: 'Memuat',
                            allowOutsideClick: true,
                            showConfirmButton: true
                        })
                    axios
                    .post(BaseUrl + '/api/login',
                    qs.stringify(this.login)
                    )
                    .then(function(response){
                            // let currentToken = "data.token";
                            localStorage.setItem("data", response.data['data']['token'])
                            localStorage.setItem("email",self.login.email);
                        
                            self.$router.push({
                                name:"katalog"
                            });
                        
                    })
                    .catch(error => console.log(error));
                }else{
                    this.feedback = "Email dan password tidak boleh kososng !!"
                }
            }
        },

        };
        // setup() {

        //     //inisialisasi vue router on Composition API
        //     const router = useRouter()

        //     //state user
        //     const user = reactive({
        //         email: '',
        //         password: '',
        //     })

        //     //state validation
        //     const validation = ref([])

        //     //state loginFailed
        //     const loginFailed = ref(null)

        //     const loading = ref(false)
        //     //method login
        //     function login() {
                
        //         //send server with axios
        //         axios.post('https://api.stargobali.com/api/login',user)
        //         .then(response => {
        //             loading.value(true);
        //             if(response.data.success) {

        //                 //set token
        //                 localStorage.setItem('token', response.data.token)
        //                 //redirect ke halaman dashboard
        //                 return router.push({
        //                     name: 'dashboard'
        //                 })
        //             }
        //             else{
        //                 loginFailed.value = response.data
        //             }

        //             //set state loggedIn to true
                    


        //         }).catch(error => {
        //             loading.value(false);
        //             //set validation dari error response
        //             validation.value = error.response.data
        //         })

        //     }

        //     return {
        //         loading,
        //         user,           // <-- state user
        //         validation,     // <-- state validation 
        //         loginFailed,    // <-- state loggedIn
        //         login           // <-- method login
        //     }

        // }

</script>
<style></style>
