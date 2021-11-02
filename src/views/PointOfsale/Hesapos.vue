<template>
    <div>
        <base-header type="gradient-success" class="pb-1 pt-4 pt-md-7">
        <!-- Card stats -->
            <div class="mb-5 scroll">
                 <base-dropdown>
                    <template v-slot:title>
                    <base-button type="secondary" class="dropdown-toggle">
                        Inventory
                    </base-button>
                    </template>
                    <div class="scroll col-12">
                        <router-link to="/stockmasuklist" class="dropdown-item">Stok Masuk</router-link>
                        <router-link to="/stockkeluar" class="dropdown-item">Stok Keluar</router-link>
                        <router-link to="/produksistock" class="dropdown-item">Produksi Stok</router-link>
                        <router-link to="/opnamestock" class="dropdown-item">Opname Stock</router-link>
                        <router-link to="/pergerakanstock" class="dropdown-item">Pergerakan Stock</router-link>
                           
                    </div>
                </base-dropdown>
                 <router-link to="/pesananselesai" class="btn btn-secondary">Saldo Kas Harian</router-link>
                 <router-link to="/pengembalian" class="btn btn-secondary">Ringkasan Shif</router-link>
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