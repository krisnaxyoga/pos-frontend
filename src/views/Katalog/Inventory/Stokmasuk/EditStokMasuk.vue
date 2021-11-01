<template>
<head-menu></head-menu>
    <div class="mt-5">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="card">
                        <div class="card-body">
                            <form class="row" action="">
                                <div class="col-12 col-lg-6 mb-3">
                                    <label for=""><span class="text-danger">*</span>  nama Produk</label>
                                    <input class="form-control" type="text" name="" id="" placeholder="masukan nama produk">
                                </div>
                                <div class="col-12 col-lg-6 mb-3">
                                    <label for=""><span class="text-danger">*</span> Komisi</label>
                                    <input class="form-control" type="text" name="" id="" placeholder="Masukan Komisi Produk">
                                </div>
                                <div class="col-12 col-lg-6 mb-3">
                                    <label for=""><span class="text-danger">*</span> minimum_purchase</label>
                                    <input class="form-control" type="text" name="" id="" placeholder="Masukan minimum purchase Produk">
                                </div>
                                <div class="col-12 col-lg-6 mb-3">
                                    <label for=""><span class="text-danger">*</span> maximum_purchase</label>
                                    <input class="form-control" type="text" name="" id="" placeholder="Masukan maximum purchase Produk">
                                </div> 
                                <div class="col-12 col-lg-3 mb-3">
                                    <label class="form-check-label" for="flexSwitchCheckChecked">Is Dynamic Price</label>
                                    <div class="form-check form-switch mb-3">
                                        <input class="form-check-input" type="checkbox" id="flexSwitchCheckChecked">
                                    </div>
                                </div>
                                <div class="col-12 col-lg-3 mb-3">
                                    <label class="form-check-label" for="flexSwitchCheckChecked">Tax</label>
                                    <div class="form-check form-switch mb-3">
                                        <input class="form-check-input" type="checkbox" id="flexSwitchCheckChecked">
                                    </div>
                                </div>
                                <div class="col-12 col-lg-3 mb-3">
                                    <label class="form-check-label" for="flexSwitchCheckChecked">Tampil</label>
                                    <div class="form-check form-switch mb-3">
                                        <input class="form-check-input" type="checkbox" id="flexSwitchCheckChecked">
                                    </div>
                                </div>
                                <div class="col-12 col-lg-3 mb-3">
                                    <label class="form-check-label" for="flexSwitchCheckChecked">Aktif</label>
                                    <div class="form-check form-switch mb-3">
                                        <input class="form-check-input" type="checkbox" id="flexSwitchCheckChecked">
                                    </div>
                                </div>
                                <div class="col-12 col-lg-12 mt-3">
                                    <label for=""><span class="text-danger mt-5">*</span> Grup</label>
                                     <div class="form-group">
                                        <select class="form-control" id="exampleFormControlSelect1">
                                                <option value="">tess</option>
                                                <option value="">tess2</option>
                                                <option value="">tess3</option>
                                                <option value="">tess4</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="col-12 col-lg-12 mb-3">
                                    <label for="">Deskripsi</label>
                                    <textarea class="form-control" name="" id="" placeholder="Masukan Deskripsi Produk"> </textarea>
                                </div>
                                <div class="col-12 col-lg-12 mb-3">
                                    <label for="">Note</label>
                                    <textarea class="form-control" name="" id="" placeholder="Masukan Note Produk"> </textarea>
                                </div>
                                <div class="col-12 col-lg-6">
                                    <button
                                    type="submit"
                                    class="btn btn-info"
                                    >submit</button>
                                </div>
                            </form>
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
export default {
    components: {HeadMenu},
    name: 'editstockmasuk',

}
</script>