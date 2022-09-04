import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";
import FunStuff from "../views/FunStuff.vue";
import NvimTuts from "@/views/NvimTuts.vue";
import Linux from "@/views/Linux.vue";
import EmulatorPage from "@/views/EmulatorPage.vue";
import CodingPageNavigation from "@/views/CodingPage/Navigation.vue";
import CodingPageAbout from "@/views/CodingPage/About.vue";
import CodingPageProjects from "@/views/CodingPage/Projects.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/nvim_blog",
    name: "(Neo)vim master race",
    component: NvimTuts,
  },
  {
    path: "/linux",
    name: "Linux master race",
    component: Linux,
  },
  {
    path: "/fun_stuff",
    name: "Fun stuff",
    component: FunStuff,
  },
  {
    path: "/coding",
    name: "My coding experience",
    component: CodingPageNavigation,
    children: [
      {
        path: "",
        redirect: "/coding/about",
      },
      {
        path: "about",
        component: CodingPageAbout,
      },
      {
        path: "projects",
        component: CodingPageProjects,
      },
    ],
  },
  {
    path: "/vim_emulator",
    name: "Vim emulator",
    component: EmulatorPage,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
