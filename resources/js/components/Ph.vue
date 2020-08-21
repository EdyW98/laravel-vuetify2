<template>
  <v-app id="inspire">
      <v-container
        class="fill-height"
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
                  align="center"
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
                          <v-date-picker v-model="picker"></v-date-picker>
                        </v-col>
                      </v-row>
                      <v-row justify="center">
                        <v-col>
                          <v-text-field v-model="search" label="Date range" prepend-icon="mdi-calendar" readonly></v-text-field>
                        </v-col>
                      </v-row>
                      <v-card-actions>
                        <v-btn v-bind="attrs" v-on="on" text @click="openChart" :disabled="!disableButton">Graf</v-btn>
                        <v-btn text @click="setField">OK</v-btn>
                        <v-btn text @click="resetField">Cencel</v-btn>
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
                        :items="phsensor"
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
                  <apexchart width="750" type="line" :options="options" :series="series"></apexchart>
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
      drawer: null,
      page: 1,
      pageCount: 0,
      search: '',
      picker: new Date().toISOString().substr(0, 10),
      headers: [        
          { text: 'Tanggal', value: 'dateCreate', sortable: false },
          { text: 'Ph', value: 'ph', sortable: false },
      ],
      phsensor: [],
      series: [
        {
              name: "Ph",
              data: []
        },
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
          text: 'Graf Per Hari Sensor PH',
          align: 'Center'
        },
        xaxis: {
          categories: []
        }
      },
      ph: [],
      timeRec: [],      
    }),

    methods:{
        initData(){
          this.ph = [];
          this.timeRec = [];
        },

        getData(){
          let uri="/api/ph/";
          axios.get(uri).then(response => {
            this.phsensor = response.data;
          })
        },

        getDataBy(){
          let uri="/api/ph/" + this.picker;
          axios.get(uri).then((response) => {
            this.phsensor = response.data;
          })
        },

        getChart(){
          this.initData();
          let uri="/api/phchart/" + this.picker;
          axios.get(uri).then((response) => {
            console.log(response.data);
            response.data.ph.forEach(element => {
              this.ph.push(element.ph);
            });
            response.data.time.forEach(element => {
              this.timeRec.push(element.time);
            });

            this.series = [
              {
                data: this.ph
              },
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