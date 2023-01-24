<template lang="">
    <v-container class="mb-8">
        <v-app-bar color="grey">
            <v-spacer/>
            <v-btn variant="outlined" color="white" class="ml-3">
                <router-link to="/">
                    Просмотр
                </router-link>
            </v-btn>
            <v-btn variant="outlined" color="white" class="ml-3">
                <router-link to="/addrecord">
                    Добавить запись
                </router-link>
            </v-btn>
        </v-app-bar>    
    </v-container>
</template>
<script>
export default {
    
}
</script>
<style lang="">
    
</style>