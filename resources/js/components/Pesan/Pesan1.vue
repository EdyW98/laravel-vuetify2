<template>
    <div style="font-size:16px">
        <p>berdasarkan pemantauan data pada {{ dateMaxVal }}.
            Cek kembali pengairan air ke tanaman anda, jangan sampai media tanam tergenang air,<br>
            dikarenakan adanya tingkat intensitas air yang tinggi baik pada media tanam maupun udara<br>
            berikut ini rekap singkatnya:
        </p>
        <p>Temperature Tertinggi: {{ maxtempt }}&#8451; Pada Jam : {{ timeMaxVal }}</p>
        <p>Temperature Terendah: {{ mintempt }}&#8451; Pada Jam : {{ timeMaxVal }}</p>
        <p>Rata-rata Temperature: {{ AvgTemperature }} C</p>
        <p>Rata-Rata Kelembapan Udara: {{ AvgHumidity }}%</p>
        <p>Rata-Rata Kadar Air Media Tanam: {{ AvgSoil }}%</p>
        <p>Rata-Rata Ph Air: {{ AvgPh }}</p>
    </div>
</template>

<script>
   export default {    
    props: {
      source: String,
    },

    data: () => ({
        //data dari dht
        dateMaxVal: null,
        timeMaxVal: null,
        dateMinVal: null,
        timeMinVal: null,
        maxtempt: null,
        mintempt: null,
        //data dari iterasi
        date: null,
        AvgTemperature: null,
        AvgHumidity: null,
        AvgPh: null,
        AvgSoil: null,
        Data: [],
    }),

    methods:{
        async getAvgData(){
            let uri="/api/iterationval";
            axios.get(uri).then(response => {
                this.AvgTemperature = response.data.AvgTemperature;
                this.AvgPh = response.data.AvgPh;
                this.AvgSoil = response.data.AvgSoil;
                this.AvgHumidity = response.data.AvgHumidity;
                // this.date = new Date(response.data.created_at).toLocaleTimeString('id',dateOpsi);
            })
        },

        async getDhtMax(){
            const dateOpsi = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
            const timeOpsi = { hour: '2-digit', minute: '2-digit' };
            let uri="/api/maxdhtpast";
            
            axios.get(uri).then(response => {
                this.maxtempt = response.data.MaxTempt;
                this.timeMaxVal = new Date(response.data.dateCreate).toLocaleTimeString('id',timeOpsi);
                this.dateMaxVal = new Date(response.data.dateCreate).toLocaleDateString('id',dateOpsi);
            })
        },

        async getDhtMin(){
            const dateOpsi = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
            const timeOpsi = { hour: '2-digit', minute: '2-digit' };
            let uri="/api/mindhtpast";
            
            axios.get(uri).then(response => {
                this.mintempt = response.data.MInTempt;
                this.timeMinVal = new Date(response.data.dateCreate).toLocaleTimeString('id',timeOpsi);
                this.dateMinVal = new Date(response.data.dateCreate).toLocaleDateString('id',dateOpsi);
            })
        },
    },

    created(){
        this.getAvgData();
        this.getDhtMax();
        this.getDhtMin();
    }
  }
</script>