<template>
<head-menu></head-menu>
    <div>
       <div class="container mt-5">
            <div class="row">
                <div class="col">
                    <router-link to="/addkategori" class="btn btn-success mb-3">
                        Tambah
                    </router-link>
                    <kategori-table title="Light Table"></kategori-table>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import HeadMenu from '../HeadMenu.vue'
import KategoriTable from '@/views/Tables/Katalog/KategoriTable'
export default {
    components: { HeadMenu, KategoriTable },
    name: 'KategoriProduk',

}
</script>