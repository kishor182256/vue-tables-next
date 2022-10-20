/* eslint-disable */
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  
  export default component
}

declare module 'vue-good-table-next' {
  import VueGoodTable from 'vue-good-table-next';
  export  {VueGoodTable}
}
declare const VueGoodTable: typeof globalThis.VueGoodTable