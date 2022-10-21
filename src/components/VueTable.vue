<template>
    <div>
        <input type="text" @input="customSearch">
        <vue-good-table :columns="columns" :rows="rows" theme="polar-bear" :pagination-options="{
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
        }" :search-options="{
             enabled: true, 
             externalQuery: searchTerm,
        }"
        
         styleClass="vgt-table bordered">
         
        </vue-good-table>

    </div>
</template>

<script lang="ts">
import 'vue-good-table-next/dist/vue-good-table-next.css';

export default {
    name: "VueTable",

    data(){
        return{
            searchTerm:'',
            timeout: 0
        }
    },
    
    props: {
        rows: {
            type: Object
        },
        columns: {
            type: Object
        }
    },
    components: {
        'vue-good-table': require('vue-good-table-next').VueGoodTable
    },

    methods: {
        customSearch(event: { target: HTMLInputElement }) {
            console.log('Input----->', event.target.value)
            clearTimeout(this.timeout)
            this.timeout = setTimeout(() => {
                this.searchTerm = event.target.value
            }, 500)
        }
  
  }


   
    
  

}
</script>

