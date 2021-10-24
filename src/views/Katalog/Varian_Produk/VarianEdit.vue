<template>
<head-menu></head-menu>
    <div class="container">
        <div class="row">
            <div class="col-12 col-lg-12">
                
                <div class="card mt-5">
                    <div class="card-header">
                        Edit Varian
                    </div>
                    <div class="card-body">
                        <form class="row" action="">
                            
                            <div class="col-12 col-lg-12 mb-3">
                                <label for=""><span class="text-danger">*</span>  Nama</label>
                                <input class="form-control" type="text" name="" id="" placeholder="masukan nama Varian">
                            </div>
                            <div class="col-12 col-lg-12 mb-3">
                                <label for=""><span class="text-danger">*</span>  Sku</label>
                                <input class="form-control" type="text" name="" id="" placeholder="masukan SKU">
                            </div>
                            <div class="col-12 col-lg-12 mb-3">
                                <div class="form-group">
                                <label for="exampleFormControlSelect1">Produk</label>
                                <select class="form-control" id="exampleFormControlSelect1">
                                        <option value=""></option>
                                        <option value="">tess2</option>
                                        <option value="">tess3</option>
                                        <option value="">tess4</option>
                                </select>
                                </div>
                            </div>
                            <div class="col-12 col-lg-12 mb-3">
                                <label for=""><span class="text-danger">*</span>  Harga Jual</label>
                                <input class="form-control" type="text" name="" id="" placeholder="masukan Harga Jual">
                            </div>
                            <div class="col-12 col-lg-12 mb-3">
                                <label for=""><span class="text-danger">*</span> Harga Beli</label>
                                <input class="form-control" type="text" name="" id="" placeholder="masukan Harga Beli">
                            </div>
                            <div class="col-12 col-lg-12 mb-3">
                                <label for=""> Stock</label>
                                <input class="form-control" type="number" name="" id="" placeholder="masukan Stock">
                            </div>
                            <div class="col-12 col-lg-6 mb-3">
                                <label for="">Empty</label>
                                <div class="form-check form-switch mb-3">
                                    <input class="form-check-input" type="checkbox" id="flexSwitchCheckChecked">
                                </div>
                            </div>
                            <div class="col-12 col-lg-6 mb-3">
                                <label for="">notification alert</label>
                                <div class="form-check form-switch mb-3">
                                    <input class="form-check-input" type="checkbox" id="flexSwitchCheckChecked">
                                </div>
                            </div>
                            <div class="col-12 col-lg-6">
                                <button
                                type="submit"
                                class="btn btn-info"
                                >submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import HeadMenu from '../HeadMenu.vue'
export default {
    components: { HeadMenu },
    name: 'VarianEdit',

}
</script>