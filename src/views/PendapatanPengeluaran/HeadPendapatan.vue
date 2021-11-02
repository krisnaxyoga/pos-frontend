<template>
    <div>
        <base-header type="gradient-success" class="pb-1 pt-4 pt-md-7">
        <!-- Card stats -->
            <div class="mb-5">
                 <router-link to="/tipetransaksi" class="btn btn-secondary">Tipe Transaksi</router-link>
                 <router-link to="/transaksi" class="btn btn-secondary">Transaksi</router-link>
            </div>  
        </base-header>
    </div>
</template>
<script>
export default {
    name: 'HeadmenuPenjualan',
}
</script>
<style>
    .scroll{
        width: 100%;
        overflow-y: auto;
    }
</style>