<template>
<head-menu></head-menu>
    <div>
       <div class="container mt-5">
            <div class="row">
                <div class="col">
                    <router-link to="/addvarian" class="btn btn-success mb-3">
                        Tambah
                    </router-link>
                    <varian-table title="Light Table"></varian-table>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import VarianTable from '@/views/Tables/Katalog/VarianTable'
import HeadMenu from '../HeadMenu.vue'
export default {
    components: { HeadMenu,VarianTable },
    name: 'Varianlist',

}
</script>