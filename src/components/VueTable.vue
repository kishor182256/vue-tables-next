<!-- json-server data.json to start json server -->
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
            selectionInfoClass: 'bgcolor',            
        }"
        v-on:selected-rows-change="selectionChanged"
        
         styleClass="vgt-table bordered">
        </vue-good-table>

    </div>
</template>

<script lang="ts">

import axios from "axios";



export default {
    name: "VueTable",

    data(){
        return{
            searchTerm:'',
            timeout: 0,
            arr: [],
            title:'',
            body:'',
            response:null,
            id:''
            
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
        customSearch(event:Event): void
 {
            clearTimeout(this.timeout)
            this.timeout = setTimeout(() => {
                this.searchTerm =  (event.target as HTMLInputElement).value;
            }, 500)
        },

        // async selectionChanged(params:Record<string,any>): Promise<void>{
        //    try{
           
        //      params.selectedRows.forEach((element:Record<string,never>) =>   
        //             console.log('selected Rows-->-->',JSON.parse(JSON.stringify(element.body)),
                    
        //             await axios.post(`http://localhost:3000/posts`,{
        //                 body:element.body
        //              }),
        //              console.log('--->',JSON.parse(JSON.stringify(element.body))),  
        //   ))

        //    }catch(err){
        //     console.error('File write error-->catch error: ' + err)
        //    }
        
        // },

        async selectionChanged(params:Record<string,any>): Promise<void>{
            console.log('Selection', JSON.parse(JSON.stringify(params)))
            try{
                 if(this.id) return
                    const res = await axios.post(`http://localhost:3000/posts`,{ 
                         body:params.selectedRows.map((response:any) =>response.body),
                         title:params.selectedRows.map((response:any) =>response.title)
                     })
                   console.log( res.data.body.map((response:Record<string,any>)=>{console.log(response.body)}))
              
                       
                     

                    
                    //  res.map((record:Record<string,number>)=>{
                      
                    //  console.log('response api data',JSON.parse(JSON.stringify(params.selectedRows)));
                  
            }catch(err) {
                console.log('Selection error-->catch error:',err)
            }
            
        },


  
  },

  mounted(){
    // console.log('mounted response',this.response)
  }


}
</script>

