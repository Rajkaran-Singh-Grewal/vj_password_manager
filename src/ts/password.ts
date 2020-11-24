import { defineComponent } from "vue";

import { defineComponent } from 'vue';
export default defineComponent({
    setup(){
        const viewMode = ["no_view_mode","input_view_mode","view_mode"];
        let currentViewMode = "no_view_mode";
        function addEntryViewShow(){
            console.log(currentViewMode);
            currentViewMode = "input_view_mode";
            console.log(currentViewMode);
        }
        function minimizeView(){
            currentViewMode = "no_view_mode";
        }
        function viewItem(item: string){
            currentViewMode = "view_mode";
        }
        return {
            viewMode,
            currentViewMode,
            addEntryViewShow,
            minimizeView,
            viewItem
        }
    }
});