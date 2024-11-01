import { defineStore, acceptHMRUpdate } from "pinia";
import { ref } from "vue";

export const useUserStore = defineStore("user", () => {
  let count = ref(0);
  function addCount() {
    count.value++;
  }
  return { count, addCount };
});
//让vite热更新的时候保持store的状态
if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useUserStore, import.meta.hot));
}
