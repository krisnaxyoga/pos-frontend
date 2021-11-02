<template>
<head-pendapatan></head-pendapatan>
    <div>
       <div class="container mt-5">
            <div class="row">
                <div class="col">
                    <router-link to="/addvarian" class="btn btn-success mb-3">
                        Tambah
                    </router-link>
                   <tipe-transaksi-table></tipe-transaksi-table>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import TipeTransaksiTable from '../../Tables/PendapatanPengeluaran/TipeTransaksiTable.vue'
import HeadPendapatan from '../HeadPendapatan.vue'

export default {
    components: {HeadPendapatan, TipeTransaksiTable},
    name: 'Tipetransaksi',

}
</script>