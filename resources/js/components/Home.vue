<template>
    <v-app id="inspire">
    <v-container
        class="fill-height"
        fluid
      >
        <v-row>
          <v-col>
            <div class="headline mb-1">Status Saat Ini</div>
            <v-row
              align="center"
              justify="center"
            >
              <v-col class="text-center">
                <v-card
                  class="mx-auto"
                  max-width="344"
                  min-width="168"
                  tile
                  elevation="1"
                >
                  <v-card-text>
                    <div class="headline mb-1">Temperature</div>
                      <div>&nbsp;</div>
                      <div>{{temperature}} C</div>
                    </v-card-text>
                  </v-card>
              </v-col>
              <v-col class="text-center">
                <v-card
                  class="mx-auto"
                  max-width="344"
                  min-width="168"
                  tile
                  elevation="1"
                >
                  <v-card-text>
                    <div class="headline mb-1">Humidity</div>
                    <div>&nbsp;</div>
                    <div>{{humidity}} %</div>
                  </v-card-text>
                </v-card>
              </v-col>
              <v-col class="text-center">
                <v-card
                  class="mx-auto"
                  max-width="344"
                  min-width="168"
                  tile
                  elevation="1"
                >
                  <v-card-text>
                    <div class="headline mb-1">PH</div>
                    <div>&nbsp;</div>
                    <div>{{ph}}</div>
                  </v-card-text>
                </v-card>
              </v-col>          
              <v-col class="text-center">
                <v-card
                  class="mx-auto"
                  max-width="344"
                  min-width="168"
                  tile
                  elevation="1"
                >
                  <v-card-text>
                    <div class="headline mb-1">Soil Moisture</div>
                    <div>&nbsp;</div>
                    <div>{{soil}} %</div>
                  </v-card-text>
                </v-card>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
        

        <v-row
          align="center"
          justify="center"
        >
          
        </v-row>

        <v-row
          align="center"
          justify="center"
        >
          <v-col class="text-center">
            <v-card
              class="mx-auto"
              width="fill"
              outlined
            >
              <v-card-title class="headline mb-1">Pesan Hari Ini</v-card-title>
              <v-card-subtitle align="left">Dummy</v-card-subtitle>
              <v-card-text>&nbsp;</v-card-text>
              <v-card-text>Pesan</v-card-text>
            </v-card>
          </v-col>
          
        </v-row>
      </v-container>
    </v-app>
</template>

<script>
export default {
    props: {
      source: String,
    },
    data: () => ({
      temperature: null,
      humidity: null,
      ph: null,
      soil: null,
    }),

    methods:{
        getDHT(){
          let uri="/api/currentdht";
          axios.get(uri).then(response => {
            this.temperature = response.data.temperature;
            this.humidity = response.data.humidity;
          })
        },
        getPh(){
          let uri="/api/currentph";
          axios.get(uri).then(response => {
            this.ph = response.data.ph;
          })
        },
        getSoil(){
          let uri="/api/currentsoil";
          axios.get(uri).then(response => {
            this.soil = response.data.soilMoisture;
          })
        },
    },
    
    created(){
        this.getDHT();
        this.getPh();
        this.getSoil();
    }
}
</script>