<template>
<head-menu></head-menu>
    <div>
       <div class="container mt-5">
            <div class="row">
                <div class="col">
                    <router-link to="/addstockmasuk" class="btn btn-success mb-3">
                        Tambah
                    </router-link>
                    <stock-masuk title="Light Table"></stock-masuk>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import HeadMenu from '../../HeadMenu.vue'
import StockMasuk from '../../../Tables/Inventory/StockMasuk.vue'
export default {
    components: { HeadMenu,StockMasuk},
    name: 'StockMasukList',

}
</script>