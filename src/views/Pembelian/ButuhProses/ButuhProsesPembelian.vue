<template>
<head-pembelian></head-pembelian>
    <div>
       <div class="container mt-5">
            <div class="row">
                <div class="col">
                    <router-link to="/addvarian" class="btn btn-success mb-3">
                        Tambah
                    </router-link>
                   <butuh-prosestable></butuh-prosestable>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import HeadPembelian from '../HeadPembelian.vue'
import ButuhProsestable from '../../Tables/Pembelian/ButuhProsestable.vue'
export default {
    components: {HeadPembelian, ButuhProsestable  },
    name: 'Butuh-diproses-pembelian',

}
</script>