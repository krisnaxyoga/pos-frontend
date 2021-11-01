<template>
<headmenu-penjualan></headmenu-penjualan>
    <div>
       <div class="container mt-5">
            <div class="row">
                <div class="col">
                    <router-link to="/addvarian" class="btn btn-success mb-3">
                        Tambah
                    </router-link>
                   <pesanan-selesai-table></pesanan-selesai-table>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import HeadmenuPenjualan from '@/views/Penjualan/HeadmenuPenjualan'
import PesananSelesaiTable from '../../Tables/Penjualan/PesananSelesaiTable.vue'
export default {
    components: { HeadmenuPenjualan,PesananSelesaiTable },
    name: 'PesananSelesai',

}
</script>