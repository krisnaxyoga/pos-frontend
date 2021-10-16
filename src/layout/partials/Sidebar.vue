<template>
  <section class="app-sidebar">
    <nav class="sidebar sidebar-offcanvas" id="sidebar">
      <ul class="nav">
        <li class="nav-item nav-profile">
          <a href="javascript:void(0);" class="nav-link">
            <div class="nav-profile-image">
              <i class="mdi mdi-account menu-icon profile-pic"></i>
              <span class="login-status online"></span>
            </div>
            <div class="nav-profile-text d-flex flex-column">
              <span class="font-weight-bold mb-2">User</span>
              <span class="text-secondary text-small">Owner</span>
            </div>
            <i class="mdi mdi-bookmark-check text-success nav-profile-badge"></i>
          </a>
        </li>
        <li class="nav-item" v-on:click="collapseAll">
          <router-link class="nav-link" to="/dashboard">
            <span class="menu-title">Dashboard</span>
            <i class="mdi mdi-home menu-icon"></i>
          </router-link>
        </li>
        <li class="nav-item">
          <span class="nav-link" v-b-toggle="'ui-basic'">
            <span class="menu-title">Katalog</span>
            <i class="menu-arrow"></i>
            <i class="mdi mdi-cube menu-icon"></i>
          </span>
          <b-collapse accordion="sidebar-accordion" id="ui-basic">
            <ul class="nav flex-column sub-menu">
              <li class="nav-item">
                <router-link class="nav-link" to="/basic-ui/buttons/">Produk</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/basic-ui/dropdowns/">Inventory</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/basic-ui/typography/">Cetak Barcode</router-link>
              </li>
            </ul>
          </b-collapse>
        </li>
        <li class="nav-item" v-on:click="collapseAll">
          <router-link class="nav-link" to="/dashboard">
            <span class="menu-title">Pelanggan & Supplier</span>
            <i class="mdi mdi mdi-account-multiple menu-icon"></i>
          </router-link>
        </li>
        <li class="nav-item" v-on:click="collapseAll">
          <router-link class="nav-link" to="/dashboard">
            <span class="menu-title">Penjualan</span>
            <i class="mdi mdi mdi-cart-outline menu-icon"></i>
          </router-link>
        </li>
        <li class="nav-item" v-on:click="collapseAll">
          <router-link class="nav-link" to="/dashboard">
            <span class="menu-title">Pembelian</span>
            <i class="mdi mdi mdi-book menu-icon"></i>
          </router-link>
        </li>
        <li class="nav-item">
          <span class="nav-link" v-b-toggle="'charts-dropdown'">
            <span class="menu-title">Pendapatan <br> & Pengeluaran</span>
            <i class="menu-arrow"></i>
            <i class="mdi mdi-chart-bar menu-icon"></i>
          </span>
          <b-collapse accordion="sidebar-accordion" id="charts-dropdown">
            <ul class="nav flex-column sub-menu">
              <li class="nav-item">
                <router-link class="nav-link" to="/charts/chartjs/">Transaksi</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/charts/chartjs/">Tipe Transaksi</router-link>
              </li>
            </ul>
          </b-collapse>
        </li>
        <li class="nav-item" v-on:click="collapseAll">
          <router-link class="nav-link" to="/dashboard">
            <span class="menu-title">Laporan</span>
            <i class="mdi mdi mdi-book menu-icon"></i>
          </router-link>
        </li>
        <li class="nav-item">
          <span class="nav-link" v-b-toggle="'table-dropdown'">
            <span class="menu-title">Point Of Sale</span>
            <i class="menu-arrow"></i>
            <i class="mdi mdi-table-large menu-icon"></i>
          </span>
          <b-collapse accordion="sidebar-accordion" id="table-dropdown">
            <ul class="nav flex-column sub-menu">
              <li class="nav-item">
                <router-link class="nav-link" to="/tables/basic-tables/">Pengaturan Pos</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/tables/basic-tables/">Saldo Kas Harian</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/tables/basic-tables/">Ringkasan Shift</router-link>
              </li>
            </ul>
          </b-collapse>
        </li>
        <li class="nav-item" v-on:click="collapseAll">
          <router-link class="nav-link" to="/dashboard">
            <span class="menu-title">Kehadiran</span>
            <i class="mdi mdi mdi-book menu-icon"></i>
          </router-link>
        </li>
        <li class="nav-item">
          <span class="nav-link" v-b-toggle="'user-page-dropdown'">
            <span class="menu-title">Pengaturan</span>
            <i class="menu-arrow"></i>
            <i class="fa fa-cog menu-icon"></i>
          </span>
          <b-collapse accordion="sidebar-accordion" id="user-page-dropdown">
            <ul class="nav flex-column sub-menu">
              <li class="nav-item">
                <router-link class="nav-link" target="_blank" to="">Toko</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" target="_blank" to="">Pajak & Biaya</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" target="_blank" to="">Notifikasi</router-link>
              </li>
            </ul>
          </b-collapse>
        </li>
        <li class="nav-item" v-on:click="collapseAll">
          <router-link class="nav-link" to="">
            <span class="menu-title">Tutorial</span>
            <i class="fa fa-question-circle menu-icon"></i>
          </router-link>
        </li>
      </ul>
    </nav>
  </section>
</template>

<script>
export default {
  name: 'sidebar',
 data () {
    return {
      collapses: [ 
     { show: false },
     { show: false },
     { show: false }
    ]
    }
  },
  methods: {
    collapseAll() {
      var exp_elm = document.getElementsByClassName("show");
      if (exp_elm.length > 0) {
        var elm_id = exp_elm[0].id;
        this.$root.$emit("bv::toggle::collapse", elm_id);
      }
    }
  },
  mounted () {
    const body = document.querySelector('body')
    // add class 'hover-open' to sidebar navitem while hover in sidebar-icon-only menu
    document.querySelectorAll('.sidebar .nav-item').forEach(function (el) {
      el.addEventListener('mouseover', function () {
        if (body.classList.contains('sidebar-icon-only')) {
          el.classList.add('hover-open')
        }
      })
      el.addEventListener('mouseout', function () {
        if (body.classList.contains('sidebar-icon-only')) {
          el.classList.remove('hover-open')
        }
      })
    })
  },
  watch:{
    $route () {
       document.querySelector('#sidebar').classList.toggle('active');
    }
  } 
}
</script>