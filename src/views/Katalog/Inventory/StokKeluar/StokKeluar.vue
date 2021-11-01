<template>
<head-menu></head-menu>
    <div>
       <div class="container mt-5">
            <div class="row">
                <div class="col">
                    <router-link to="/addstockmasuk" class="btn btn-success mb-3">
                        Tambah
                    </router-link>
                    <stock-keluar-tables title="Light Table"></stock-keluar-tables>
                    
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import HeadMenu from '../../HeadMenu.vue'
import StockKeluarTables from '../../../Tables/Inventory/StockKeluarTables.vue'
export default {
    components: { HeadMenu,StockKeluarTables},
    name: 'StockKeluar',

}
</script>