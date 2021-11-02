<template>
    <div>
        <base-header type="gradient-success" class="pb-1 pt-4 pt-md-7">
        <!-- Card stats -->
            <div class="mb-5">
                 <router-link to="/butuhprosespembelian" class="btn btn-secondary">Butuh Diproses</router-link>
                 <router-link to="/telahprosespembelian" class="btn btn-secondary">Telah Diproses</router-link>
                 <router-link to="/Dibatalkanpembelian" class="btn btn-secondary">Dibatalkan</router-link>
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