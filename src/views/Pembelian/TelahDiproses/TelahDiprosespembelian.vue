<template>
<head-pembelian></head-pembelian>
    <div>
       <div class="container mt-5">
            <div class="row">
                <div class="col">
                    <router-link to="/addvarian" class="btn btn-success mb-3">
                        Tambah
                    </router-link>
                   <telah-diproses></telah-diproses>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import HeadPembelian from '../HeadPembelian.vue'
import TelahDiproses from '@/views/Tables/Pembelian/TelahDiproses'
export default {
    components: {HeadPembelian, TelahDiproses },
    name: 'Telah-diproses',

}
</script>