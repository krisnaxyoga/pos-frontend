<template>
    <div>
        <base-header type="gradient-success" class="pb-2 pb-2 pt-4 pt-md-8">
        <!-- Card stats -->
            <div class="row">
                <div class="col-6 col-lg-3 mb-4">
                     <router-link to="/kategoriproduk" class="btn btn-primary">Kategori</router-link>
                </div>
                <div class="col-6 col-lg-3 ">
                     <router-link to="/produk" class="btn btn-primary">Produk</router-link>
                </div>
                <div class="col-6 col-lg-3 ">
                    <router-link to="/produktax" class="btn btn-primary">Produk Tax</router-link>
                </div>
                <div class="col-6 col-lg-3">
                    <router-link to="/register" class="btn btn-primary">Varian Produk</router-link>
                </div>
                <div class="col-6 col-lg-3">
                    <router-link to="/grup" class="btn btn-primary">Grup</router-link>
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