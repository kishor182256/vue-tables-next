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
             searchFn:filteredList
        }"
        
         styleClass="vgt-table bordered">
         
        </vue-good-table>

    </div>
</template>

<script>
import 'vue-good-table-next/dist/vue-good-table-next.css';

export default {
    name: "VueTable",

    data(){
        return{
            searchTerm:'',
            debounce: null
        }
    },
    
    props: {
        rows: {
            type: String
        },
        columns: {
            type: String
        }
    },
    components: {
        'vue-good-table': require('vue-good-table-next').VueGoodTable
    },

    methods: {
        customSearch(event) {
          console.log('----->',event.target.value)
      clearTimeout(this.debounce)
      this.debounce = setTimeout(() => {  
        this.searchTerm = event.target.value
      }, 600)
    }
  
  }


   
    
  

}
</script>

