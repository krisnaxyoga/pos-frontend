import { createRouter, createWebHashHistory } from "vue-router";

import nProgress from "nprogress";
import DashboardLayout from "@/layout/DashboardLayout";
import AuthLayout from "@/layout/AuthLayout";
import Dashboard from "../views/Dashboard.vue";
import Profile from "../views/UserProfile.vue";
import EditP from '@/views/Katalog/Produk/EditP'
import error from "../views/Error.vue";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import katalog from "../views/Katalog/Katalog.vue";
import Produktax from '@/views/Katalog/Produk_tax/Produktax'
import AddPtax from '@/views/Katalog/Produk_tax/AddPtax'
import Produk from '@/views/Katalog/Produk/Produk'
import KategoriProduk from '@/views/Katalog/Kategori/KategoriProduk'
import GrupList from '@/views/Katalog/Grup/GrupList'
import AddGrup from '@/views/Katalog/Grup/AddGrup'
import EditGrup from '@/views/Katalog/Grup/EditGrup'
import AddP from '@/views/Katalog/Produk/AddP'
import AddKatP from '@/views/Katalog/Kategori/AddKatP'
import EditKatP from '@/views/Katalog/Kategori/EditKatP'
import VarianList from '@/views/Katalog/Varian_Produk/VarianList'
import Addvarian from '@/views/Katalog/Varian_Produk/Addvarian'
import VarianEdit from '@/views/Katalog/Varian_Produk/VarianEdit'


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
      //katalog
      {
        path: "/katalog",  
        name: "katalog",
        components: { default: katalog },
      },
      //group
      {
        path: "/grup",
        name: "group",
        components: { default: GrupList },
      },
      {
        path: "/addgrup",
        name: "Tambah Group",
        components: { default: AddGrup },
      },
      {
        path: "/editgrup",
        name: "Edit Group",
        components: { default: EditGrup },
      },
      //group
      //kategori
      {
        path: "/kategoriproduk",
        name: "kategoriproduk",
        components: { default: KategoriProduk },
      },
      {
        path: "/addkategori",
        name: "addpkategori",
        components: { default: AddKatP},
      },
      {
        path: "/editkategori",
        name: "editpkategori",
        components: { default: EditKatP},
      },
       //kategori
      //produk menu
      { 
        path: "/addproduk",
        name: "addproduk",
        components: { default: AddP},
      },
      {
        path: "/produk",
        name: "produk",
        components: { default: Produk },
      },
      { 
        path: "/editproduk",
        name: "editproduk",
        components: { default: EditP},
      },
      //produk menu
      //varian
      {
        path: "/varianlist",
        name: "varian list",
        components: { default: VarianList},
      },
      {
        path: "/addvarian",
        name: "tambah varian",
        components: { default: Addvarian},
      },
      {
        path: "/varianedit",
        name: "Edit varian",
        components: { default: VarianEdit},
      },
      //varian
       //Produk Tax
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
        path: "/error",
        name: "error",
        components: { default: error },
      },
      {
        path: "/profile",
        name: "profile",
        components: { default: Profile },
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
