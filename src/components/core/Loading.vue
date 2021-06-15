<template>
    <div class="text-center">
      <v-overlay :value="getOverlay">
        <v-card>
              <v-progress-circular
              class="mt-2 pt-2"
      indeterminate
      color="primary"
    ></v-progress-circular>
    <v-card-text>
        Carregando
    </v-card-text>
        </v-card>
    </v-overlay>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
    data(){
        return{
            overlay:  false
        }
    },
    methods:{
      ...mapGetters(['getCarregando']),
    },
    computed:{
          
        getOverlay(){return this.getCarregando()}
    }
}
</script>

<style>

</style>