<template>
<head-menu></head-menu>
    <div class="mt-5">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="card">
                        <div class="card-header">
                          <h1>Detail Produk</h1>  
                        </div>
                        <div class="card-body">
                            <div class="row">
                                <div class="col-12 col-lg-6">
                                    <div class="col-12 col-lg-6 mb-3">
                                        <div width="200px" class="shadow p-3 mb-5 bg-body rounded card">
                                            <img class="img-fluid" src="https://sahabatpegadaian.com/wp-content/uploads/2017/11/Icon-09.png" alt="tess gambar">
                                        </div>
                                    </div>
                                </div>
                                <div class="col-12 col-lg-6">
                                    <div class="col-12 col-lg-6 mb-3">
                                        <h3>Nama Produk : </h3>
                                        <h3>Harga : </h3>
                                        <h3>Deskripsi produk : </h3>
                                        <h3>Tanggal Input : </h3>
                                        <h3>Tax : </h3>
                                        <h3>Stock : </h3>
                                        <router-link to="/addptax" class="btn btn-danger"> <i class="fa fa-book"></i> Tax</router-link>
                                        <router-link to="/editptax" class="btn btn-warning"> <i class="fa fa-book"></i> Edit Tax</router-link>
                                    </div>
                                </div>
                            </div>
                            <router-link to="/produk" class="text-primary"> <i class="fa fa-reply"></i> Back List</router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import HeadMenu from '@/views/Katalog/HeadMenu'
import AddPtax from '@/views/Katalog/Produk_tax/AddPtax'
export default {
    components: {HeadMenu,AddPtax},
    name: 'DetailP',

}
</script>