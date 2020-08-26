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
                        <v-card-title>Graf Kelembapan Udara</v-card-title>
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
                    <v-card
                        class="px-auto mx-auto"
                        width="fill"
                        outlined
                    >
                        <v-card-title>Tabel Kelembapan Udara</v-card-title>
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
      
      //Tabel Kelembapan Udara
      headers: [        
          { text: 'Rata Rata', value: 'AvgHumidity', sortable: false },
          { text: 'Tertinggi', value: 'MaxHumidity', sortable: false },
          { text: 'Terendah', value: 'MinHumidity', sortable: false },
      ],
      data: [],

      //Chart Kelembapan Udara
      seriesTempt: [
        {
              name: "Rata-Rata Kelembapan Udara",
              data: []
            },
            {
              name: "Kelembapan Udara Tertinggi",
              data: []
            },
            {
              name: "Kelembapan Udara Terendah",
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
          text: 'Graf Kelembapan Udara',
          align: 'Center'
        },
        xaxis: {
          categories: []
        }
      },
    }),

    methods:{
      getDataTest2(){
        let uri="/api/daily/";
        axios.get(uri).then(response => {
          console.log(response.data);
          this.data = response.data;
        })
      },

      getDataTest(){
        var data1 = [];
        var data2 = [];
        var data3 = [];
        var cat = [];

        let uri="/api/daily/";
        axios.get(uri).then(response => {
          console.log(response.data);
          response.data.forEach(element => {
            data1.push(element.AvgHumidity);
          });
          response.data.forEach(element => {
            data2.push(element.MaxHumidity);
          });
            response.data.forEach(element => {
            data3.push(element.MinHumidity);
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
    },

    created(){
        this.getDataTest();
        this.getDataTest2();
    }
  }
</script>