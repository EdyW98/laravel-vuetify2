<template>
    <div style="font-size:16px">
        <p>berdasarkan pemantauan data pada {{ date }}.
            Hari anda dapat melakukan pengaliran air ke tanaman sekitar jam {{ time }}<br>
            berikut ini rekap singkatnya:
        </p>
        <p>Temperature Tertinggi: {{ maxtempt }} Pada Jam : {{ time }}</p>
        <p>Rata-rata Temperature: {{ AvgTemperature }} C</p>
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
        // dateOpsi: { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' },
        // timeOpsi: { hour: '2-digit', minute: '2-digit' },
        date: null,
        time: null,
        maxtempt: null,
        AvgTemperature: null,
        AvgPh: null,
        AvgSoil: null,
        Data: [],
    }),

    methods:{
        getAvgData(){
            let uri="/api/iterationval";
            axios.get(uri).then(response => {
                this.AvgTemperature = response.data.AvgTemperature;
                this.AvgPh = response.data.AvgPh;
                this.AvgSoil = response.data.AvgSoil;
                // this.date = new Date(response.data.created_at).toLocaleTimeString('id',dateOpsi);
            })
        },

        getDhtVal(){
            const dateOpsi = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
            const timeOpsi = { hour: '2-digit', minute: '2-digit' };
            let uri="/api/maxdhtpast";

            axios.get(uri).then(response => {
                this.maxtempt = response.data.temperature;
                this.time = new Date(response.data.dateCreate).toLocaleTimeString('id',timeOpsi);
                this.date = new Date(response.data.dateCreate).toLocaleDateString('id',dateOpsi);

                console.log(this.date);
                console.log(this.time);
            })
        },
    },

    created(){
        this.getAvgData();
        this.getDhtVal();
    }
  }
</script>