<template>
<headmenu-penjualan></headmenu-penjualan>
    <div>
       <div class="container mt-5">
            <div class="row">
                <div class="col">
                    <router-link to="/addvarian" class="btn btn-success mb-3">
                        Tambah
                    </router-link>
                   <pengembaliantable></pengembaliantable>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import HeadmenuPenjualan from '@/views/Penjualan/HeadmenuPenjualan'
import Pengembaliantable from '@/views/Tables/Penjualan/Pengembaliantable'
export default {
    components: { HeadmenuPenjualan,Pengembaliantable },
    name: 'Pengembalian',

}
</script>