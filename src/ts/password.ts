import { defineComponent, ref } from 'vue';
export default defineComponent({
    setup(){
        const viewMode = ["no_view_mode","input_view_mode","view_mode"];
        const currentViewMode = ref("no_view_mode");
        const items = ref([]);
        const userName = ref("");
        const website = ref("");
        const password = ref("");
        const email = ref("");
        const searchString = ref("");
        const totalItems: any = [];
        function addEntryViewShow(){
            console.log(currentViewMode);
            currentViewMode.value = "input_view_mode";
            console.log(currentViewMode);
        }
        function minimizeView(){
            currentViewMode.value = "no_view_mode";
        }
        function viewItem(item: string){
            currentViewMode.value = "view_mode";
        }
        function addElement(){
            const formData = {
                "user_name":userName.value,
                "email":email.value,
                "password":password.value,
                "website":website.value,
            };
            items.value.push(formData);
            totalItems.push(formData);
            currentViewMode.value = "no_view_mode";
            userName.value = "";
            email.value = "";
            password.value = "";
            website.value  = "";
        }
        function searchList(){
            console.log(searchString.value);
            if(searchString.value == ""){
                items.value = totalItems;
            }else{
                items.value = [];
                for(let i = 0; i < totalItems.length; i++){
                    if(totalItems[i].user_name.indexOf(
                        searchString.value) != -1){
                            items.value.push(totalItems[i]);
                            continue;
                    }else if(totalItems[i].email.indexOf(
                        searchString.value) != -1){
                            items.value.push(totalItems[i]);
                            continue;
                    }else if(totalItems[i].website.indexOf(
                        searchString.value
                        ) != -1){
                            items.value.push(totalItems[i]);
                            continue;
                        }
                }
            }
        }
        return {
            userName,
            email,
            password,
            searchString,
            searchList,
            website,
            viewMode,
            currentViewMode,
            items,
            addEntryViewShow,
            minimizeView,
            addElement,
            viewItem
        }
    }
});