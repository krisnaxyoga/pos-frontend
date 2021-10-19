<template>

  <section class="register">
    <div class="container-scroller">
      <div class="container-fluid page-body-wrapper full-page-wrapper">
        <div class="content-wrapper d-flex align-items-center auth">
          <div class="row w-100 flex-grow">
            <div class="col-xl-4 col-lg-8 mx-auto">
              <div class="auth-form-light text-left p-5">
                <div class="brand-logo">
                  <img src="../../../assets/images/logo.svg">
                </div>
                <h4>Buat Akun Tokomu Disini</h4>
                <h6 class="font-weight-light">Daftar dengan mudah. Hanya Perlu Melakukan Langkah Berikut</h6>
                <form class="pt-3">
                   <div class="form-group">
                    <select class="form-control form-control-lg" id="exampleFormControlSelect2">
                      <option>Kategori Toko</option>
                      <option>United States of America</option>
                     
                    </select>
                  </div>
                  <div class="form-group">
                    <input type="text" class="form-control form-control-lg" id="exampleInputUsername1" placeholder="Nama Toko">
                  </div>
                  <div class="form-group">
                    <input type="email" class="form-control form-control-lg" id="exampleInputEmail1" placeholder="Email Toko">
                  </div>
                  <div class="form-group">
                    <input type="text" class="form-control form-control-lg" id="exampleInputPassword1" placeholder="Telepon Toko">
                  </div>
                  <div class="form-group">
                    <input type="text" class="form-control form-control-lg" id="exampleInputPassword1" placeholder="Website Toko">
                  </div>
                  <div class="form-group">
                    <input type="text" class="form-control form-control-lg" id="exampleInputPassword1" placeholder="Alamat Toko">
                  </div>
                  <div class="mb-4">
                    <div class="form-check">
                      <label class="form-check-label text-muted">
                        <input type="checkbox" class="form-check-input">
                        Aku Setuju Dengan Syarat & Ketentuan
                        <i class="input-helper"></i>
                      </label>
                    </div>
                  </div>
                  <div class="mt-3">
                    <router-link class="btn btn-block btn-gradient-primary btn-lg font-weight-medium auth-form-btn" to="/auth-pages/regisowner">Daftar</router-link>
                  </div>
                  <div class="text-center mt-4 font-weight-light">
                    Sudah Punya Akun? <router-link to="/auth-pages/login" class="text-primary">Login</router-link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <!-- content-wrapper ends -->
      </div>
      <!-- page-body-wrapper ends -->
    </div>
  </section>

</template>

<script>
import reactive from 'vue'
import ref from 'vue'
import Router from 'vue-router'
import axios from 'axios'

export default {
  name: 'register',
   setup() {

            //inisialisasi vue router on Composition API
            const router = Router()

            //state user
            const user = reactive({
                name: '',
                email: '',
                password: '',
                password_confirmation: ''
            })

            //state validation
            const validation = ref([])

            //method register
            function register() {

                //define variable 
                let name = user.name
                let email = user.email
                let password = user.password
                let password_confirmation = user.password_confirmation

                //send server with axios
                axios.post('http://localhost:8000/api/register', {
                        name,
                        email,
                        password,
                        password_confirmation
                })
                .then(() => {

                    //redirect ke halaman login
                    return router.push({
                        name: 'login'
                    })

                }).catch(error => {
                    //set validation dari error response
                    validation.value = error.response.data
                })

            }

            return {
                user, // <-- state user
                validation, // <-- state validation 
                register // <-- method register
            }

        }
}
</script>