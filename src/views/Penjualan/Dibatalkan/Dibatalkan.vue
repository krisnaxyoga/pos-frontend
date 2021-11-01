<template>
<headmenu-penjualan></headmenu-penjualan>
    <div>
       <div class="container mt-5">
            <div class="row">
                <div class="col">
                   <dibatalkan-table></dibatalkan-table>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import HeadmenuPenjualan from '@/views/Penjualan/HeadmenuPenjualan'
import DibatalkanTable from '../../Tables/Penjualan/DibatalkanTable.vue'
export default {
    components: { HeadmenuPenjualan,DibatalkanTable },
    name: 'Dibatalkan',

}
</script>