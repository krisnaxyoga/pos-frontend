<template>
  <div class="card shadow" :class="type === 'dark' ? 'bg-default' : ''">
    <div
      class="card-header border-0"
      :class="type === 'dark' ? 'bg-transparent' : ''"
    >
      <div class="row align-items-center">
        <div class="col">
          <h3 class="mb-0" :class="type === 'dark' ? 'text-white' : ''">
            List Kategori
          </h3>
        </div>
        <div class="col text-right">
          <base-button type="primary" size="sm">See all</base-button>
        </div>
      </div>
    </div>

    <div class="table-responsive">
      <base-table
        class="table align-items-center table-flush"
        :class="type === 'dark' ? 'table-dark' : ''"
        :thead-classes="type === 'dark' ? 'thead-dark' : 'thead-light'"
        tbody-classes="list"
        :data="tableData"
      >
        <template v-slot:columns>
            <th>Nama</th>
            <th>Sku</th>
            <th>Aksi</th>
            <th>harga jual</th>
            <th>dibuat pada</th> 
            <th> diupdate pada</th>
            <th>stock</th>
            <th>kosong</th>
            <th>notifikasi peringatan stok</th>
            <th>aksi</th>
        </template>

        <template>
          
          
        </template>
      </base-table>
    </div>

    <div
      class="card-footer d-flex justify-content-end"
      :class="type === 'dark' ? 'bg-transparent' : ''"
    >
      <base-pagination total="30"></base-pagination>
    </div>
  </div>
</template>
<script>
export default {
  name: "varian-table",
  props: {
    type: {
      type: String,
    },
    title: String,
  },
  data() {
    return {
      tableData: [
        
      ],
    };
  },
};
</script>
<style></style>
