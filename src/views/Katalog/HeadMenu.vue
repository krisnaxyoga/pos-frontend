<template>
    <div>
        <base-header type="gradient-success" class="pb-6 pb-8 pt-5 pt-md-8">
        <!-- Card stats -->
            <div class="row">
                <div class="col-6 col-xl-3 col-lg-6 ">
                     <router-link to="/register" class="btn btn-primary">Kategori</router-link>
                </div>
                <div class="col-6 col-xl-3 col-lg-6 ">
                     <router-link to="/register" class="btn btn-primary">Produk</router-link>
                </div>
                <div class="col-6 col-xl-3 col-lg-6 ">
                    <router-link to="/register" class="btn btn-primary">Produk Tax</router-link>
                </div>
                <div class="col-6 col-xl-3 col-lg-6 ">
                    <router-link to="/register" class="btn btn-primary">Varian Produk</router-link>
                </div>
            </div>
            <div class="row mt-3">
                <div class="col-6 col-xl-3 col-lg-6 mb-4">
                     <router-link to="/register" class="btn btn-primary">Kategori</router-link>
                </div>
                <div class="col-6 col-xl-3 col-lg-6 ">
                     <router-link to="/register" class="btn btn-primary">Produk</router-link>
                </div>
                <div class="col-6 col-xl-3 col-lg-6 ">
                    <router-link to="/register" class="btn btn-primary">Produk Tax</router-link>
                </div>
                <div class="col-6 col-xl-3 col-lg-6 ">
                    <router-link to="/register" class="btn btn-primary">Varian Produk</router-link>
                </div>
            </div>
        </base-header>
    </div>
</template>
<script>
export default {
    name: 'HeadMenu',
}
</script>