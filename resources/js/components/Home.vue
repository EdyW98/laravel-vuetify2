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
                    <div>{{temperature}}&#8451;</div>
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
        <v-col>
          <v-card
            class="mx-auto"
            max-width="800"
            outlined
            align="center"
          >
          <v-list-item-title class="headline mb-1">Sakelar Pompa Air</v-list-item-title>
            <v-row justify="center">
              <v-card
                class="my-3 mx-6 pa-1"
                outlined
                tile
              >
                <v-btn
                  max-height="200"
                  min-height="120"
                  max-width="200"
                  min-width="120"
                  tile
                  color="primary"
                  @click="onButton"
                >
                  On
                </v-btn>
              </v-card>
              <v-card
                class="my-3 mx-6 pa-1"
                outlined
                tile
              >
                <v-btn
                  max-height="200"
                  min-height="120"
                  max-width="200"
                  min-width="120"
                  tile
                  color="error"
                  @click="offButton"
                >
                  Off
                </v-btn>
              </v-card>
            </v-row>
          </v-card>
        </v-col>
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
            <v-card-subtitle align="left">{{ new Date().toLocaleDateString('id',dateOpsi) }}</v-card-subtitle>
            <v-card-text style="font-size:16px; color:black">
              Jangan lupa untuk mengecek hasil pencatatan data sensor dan kompa air pada akuaponik.<br>
              Klik tombol dibawah untuk mengecek hasil pengamatan cepat dari sistem
            </v-card-text>
            <v-tabs
              v-model="tab"
              centered
            >
              <v-tab
                :href="`#tab-${link}`"
              >
              Klik Disini!
              </v-tab>

              <!-- menu 1 -->
              <v-tab-item value="tab-0">
                <v-row v-if="tab === 'tab-0'">
                  <v-col>
                    <pesan-pertama></pesan-pertama>
                  </v-col>
                </v-row>
              </v-tab-item>

              <!-- menu 2 -->
              <v-tab-item value="tab-1">
                <v-row v-if="tab === 'tab-1'">
                  <v-col>
                    <pesan-kedua></pesan-kedua>
                  </v-col>
                </v-row>
              </v-tab-item>
            </v-tabs>
          </v-card>
        </v-col>          
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
  import PesanPertama from './Pesan/Pesan1'
  import PesanKedua from './Pesan/Pesan2'

  export default {
    components:{
      PesanPertama,
      PesanKedua
    },

    props: {
      source: String,
    },

    data: () => ({
      dateOpsi: { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' },
      link: null,
      tab: null,
      temperature: null,
      humidity: null,
      ph: null,
      soil: null,
      bobotC1: [0.2,0.1,0.2,0.5], //merupakan kriteria untuk menampilkan pesan keperluan melakukan pengairan air ke tanaman [tpemt,humid,ph,soil]
      iterasi: [],
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

      async getDataIterasi(){
        let uri="/api/iterationval";
        await axios.get(uri).then(response => {
          this.iterasi =  response.data;
        })
      },

      async kalkulasiNilai(){
        var kriteria = [];
        var normalisasi = [];
        var saw = 0;

        let uri="/api/critariaval";
        await axios.get(uri).then(response => {
          //temperature Max val
          kriteria.push(response.data.MaxTemperature);
          //humidity Min Val
          kriteria.push(response.data.MinHumidity);
          //ph Max Val
          kriteria.push(response.data.MaxPh);
          //soil Min Val
          kriteria.push(response.data.MinSoil);
          
          // Temperature Rumus Max (X/W)
          normalisasi.push(this.iterasi.AvgTemperature / kriteria[0]);
          // Humidity Rumus Min (W/X)
          normalisasi.push(kriteria[1] / this.iterasi.AvgHumidity);
          // // Ph Rumus Max (X/W)
          normalisasi.push(this.iterasi.AvgPh / kriteria[2]);
          // // Soil Rumus Min (W/X)
          normalisasi.push(kriteria[3] / this.iterasi.AvgSoil);
          console.log(normalisasi);

          //perhitungan normalisasi
          for(var i=0;i<normalisasi.length;i++){
            saw = saw + normalisasi[i] * this.bobotC1[i];
          };
          console.log(saw);

          if(saw >= 0.95){
            this.link = 1;
          }
          else{
            this.link = 0;
          };
        })        
      },

      onButton(){
        axios.put('api/updatesettings/1',{
          settingsValue:1
        })
        .then(response => {
          console.log(response);
        })
      },

      offButton(){
        axios.put('api/updatesettings/1',{
          settingsValue:0
        })
        .then(response => {
          console.log(response);
        })
      }
    },
    
    async created(){
        this.getDHT();
        this.getPh();
        this.getSoil();
        await this.getDataIterasi();
        await this.kalkulasiNilai();
    }
}
</script>