<template>
<head-menu></head-menu>
    <div>
       <div class="container mt-5">
            <div class="row">
                <div class="col">
                    <produk-table title="Light Table"></produk-table>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import ProdukTable from '@/views/Tables/Katalog/ProdukTable'
import HeadMenu from '../HeadMenu.vue'
export default {
    components: { HeadMenu,ProdukTable },
    name: 'Produk',

}
</script>