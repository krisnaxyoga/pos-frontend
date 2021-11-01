<template>
<head-menu></head-menu>
    <div>
       <div class="container mt-5">
            <div class="row">
                <div class="col">
                    <pergerakan-stock-tabel></pergerakan-stock-tabel>
                    
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import HeadMenu from '../../HeadMenu.vue'
import PergerakanStockTabel from '../../../Tables/Inventory/PergerakanStockTabel.vue'
export default {
    components: { HeadMenu, PergerakanStockTabel},
    name: 'PergerakanStok',

}
</script>