<template>

  <section class="login">
    <div class="container-scroller">
      <div class="container-fluid page-body-wrapper full-page-wrapper">
        <div class="content-wrapper d-flex align-items-center auth">
          <div class="row w-100 flex-grow">
            <div class="col-xl-4 col-lg-6 mx-auto">
              <div class="auth-form-light text-left p-5">
                <div class="brand-logo">
                  <img src="">
                </div>
                <div class="alert alert-danger" v-for="(error, index) in errors" :key="index">
                  {{ error[0] }}
                </div>
                <h4>Hello! let's get started</h4>
                <h6 class="font-weight-light">Sign in to continue.</h6>
                <form class="pt-3" @submit.prevent="userLogin">
                  <div class="form-group">
                    <input type="email" v-model="form.email" class="form-control form-control-lg" id="exampleInputEmail1" placeholder="Email">
                  </div>
                  <div class="form-group">
                    <input type="password" v-model='form.password' class="form-control form-control-lg" id="exampleInputPassword1" placeholder="Password">
                  </div>
                  <div class="mt-3">
                    <button type="submit" class="btn btn-block btn-gradient-primary btn-lg font-weight-medium auth-form-btn">SIGN IN</button>
                    <!-- <router-link class="btn btn-block btn-gradient-primary btn-lg font-weight-medium auth-form-btn" to="/">SIGN IN</router-link> -->
                  </div>
                  <div class="my-2 d-flex justify-content-between align-items-center">
                    <div class="form-check">
                      <label class="form-check-label text-muted">
                        <input type="checkbox" class="form-check-input">
                        Keep me signed in
                        <i class="input-helper"></i>
                      </label>
                    </div>
                    <a href="javascript:void(0);" class="auth-link text-black">Forgot password?</a>
                  </div>
                  <!-- <div class="mb-2">
                    <button type="button" class="btn btn-block btn-facebook auth-form-btn">
                      <i class="mdi mdi-facebook mr-2"></i>Connect using facebook
                    </button>
                  </div> -->
                  <div class="text-center mt-4 font-weight-light">
                    Don't have an account? <router-link to="/auth-pages/register" class="text-primary">Create</router-link>
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
export default {
  name: 'login',
    data(){
      return {
        form: {
          email: '',
          password: '',
        },
        errors: null
      }
    },
    methods: {
      userLogin () { 
      this.$store.dispatch('login', this.form)
      .then(response => {
  	this.$router.push({name: 'dashboard'})
      }).catch(error => {
        this.errors = error.response.data.errors
      })
    } 
    }
}
</script>
