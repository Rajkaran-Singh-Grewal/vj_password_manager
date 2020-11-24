<template>
    <div>
        <div>
            <div id=search_section>
                <input type="text" 
                    name="search" 
                    placeholder="Search Vault"
                    v-model="searchString"
                    @change="searchList">
                <div>
                    <button type="button" 
                        id="add_button" 
                        v-on:click="addEntryViewShow()">
                       <i class="icon-plus"></i>
                    </button>
                </div>
            </div>
            <div id=password_items_section>
                <ul id="password_entries">
                    <li v-bind:key="index" v-for="(item, index) in items">
                        {{item}}
                    </li>
                </ul>
            </div>
        </div>
        <div v-if="currentViewMode == 'no_view_mode'" 
            id="no_view_mode_view"></div>
        <div v-else-if="currentViewMode == 'input_view_mode'"
            id="input_view_mode_view">
            <form>
                <input type="text" 
                    placeholder=UserName 
                    name=user_name 
                    id="user_name"
                    v-model="userName"/>
                <input type=email
                    placeholder=email@email.com
                    name=email
                    v-model="email"
                    id="email"/>
                <input type=text
                    placeholder=website
                    name=website
                    v-model="website"
                    id="website"/>
                <div class="">
                    <input type=password
                        placeholder="password"
                        name=password
                        v-model="password"
                        id="password"/>
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
                <button type=button
                    v-on:click="addElement()"
                    id=add_entry_button>Submit
                </button>
            </form>
        </div>
        <div v-else-if="currentViewMode == 'view_mode'"></div>
    </div>
</template>
<script lang="ts" src="../ts/password.ts">
</script>