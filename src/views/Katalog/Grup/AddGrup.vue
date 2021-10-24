<template>
<head-menu></head-menu>
    <div class="container">
        <div class="row">
            <div class="col-12 col-lg-12">
                <div class="card mt-5">
                    <div class="card-header">
                        Add Group
                    </div>
                    <div class="card-body">
                        <form class="row" action="">
                            
                            <div class="col-12 col-lg-12 mb-3">
                                <label for=""><span class="text-danger">*</span>  nama</label>
                                <input class="form-control" type="text" name="" id="" placeholder="masukan nama produk">
                            </div>
                            <div class="col-12 col-lg-12 mb-3">
                                <div class="form-group">
                                    <label for="exampleFormControlSelect1">Kategori</label>
                                    <select class="form-control" id="exampleFormControlSelect1">
                                            <option value="">tess</option>
                                            <option value="">tess2</option>
                                            <option value="">tess3</option>
                                            <option value="">tess4</option>
                                    </select>
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
    name: 'AddGrup',

}
</script>