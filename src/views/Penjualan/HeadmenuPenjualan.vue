<template>
    <div>
        <base-header type="gradient-success" class="pb-1 pt-4 pt-md-7">
        <!-- Card stats -->
            <div class="mb-5">
                 <router-link to="/butuhdiproses" class="btn btn-secondary">Butuh Diproses</router-link>
                 <router-link to="/pesananselesai" class="btn btn-secondary">Pesanan Selesai</router-link>
                 <router-link to="/pengembalian" class="btn btn-secondary">Pengembalian</router-link>
                 <router-link to="/dibatalkan" class="btn btn-secondary">Dibatalkan</router-link>
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