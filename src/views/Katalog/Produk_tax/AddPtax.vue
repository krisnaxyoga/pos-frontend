<template>
<head-menu></head-menu>
    <div class="container">
        <div class="row">
            <div class="col-12 col-lg-12">
               
                <div class="card">
                    <div class="card-header">
                        Add Tax
                    </div>
                    <div class="card-body">
                        <form class="row" action="">
                            
                            <div class="col-12 col-lg-12 mb-3">
                                <label for=""> Nominal</label>
                                <input class="form-control" type="text" name="" id="" placeholder="masukan nama produk">
                            </div>
                            <div class="col-12 col-lg-6">
                                <button
                                type="submit"
                                class="btn btn-info"
                                >submit</button>
                            </div>
                        </form>
                        <router-link to="/detailproduk" class="text-primary"> <i class="fa fa-reply"></i> Back</router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import HeadMenu from '@/views/Katalog/HeadMenu'
export default {
    components: {HeadMenu},
    name: 'add-produk-tax',

}
</script>