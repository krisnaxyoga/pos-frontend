<template>
<head-pembelian></head-pembelian>
    <div class="mt-5">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="card">
                        <div class="card-header">
                            Tambah Pesanan
                        </div>
                        <div class="card-body">
                            <form class="row" action="">
                                <div class="col-12 col-lg-12 mb-3">
                                    <label for=""> Tanggal Beli</label>
                                    <input class="form-control" type="date" name="" id="" placeholder="masukan nama produk">
                                </div>
                                <div class="col-12 col-lg-12 mb-3">
                                   <div class="form-group"> 
                                    <label for="">Mata Uang Pembelian</label>
                                    <select class="form-control" id="exampleFormControlSelect1">
                                            <option value="">Rupiah</option>
                                    </select>
                                    </div>
                                </div>
                                <div class="col-12 col-lg-12 mb-3">
                                    <label for=""><span class="text-danger">*</span> Nama Supplier</label>
                                    <input class="form-control" type="text" name="" id="" placeholder="Cari Supplier">
                                </div>

                                 <div class="col-12 col-lg-12 mb-3">
                                    <label for="">Catatan</label>
                                    <textarea class="form-control" placeholder="Cari Supplier" name="catatan" id="" cols="30" rows="10"></textarea>
                                 
                                </div>
                                <div class="col-12 col-lg-6">
                                    <button
                                    type="submit"
                                    class="btn btn-info"
                                    >submit</button>
                                </div>
                            </form>
                            <router-link to="/butuhprosespembelian" class="text-primary"> <i class="fa fa-reply"></i> Back List</router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import HeadPembelian from '@/views/Pembelian/HeadPembelian'
export default {
    components: {HeadPembelian},
    name: 'addbutuhproses',

}
</script>