<template>
    <div>
        <base-header type="gradient-success" class="pb-1 pt-4 pt-md-7">
        <!-- Card stats -->
            <div class="mb-5">
                <base-dropdown>
                    <template v-slot:title>
                    <base-button type="secondary" class="dropdown-toggle">
                        Produk
                    </base-button>
                    </template>
                            <router-link to="/kategoriproduk" class="dropdown-item">Kategori</router-link>
                        
                            <router-link to="/produk" class="dropdown-item">Produk</router-link>
                        
                            <router-link to="/varianlist" class="dropdown-item">Varian</router-link>
                        
                            <router-link to="/grup" class="dropdown-item">Grup</router-link>
                        
                </base-dropdown>
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
            </div>  
        </base-header>
    </div>
</template>
<script>
export default {
    name: 'HeadMenu',
}
</script>
<style>
    .scroll{
        width: 100%;
        overflow-y: auto;
    }
</style>