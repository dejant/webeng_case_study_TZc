// Instanzen
//
var app = new Vue({
    el: '#raeumeTable',
    data: {
        raeume: [
            { id: 1, name: "Mini-Fussballplatz", standort:'47.498272, 8.724794', flaeche:'24m2'},
            { id: 2, name: "Fussballplatz", standort:'47.498272, 8.724794', flaeche:'84m2'},
            { id: 3, name: "Micro-Fussballplatz", standort:'47.498272, 8.724794', flaeche:'8m2'},
            { id: 4, name: "XXL-Fussballplatz", standort:'47.498272, 8.724794', flaeche:'100m2'}
        ],
        raum: {
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
        this.getRaum();
    },
    computed: {
        "columns": function columns() {
            if (this.raeume.length == 0) {
                return [];
            }
            return Object.keys(this.raeume[0])
        }
    },
    methods: {
        getRaum: function () {
            axios.get('http://localhost:8080/room', this.config)
                .then((response) => {
                    this.raeume = response.data;
                })
                .catch((response) => {
                    console.log(error);
                });
        },
        createRaum: function () {
            var data = { title: this.raum.name };
            axios.post('http://localhost:8080/room', data, this.config)
                .then((response) => {
                    alert("Successfully created Raum")
                    this.getRaum();
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

            this.raeume.sort(function (a, b) {
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