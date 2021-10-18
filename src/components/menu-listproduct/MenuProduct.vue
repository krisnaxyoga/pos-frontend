<template>
    <div class="container">
        <div class="row">
            <div class="col-12">
                <router-link class="btn btn-info" to="/product/AddKategori">Kategori</router-link>
                <router-link class="btn btn-info" to="/product/AddGroup">Group</router-link>
                <router-link class="btn btn-info" to="/product/AddProduk">Product</router-link>
                <router-link class="btn btn-info" to="">Product Varian</router-link>
                <router-link class="btn btn-info" to="">Produk Tax</router-link>
                <router-link class="btn btn-info" to="">Buyer Type</router-link>
            </div>
        </div>
    </div>
</template>
<script>

export default {
    name: 'MenuProduct'
}
</script>