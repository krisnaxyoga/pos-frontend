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
                <div class="alert alert-danger" v-for="(error, index) in errors" :key="index">
                  {{ error[0] }}
                </div>
                <h4>Buat Akun Tokomu Disini</h4>
                <h6 class="font-weight-light">Daftar dengan mudah. Hanya Perlu Melakukan Langkah Berikut</h6>
                <form class="pt-3" @submit.prevent="register">
                   <div class="form-group">
                    <select v-model="kategori" class="form-control form-control-lg" id="exampleFormControlSelect2">
                      <option>Kategori Toko</option>
                      <option>United States of America</option>
                     
                    </select>
                  </div>
                  <div class="form-group">
                    <input v-model="nama_toko" type="text" class="form-control form-control-lg" id="exampleInputUsername1" placeholder="Nama Toko">
                  </div>
                  <div class="form-group">
                    <input v-model="email" type="email" class="form-control form-control-lg" id="exampleInputEmail1" placeholder="Email Toko">
                  </div>
                  <div class="form-group">
                    <input v-model="telepon_toko" type="text" class="form-control form-control-lg" id="exampleInputPassword1" placeholder="Telepon Toko">
                  </div>
                  <div class="form-group">
                    <input v-model="web_toko" type="text" class="form-control form-control-lg" id="exampleInputPassword1" placeholder="Website Toko">
                  </div>
                  <div class="form-group">
                    <input v-model="alamat_toko" type="text" class="form-control form-control-lg" id="exampleInputPassword1" placeholder="Alamat Toko">
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
import axios from 'axios'
export default {
  name: 'register',
   data() {
    return {
      name: "",
      email: "",
      password: "",
      errors: null
    };
  },
  methods: {
    register: function () {
      let data = {
        nama_toko: this.nama_toko,
        email: this.email,
        password: this.password,
      };
      this.$store
        .dispatch("register", data)
        .then(response => {
          console.log(response)
          this.$router.push({
            name: 'Login'
          })
        }).catch(error => {
          this.errors = error.response.data.errors
        })
    }
  }
}
</script>