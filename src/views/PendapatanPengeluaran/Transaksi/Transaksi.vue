<template>
<head-pendapatan></head-pendapatan>
    <div>
       <div class="container mt-5">
            <div class="row">
                <div class="col">
                    <router-link to="/error" class="btn btn-success mb-3">
                        Tambah
                    </router-link>
                    <transaksi-table></transaksi-table>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import TransaksiTable from '@/views/Tables/PendapatanPengeluaran/TransaksiTable'
import HeadPendapatan from '../HeadPendapatan.vue'

export default {
    components: {HeadPendapatan, TransaksiTable},
    name: 'transaksi',

}
</script>