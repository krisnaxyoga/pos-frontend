<template>
  <div class="wrapper" :class="{ 'nav-open': $sidebar.showSidebar }">
    <side-bar
      :background-color="sidebarBackground"
      short-title="Argon"
      title="Argon"
    >
      <template v-slot:links>
      <sidebar-item
          :link="{
            name: 'Dashboard',
            icon: 'ni ni-tv-2 text-primary',
            path: '/dashboard',
          }"
        />
        <sidebar-item
          :link="{
            name: 'Katalog',
            icon: 'ni ni-app text-blue',
            path: '/katalog',
          }"
        />
        <sidebar-item
          :link="{
            name: 'Pelanggan & supplier',
            icon: 'fa fa-users text-orange',
            path: '/error',
          }"
        />
        <sidebar-item
          :link="{
            name: 'Penjualan',
            icon: 'fa fa-truck text-yellow',
            path: '/error',
          }"
        />
        <sidebar-item
          :link="{
            name: 'Pembelian',
            icon: 'ni ni-cart text-red',
            path: '/error',
          }"
        />
        <sidebar-item
          :link="{
            name: 'Pendapatan & Pengeluaran',
            icon: 'fa fa-balance-scale text-info',
            path: '/error',
          }"
        />
        <sidebar-item
          :link="{
            name: 'Laporan',
            icon: 'fa fa-file text-pink',
            path: '/error',
          }"
        />
        <sidebar-item
          :link="{
            name: 'Point Of Sale',
            icon: 'fa fa-fax text-green',
            path: '/error',
          }"
        />
        <sidebar-item
          :link="{
            name: 'Kehadiran',
            icon: 'fa fa-paw text-pink',
            path: '/error',
          }"
        />
        <sidebar-item
          :link="{
            name: 'Pengaturan',
            icon: 'fa fa-cog text-grey',
            path: '/error',
          }"
        />
        <sidebar-item
          :link="{
            name: 'Tutorial',
            icon: 'fa fa-question-circle text-blue',
            path: '/error',
          }"
        />
      </template>
    </side-bar>
    <div class="main-content" :data="sidebarBackground">
      <dashboard-navbar></dashboard-navbar>

      <div @click="toggleSidebar">
        <!-- your content here -->
        <router-view></router-view>
        <content-footer v-if="!$route.meta.hideFooter"></content-footer>
      </div>
    </div>
  </div>
</template>
<script>
import DashboardNavbar from "./DashboardNavbar.vue";
import ContentFooter from "./ContentFooter.vue";

export default {
  components: {
    DashboardNavbar,
    ContentFooter,
  },
  data() {
    return {
      sidebarBackground: "vue", //vue|blue|orange|green|red|primary
    };
  },
  methods: {
    toggleSidebar() {
      if (this.$sidebar.showSidebar) {
        this.$sidebar.displaySidebar(false);
      }
    },
  },
};
</script>
<style lang="scss"></style>
