<template>
 <div>
 <!-- <div>
     <vue-good-table
            :columns="columns"
            :rows="rows"
            :pagination-options="{
    enabled: true,
    mode: 'records',
    perPage: 5,
    position: 'bottom',
    perPageDropdown: [5,10],
    dropdownAllowAll: false,
    setCurrentPage: 2,
    nextLabel: 'next',
    prevLabel: 'prev',
    rowsPerPageLabel: 'Rows per page',
    ofLabel: 'of',
    pageLabel: 'page', 
    allLabel: 'All',
  }"
   :search-options="{
       enabled: true,
      
  }"
            ></vue-good-table>
    
</div> -->
<VueTable :columns='columns' :rows='rows'/>
</div>
</template>

<script lang="ts">
import { defineComponent} from 'vue';
import axios from "axios";
import VueTable from "./VueTable.vue";



export default defineComponent({
 
  name: 'MainComponent',
  data(){
      return {
       
        data:{},
        columns: [
        {
          label: 'Id',
          field: 'id',
        },
        {
          label: 'Title',
          field: 'title',
          type: 'string',
        },
        {
          label: 'Body',
          field: 'body',
          type: 'string',
        }
        
      ],
      rows: [
        { id:'', title:"",body: '' },
        { id:'', title:"",body: ' ' },
        { id:'', title:"",body: '' }  
      ],
      }
    },
    mounted() {
      axios.get('https://jsonplaceholder.typicode.com/posts')
      .then((response) => {
           console.log('----->',JSON.parse(JSON.stringify(response.data)));   
           this.rows = response.data;
      }).catch((error) =>{
         console.log(error);  
      });     
    },
    components: {
    // "vue-good-table": require("vue-good-table-next").VueGoodTable,
    
    VueTable
}
      

});
</script>

