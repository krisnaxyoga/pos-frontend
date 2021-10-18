<template>
  <section class="tables">
      <div>
          <menu-product></menu-product>
      </div>
    <div class="page-header">
        
      <h3 class="page-title">
        Produk
      </h3>
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><a href="javascript:void(0);">Table</a></li>
          <li class="breadcrumb-item active" aria-current="page">Basic Table</li>
        </ol>
      </nav>
    </div>
    <div class="row">
      <div class="col-lg-12 grid-margin stretch-card">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">List Produk</h4>
            <b-table responsive :items="items"></b-table>
          </div>
        </div>
      </div>
      
    </div>
  </section>

</template>

<script>
import MenuProduct from "../../components/menu-listproduct/MenuProduct.vue";
export default {
  name: 'ListProduct',
 components: {
     MenuProduct,
 }
}
</script>