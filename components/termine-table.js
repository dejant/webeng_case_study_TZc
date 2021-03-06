// Instanzen
//
var app = new Vue({
    el: '#termineTable',
    data: {
        termine: [
            { id: 1, name: "1. Liga Spiel", beschreibung: "Kommt und heizt unseren Jungs ein.", start:"20.05.2019", ende:"20.05.2019", ort:"47.500897, 8.717852", map:"https://goo.gl/maps/8ytAGhb7WFebiqAY8"},
            { id: 2, name: "2. Liga Spiel", beschreibung: "Kommt und heizt unseren Jungs ein.", start:"22.05.2019", ende:"23.05.2019", ort:"47.500897, 8.717852", map:"https://goo.gl/maps/8ytAGhb7WFebiqAY8"},
            { id: 3, name: "Feierabendrunde", beschreibung: "Spielen zum Spass", start:"23.05.2019", ende:"24.05.2019", ort:"47.500897, 8.717852", map:"https://goo.gl/maps/8ytAGhb7WFebiqAY8"},
            { id: 4, name: "Trainingslager", beschreibung: "Sommer, Sonne, Fussball", start:"20.07.2019", ende:"22.07.2019", ort:"47.500897, 8.717852", map:"https://goo.gl/maps/8ytAGhb7WFebiqAY8"}
        ],
        termin: {
            id: null,
            name: null
        },
        config: {
            headers: {
                'x-apikey': '5b2e750b0c346a20d90a5dda'
            }
        }
    },
    mounted: function () {
        this.getTermin();
    },
    computed: {
        "columns": function columns() {
            if (this.termine.length == 0) {
                return [];
            }
            return Object.keys(this.termine[0])
        }
    },
    methods: {
        getTermin: function () {
            axios.get('http://localhost:8080/schedule', this.config)
                .then((response) => {
                    this.termine = response.data;
                })
                .catch((response) => {
                    console.log(error);
                });
        },
        createTermin: function () {
            var data = { title: this.termin.name };
            axios.post('http://localhost:8080/schedule', data, this.config)
                .then((response) => {
                    alert("Successfully created Termin")
                    this.getTermin();
                })
                .catch((response) => {
                    console.log(error);
                });
        },
        "sortTable": function sortTable(col) {
            if (this.sortColumn === col) {
                this.ascending = !this.ascending;
            } else {
                this.ascending = true;
                this.sortColumn = col;
            }

            var ascending = this.ascending;

            this.termine.sort(function (a, b) {
                if (a[col] > b[col]) {
                    return ascending ? 1 : -1
                } else if (a[col] < b[col]) {
                    return ascending ? -1 : 1
                }
                return 0;
            })
        }
        
    }
})