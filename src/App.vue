<template>
 <Main/>
 
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Main from './components/Main.vue';
import 'vue-good-table/dist/vue-good-table.css';


export default defineComponent({
  name: 'App',
  components: {
    Main
,  }
});
</script>

<style>

</style>
