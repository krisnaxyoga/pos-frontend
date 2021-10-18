<template>
    <div class="container">
        <div class="row">
            <div class="col-12 col-lg-12">
                <div class="col-12 col-lg-12 d-flex justify-content-end">
                    <router-link class=" btn btn-primary mb-3" to="/product/listproduct">BACK</router-link>
                </div>
                <div class="card">
                    <div class="card-header">
                        Add Group
                    </div>
                    <div class="card-body">
                        <form class="row" action="">
                            
                            <div class="col-12 col-lg-12 mb-3">
                                <label for=""><span class="text-danger">*</span>  nama Kategori</label>
                                <input class="form-control" type="text" name="" id="" placeholder="masukan nama produk">
                            </div>
                            <div class="col-12 col-lg-12 mb-3">
                                <label for=""><span class="text-danger">*</span>  Kategori</label>
                                <select class="form-control" id="" name="">
                                    <option value="volvo">Volvo</option>
                                    <option value="saab">Saab</option>
                                    <option value="fiat">Fiat</option>
                                    <option value="audi">Audi</option>
                                </select>
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
    name: 'AddGroup',
}
</script>