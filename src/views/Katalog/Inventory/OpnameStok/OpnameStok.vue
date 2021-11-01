<template>
<head-menu></head-menu>
    <div>
       <div class="container mt-5">
            <div class="row">
                <div class="col">
                    <opname-stock-table></opname-stock-table>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import HeadMenu from '../../HeadMenu.vue'
import OpnameStockTable from '../../../Tables/Inventory/OpnameStockTable.vue'
export default {
    components: { HeadMenu, OpnameStockTable},
    name: 'OpnameStok',

}
</script>