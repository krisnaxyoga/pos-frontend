<template>
    <div>
        <base-header type="gradient-success" class="pb-4 pt-4 pt-md-7">
        <!-- Card stats -->
                    <div class="scroll col-12">
                        <td>
                            <router-link to="/kategoriproduk" class="btn btn-secondary">Kategori</router-link>
                        </td>
                        <td>
                            <router-link to="/produk" class="btn btn-secondary">Produk</router-link>
                        </td>
                        <td>
                            <router-link to="/varianlist" class="btn btn-secondary">Varian</router-link>
                        </td>
                        <td>
                            <router-link to="/grup" class="btn btn-secondary">Grup</router-link>
                        </td>
                    </div>
        </base-header>
    </div>
</template>
<script>
export default {
    name: 'HeadMenu',
}
</script>
<style>
    .scroll{
        width: 100%;
        overflow-y: auto;
    }
</style>