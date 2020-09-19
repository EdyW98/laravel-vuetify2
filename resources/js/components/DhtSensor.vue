<template>
  <v-app id="inspire">
    <v-container
      fluid
    >        
      <v-row>
        <v-col>
          <v-dialog
            v-model="dialog"
            persistent
            width="800"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-row
                align="start"
                justify="center"
              >
                <v-col class="text-center" lg="3">
                  <v-card
                    class="mx-auto"
                    max-width="350"
                    outlined
                  >
                    <v-row justify="center">
                      <v-col>
                        <v-date-picker v-model="picker" no-title scrollable></v-date-picker>
                      </v-col>
                    </v-row>
                    <v-row justify="center">
                      <v-col>
                        <v-text-field v-model="search" label="Date" prepend-icon="mdi-calendar" readonly></v-text-field>
                      </v-col>
                    </v-row>
                    <v-card-actions>
                      <v-btn v-bind="attrs" v-on="on" text @click="openChart" :disabled="!disableButton">Graf</v-btn>
                      <v-btn text @click="setField">OK</v-btn>
                      <v-btn text @click="resetField">Cancel</v-btn>
                    </v-card-actions>
                  </v-card>
                </v-col>
                <v-col class="text-center">
                  <v-card
                    class="mx-auto"
                    width="fill"
                    outlined
                  >
                    <v-data-table
                      :headers="headers"
                      :items="dht"
                      :page.sync="page"
                      :items-per-page="15"
                      :search="search"
                      hide-default-footer
                      class="elevation-1"
                      @page-count="pageCount = $event"
                    >
                    </v-data-table>
                    <div class="text-center pt-2">
                      <v-pagination v-model="page" :length="pageCount" :total-visible="7"></v-pagination>
                    </div>
                  </v-card>
                </v-col>
              </v-row>
            </template>

            <v-card
              class="mx-auto"
              width="fill"
              outlined
            >
              <div align="center">
                <apexchart type="line" :options="options" :series="series"></apexchart>
              </div>
              <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="blue darken-1" text @click="closeChart">Close</v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
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
      disableButton: false,
      dialog: false,
      page: 1,
      pageCount: 0,
      search: '',
      picker: new Date().toISOString().substr(0, 10),
      headers: [        
          { text: 'Tanggal', value: 'dateCreate', sortable: false },
          { text: 'Temperature (c)', value: 'temperature', sortable: false },
          { text: 'Humidity (%)', value: 'humidity', sortable: false },
      ],
      head: [
        { text: 'test', value: 'temperature', sortable: false },
      ],
      dht: [],
      series: [
        {
              name: "Temperature",
              data: []
            },
            {
              name: "Humidity",
              data: []
            }
      ],
      options: {
        chart: {
          id: 'vuechart-example',
          height: 500,          
          toolbar: {
            show: false
          },          
          zoom: {
            enabled: false
          },
        },
        title: {
          text: 'Graf Per Hari Sensor DHT',
          align: 'Center'
        },
        xaxis: {
          categories: []
        }
      },
      temperature: [],
      humidity: [],
      timeRec: [],      
    }),

    methods:{
        initData(){
          this.temperature = [];
          this.humidity = [];
          this.timeRec = [];
        },

        getData(){
          let uri="/api/dht/";
          axios.get(uri).then(response => {
            this.dht = response.data;
          })
        },

        getDataBy(){
          let uri="/api/dht/" + this.picker;
          axios.get(uri).then((response) => {
            this.dht = response.data;
          })
        },

        getChart(){
          this.initData();
          let uri="/api/dhtchart/" + this.picker;
          axios.get(uri).then((response) => {
            response.data.temperature.forEach(element => {
              this.temperature.push(element.temperature);
            });
            response.data.humidity.forEach(element => {
              this.humidity.push(element.humidity);
            });
            response.data.time.forEach(element => {
              this.timeRec.push(element.time);
            });

            this.series = [
              {
                data: this.temperature
              },
              {
                data: this.humidity
              }
            ];
            this.options = {
              xaxis: {
                categories: this.timeRec
              }
            }
          });
        },

        initChart(){
          this.series = [
            {
              data: [],
            },
            {
              data: [],
            }
          ];
          this.options = {
          xaxis: {
              categories: []
            }
          }
        },

        openChart(){
          this.getChart();
          this.dialog = true;
        },
        
        closeChart(){
          this.initChart();
          this.dialog = false;
        },

        setField(){
          this.search = this.picker;
          this.getDataBy();
          this.disableButton = true;
        },

        resetField(){
          this.search = null;
          this.disableButton = false;
          this.getData();
        },
    },
    created(){
        this.getData();
    }
  }
</script>