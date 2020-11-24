<template>
    <div>
        <div>
            <input type="text" name="search" placeholder="Search Vault">
            <div>
               <button type="button" id="add_button" v-on:click="addEntryViewShow()">
                   <i class="icon-plus"></i>
                </button>
            </div>
        </div>
        <div v-if="currentViewMode == 'no_view_mode'"></div>
        <div v-else-if="currentViewMode == 'input_view_mode'">
            <form>
                <input type="text" 
                    placeholder=UserName 
                    name=user_name 
                    id=user_name/>
                <input type=email
                    placeholder=email@email.com
                    name=email
                    id=email/>
                <input type=text
                    placeholder=website
                    name=website
                    id=website/>
                <div class="">
                    <input type=password
                        placeholder="password"
                        name=password
                        id=password/>
                    <button type=button
                        id=view_password_button
                        v-on:click=changePasswordViewType()>
                        <i class=icon-eye></i>
                    </button>
                    <button type=button
                        id=copy_password_button
                        v-on:click=copyPassword()>
                        <i class=icon-copy></i>
                    </button>
                </div>
                <button type=submit
                    id=add_entry_button>
                </button>
            </form>
        </div>
        <div v-else-if="currentViewMode == 'view_mode'"></div>
    </div>
</template>
<script lang="ts" src="../ts/password.ts">
</script>