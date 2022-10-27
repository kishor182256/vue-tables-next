<template>
    <div>
        <input type="text" @input="customSearch">
        <vue-good-table :columns="columns" :rows="rows" theme="polar-bear"
           :pagination-options="{
          enabled: true,
          mode: 'records',
          selectAllByGroup: true,
          selectOnCheckboxOnly: true,
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
        :select-options="{
            enabled: true,
            selectOnCheckboxOnly: true,
            selectionInfoClass: 'custom-class'
        }"
        v-on:selected-rows-change="selectionChanged"
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
            timeout: 0,
            mediaPlanData: []
        }
    },
    
    props: {
        rows: {
            type: Array
        },
        columns: {
            type: Array
        }
    },
    components: {
        'vue-good-table': require('vue-good-table-next').VueGoodTable
    },

    methods: {
        customSearch(event:Event): void
 {
            clearTimeout(this.timeout)
            this.timeout = setTimeout(() => {
                this.searchTerm =  (event.target as HTMLInputElement).value;
            }, 500)
        },

        selectionChanged(params:Record<string,any>): void{
          params.selectedRows.forEach((element:Record<string,any>) => 
                    console.log('selected Rows---->',JSON.parse(JSON.stringify(element.body))
          ))
        }
  
  }


}
</script>

