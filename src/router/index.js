import { createRouter, createWebHashHistory } from "vue-router";

import DashboardLayout from "@/layout/DashboardLayout";
import AuthLayout from "@/layout/AuthLayout";

import Dashboard from "../views/Dashboard.vue";
import Profile from "../views/UserProfile.vue";
import Tables from "../views/Tables.vue";
import error from "../views/Error.vue";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import katalog from "../views/Katalog/Katalog.vue";
import Produktax from '@/views/Katalog/Produk_tax/Produktax'
import AddPtax from '@/views/Katalog/Produk_tax/AddPtax'
import Produk from '@/views/Katalog/Produk/Produk'
import KategoriProduk from '@/views/Katalog/Kategori/KategoriProduk'
import GrupList from '@/views/Katalog/Grup/GrupList'

const routes = [
  {
    path: "/",
    redirect: "/dashboard",
    component: DashboardLayout,
    children: [
      {
        path: "/dashboard",
        name: "dashboard",
        components: { default: Dashboard },
      },
      {
        path: "/katalog",
        name: "katalog",
        components: { default: katalog },
      },
      {
        path: "/produktax",
        name: "produktax",
        components: { default: Produktax},
      },
      {
        path: "/addptax",
        name: "addptax",
        components: { default: AddPtax },
      },
      {
        path: "/produk",
        name: "produk",
        components: { default: Produk },
      },
      {
        path: "/error",
        name: "error",
        components: { default: error },
      },
      {
        path: "/kategoriproduk",
        name: "kategoriproduk",
        components: { default: KategoriProduk },
      },
      {
        path: "/profile",
        name: "profile",
        components: { default: Profile },
      },
      {
        path: "/grup",
        name: "grup",
        components: { default: GrupList },
      },
    ],
  },
  {
    path: "/",
    redirect: "login",
    component: AuthLayout,
    children: [
      {
        path: "/login",
        name: "login",
        components: { default: Login },
      },
      {
        path: "/register",
        name: "register",
        components: { default: Register },
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  linkActiveClass: "active",
  routes,
});

export default router;
