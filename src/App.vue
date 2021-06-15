<template>
  <v-app>
    <AppBar/>
   
    <v-main>
      <router-view/>
    </v-main>
    <Loading/>
  </v-app>
</template>

<script>


export default {
  name: 'App',

  components: {
    AppBar: () => import('./components/core/AppBar'),
    Loading: () => import('./components/core/Loading'),
  },

  data: () => ({
    //
  }), mounted: function() {
    let elHtml = document.getElementsByTagName('html')[0]
    elHtml.style.overflowY = 'auto'
  },
  destroyed: function() {
    let elHtml = document.getElementsByTagName('html')[0]
    elHtml.style.overflowY = null
  },
};
</script>
<style scoped>
 html{
      overflow-y: hidden;
    }

</style>
