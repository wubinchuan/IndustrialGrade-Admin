// const s: string = "123";
// console.log(s);
// document.querySelector("#app")!.innerHTML = s;
import { createApp, h, render } from "vue";
import App from "./App.vue";
import { createRouter, createWebHistory } from "vue-router";
import { createPinia } from "pinia";
import { setupLayouts } from "virtual:generated-layouts";
import generatedRoutes from "virtual:generated-pages";
// import routes from "~pages";
const routes=setupLayouts(generatedRoutes)
import "uno.css";
//为什么使用render函数，不使用template，Vue3默认情况下运行时不编译template
// const App = {
//   render() {
//     return h("div", null, [[String("hello vue")]]);
//   },
// };

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});
// const pinia = createPinia();
//自动装载
const app = createApp(App);
app.use(router).mount("#app");
Object.values(import.meta.glob("./modules/*.ts", { eager: true })).forEach(
  (i: any) => i.install?.({ app })
);
