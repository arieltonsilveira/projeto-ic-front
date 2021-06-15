<template>
  <v-card>
      <v-card-text>
      </v-card-text>
      <v-card-actions>
          <v-btn @click="buscar()">
              Buscar
          </v-btn>
      </v-card-actions>
  </v-card>

</template>

<script>
export default {
    methods:{
     buscar(){
         this.$emit('buscar')
         this.$swal.fire('Hello world!')
     }   
    }
}
</script>

<style>

</style>