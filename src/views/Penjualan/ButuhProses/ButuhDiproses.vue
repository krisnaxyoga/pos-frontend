<template>
<headmenu-penjualan></headmenu-penjualan>
    <div>
       <div class="container mt-5">
            <div class="row">
                <div class="col">
                    <router-link to="/addvarian" class="btn btn-success mb-3">
                        Tambah
                    </router-link>
                   <butuh-diproses-table></butuh-diproses-table>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import HeadmenuPenjualan from '@/views/Penjualan/HeadmenuPenjualan'
import ButuhDiprosesTable from '@/views/Tables/Penjualan/ButuhDiprosesTable'
export default {
    components: { HeadmenuPenjualan,ButuhDiprosesTable },
    name: 'Butuh-diproses',

}
</script>