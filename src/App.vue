<template>
 <Main/>
 
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Main from './components/Main.vue';
import 'vue-good-table-next/dist/vue-good-table-next.css';



export default defineComponent({
  name: 'App',
  components: {
    Main
  }
});
</script>

<style>

</style>
