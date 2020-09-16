<template>
  <v-app id="inspire">
    <v-container 
      fluid
    >
      <v-row
        class="mx-0"
        align="start"
        justify="center"
      >                  
        <v-col class="text-center">
          <v-card
            class="px-2 mx-auto"
            width="fill"
            max-height="750"
            min-height="500"
            outlined
          >
          <v-card-title>Graf Temperatur</v-card-title>
            <apexchart height="100%" type="line" :options="optionsTempt" :series="seriesTempt"></apexchart>
          </v-card>
        </v-col>
      </v-row>
      <v-spacer></v-spacer>
      <v-row
        align="start"
        justify="center"
      >                  
        <v-col class="text-center">
          <v-menu
            ref="menu"
            v-model="menu"
            :close-on-content-click="false"
            transition="scale-transition"
            offset-y
            min-width="290px"
          >
            <template v-slot:activator="{ on, attrs }">
            <v-text-field
              v-model="search"
              label="Cari"
              prepend-icon="mdi-calendar"
              readonly
              v-bind="attrs"
              v-on="on"
            ></v-text-field>
            </template>
            <v-date-picker v-model="date" no-title scrollable>
              <v-spacer></v-spacer>
              <v-btn text color="primary" @click="resetSearchTable">Reset</v-btn>
              <v-btn text color="primary" @click="setSearchTable">Set</v-btn>
            </v-date-picker>
          </v-menu>
          <v-card
            class="px-auto mx-auto"
            width="fill"
            outlined
          >
            <v-card-title>Tabel Temperature</v-card-title>
            <v-data-table
              :headers="headers"
              :items="data"
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
    </v-container>
  </v-app>
</template>

<script>
   export default {    
    props: {
      source: String,
    },

    data: () => ({
      page: 1,
      pageCount: 0,
      search: '',
      date: new Date().toISOString().substr(0, 10),
      menu: false,
      
      //Tabel Temperature
      headers: [        
          { text: 'Rata Rata', value: 'AvgTemperature', sortable: false },
          { text: 'Maksimal', value: 'MaxTemperature', sortable: false },
          { text: 'Minimal', value: 'MinTemperature', sortable: false },
          { text: 'Tanggal', value: 'created_at', sortable: false },
      ],
      data: [],

      //Chart Temperature
      seriesTempt: [
        {
              name: "Rata-Rata Temperatur",
              data: []
            },
            {
              name: "Temperatur Maksimal",
              data: []
            },
            {
              name: "Temperatur Minimal",
              data: []
            }
      ],
      optionsTempt: {
        chart: {
          id: 'vuechart-example',
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
    }),

    methods:{
      getDataTemperature(){
        let uri="/api/daily/";
        axios.get(uri).then(response => {
          console.log(response.data);
          this.data = response.data;
        })
      },

      getDataChartTemperature(){
        var data1 = [];
        var data2 = [];
        var data3 = [];
        var cat = [];

        let uri="/api/daily/";
        axios.get(uri).then(response => {
          console.log(response.data);
          console.log(response.data.length)
          response.data.forEach(element => {
            data1.push(element.AvgTemperature);
          });
          response.data.forEach(element => {
            data2.push(element.MaxTemperature);
          });
            response.data.forEach(element => {
            data3.push(element.MinTemperature);
          });

          this.seriesTempt = [
            {
              data: data1
            },
            {
              data: data2
            },
            {
              data: data3
            },
          ];
          this.optionsTempt = {
            xaxis: {
              categories: cat
            }
          }
        })
      },

      setSearchTable(){
        this.search = this.date;
        this.menu = false;
      },

      resetSearchTable(){
        this.search = '';
        this.menu = false;
      },
    },

    created(){
        this.getDataTemperature();
        this.getDataChartTemperature();
    }
  }
</script>