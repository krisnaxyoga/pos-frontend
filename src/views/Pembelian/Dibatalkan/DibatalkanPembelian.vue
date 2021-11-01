<template>
<head-pembelian></head-pembelian>
    <div>
       <div class="container mt-5">
            <div class="row">
                <div class="col">
                    <router-link to="/addvarian" class="btn btn-success mb-3">
                        Tambah
                    </router-link>
                   <dibatalkan-table></dibatalkan-table>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import HeadPembelian from '../HeadPembelian.vue'
import DibatalkanTable from '../../Tables/Pembelian/DibatalkanTable.vue'
export default {
    components: {HeadPembelian, DibatalkanTable},
    name: 'DibatalkanPembelian',

}
</script>