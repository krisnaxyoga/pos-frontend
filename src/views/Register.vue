<template>
  <div class="row justify-content-center">
    <div class="col-12 col-lg-12">
      <div class="card bg-secondary shadow border-0">
        <div class="card-body px-lg-5 py-lg-5">
          <div class="text-center text-muted mb-4">
            <h1>Daftarkan Tokomu Disini</h1>
          </div>
          <form role="form" class="col-12 col-lg-12" @submit.prevent="register">
            <div class="row">
              <div class="col-12 col-lg-12">
                <!-- <div class="form-group">
                  <label for="exampleFormControlSelect1">Kategori Toko</label>
                  <select v-for="(category, index) in category.data" :key="index" class="form-control" id="exampleFormControlSelect1">
                        <option value="">{{ category.nama }}</option>
                  </select>
                </div> -->
                  <input
                    class="form-control mt-4"
                    placeholder="Category Toko"
                    v-model="model.shop_category_id"
                  >
              </div>
              
              <div v-if="validation.shop_category_id" class="mt-2 alert alert-danger">
                  {{ validation.shop_category_id[0] }}
              </div>
            </div>
            <div class="row">
              <div class="col-12 col-lg-6">
                  <input
                    class="form-control mt-4"
                    placeholder="Nama Toko"
                    
                    v-model="model.shop_name"
                  >
                 
                  <div v-if="validation.shop_name" class="mt-2 alert alert-danger">
                      {{ validation.shop_name[0] }}
                  </div>
              </div>
                <div class="col-12 col-lg-6">
                  <input
                    class="form-control mt-4"
                    placeholder="Alamat Toko"
                   
                    v-model="model.address"
                    
                  >
                 
              </div>
               <div v-if="validation.address" class="mt-2 alert alert-danger">
                      {{ validation.address[0] }}
                  </div>
            </div>
            <div class="row">
              <div class="col-12 col-lg-6">
                  <input
                    class="form-control mt-4"
                    placeholder="Telepon Toko"
                    
                    v-model="model.shop_phone"
                  >
                 
              </div>
              <div v-if="validation.shop_phone" class="mt-2 alert alert-danger">
                      {{ validation.shop_phone[0] }}
                  </div>
                <div class="col-12 col-lg-6">
                  <input
                    class="form-control mt-4"
                    placeholder="Email"
                    
                    v-model="model.shop_email"
                  >
                 
              </div>
              <div v-if="validation.shop_email" class="mt-2 alert alert-danger">
                      {{ validation.shop_email[0] }}
                  </div>
            </div>
            <div class="row">
              <div class="mt-5 text-center col-12">
                <h2>Owner Toko</h2>
              </div>
            </div>
            <div class="row">
              <div class="col-12 col-lg-12">
                  <input
                    class="form-control mt-4"
                    placeholder="username"
                    
                    v-model="model.user_name"
                  >
                 
              </div>
              <div v-if="validation.user_name" class="mt-2 alert alert-danger">
                      {{ validation.user_name[0] }}
                  </div>
            </div>
            <div class="row">
              <div class="col-12 col-lg-6">
                  <input
                    class="form-control mt-4"
                    placeholder="Email"
                    
                    v-model="model.email"
                  >
                 
              </div>
               <div v-if="validation.email" class="mt-2 alert alert-danger">
                      {{ validation.email[0] }}
                  </div>
                <div class="col-12 col-lg-6">
                  <input
                    class="form-control mt-4"
                    placeholder="Nomor Telephone"
                    
                    v-model="model.user_phone"
                  >
                 
              </div>
              <div v-if="validation.user_phone" class="mt-2 alert alert-danger">
                      {{ validation.user_phone[0] }}
                  </div>
            </div>
            <div class="text-center">
              <button type="submit" class="btn btn-primary my-4"
                >Create account</button
              >
            </div>
          </form>
        </div>
      </div>
      <div class="row mt-3">
        <div class="col-6">
          <a href="#" class="text-light">
            <small>Forgot password?</small>
          </a>
        </div>
        <div class="col-6 text-right">
          <router-link to="/login" class="text-light">
            <small>Login into your account</small>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
 import { onMounted, reactive, ref } from 'vue'
    import { useRouter } from 'vue-router'
    import axios from 'axios'

    export default {
        name: 'Register',

        setup() {

            //inisialisasi vue router on Composition API
            const router = useRouter()

            //state user
            const model = reactive({
                shop_name: '',
                address: '',
                shop_phone: '',
                shop_email: '',
                shop_category_id: '',
                user_name: '',
                email: '',
                user_phone: ''
            })

            //state validation
            const validation = ref([])

            let category = ref([]);
            onMounted(()=>{
              //get data from api endpoind
              axios.get('https://api.stargobali.com/api/shop_category/all')
                  .then((result)=>{
                      category.value=result.data
                  }).catch((err)=>{
                      console.log(err.response)
                  });
              });

            //method register
            function register() {


                //send server with axios
                axios.post('https://api.stargobali.com/api/shop/register',
                      model
                      )
                .then(() => {

                    //redirect ke halaman login
                    return router.push({
                        name: 'login'
                    })

                }).catch((error) => {
                    //set validation dari error response
                    validation.value = error.response.data
                })

            }

            return {
                category,
                model, // <-- state user
                validation, // <-- state validation 
                register // <-- method register
            }

        }

    }
</script>
<style></style>
