<template>
    <div class="container">
        <div class="row">
            <div class="col-12 col-lg-12">
                <div class="col-12 col-lg-12 d-flex justify-content-end">
                    <router-link class=" btn btn-primary mb-3" to="/product/listproduct">BACK</router-link>
                </div>
                <div class="card">
                    <div class="card-header">
                        Add Kategori
                    </div>
                    <div class="card-body">
                        <form class="row" action="">
                            
                            <div class="col-12 col-lg-12 mb-3">
                                <label for=""><span class="text-danger">*</span>  nama Kategori</label>
                                <input class="form-control" type="text" name="" id="" placeholder="masukan nama produk">
                            </div>
                            <div class="col-12 col-lg-12 mb-3">
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
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'AddKategori',
}
</script>