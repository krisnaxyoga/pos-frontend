<template>
<head-menu></head-menu>
    <div class="mt-5">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="card">
                        <div class="card-body">
                            <form class="row" action="">
                                <div class="col-12 col-lg-12 mb-3">
                                    <label for=""><span class="text-danger">*</span>  nama Produk</label>
                                    <input class="form-control" type="text" name="" id="" placeholder="masukan nama produk">
                                </div>
                                <div class="col-12 col-lg-12 mb-3">
                                    <label for=""><span class="text-danger">*</span> Grup</label>
                                    <input class="form-control" type="text" name="" id="" placeholder="grup">
                                </div>
                                <div class="col-12 col-lg-12 mb-3">
                                    <label for="">Gambar</label>
                                    <div class="custom-file">
                                        <input type="file" class="custom-file-input" id="customFile">
                                        <label class="custom-file-label" for="customFile">Choose file</label>
                                    </div>
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
    name: 'addproduk',

}
</script>