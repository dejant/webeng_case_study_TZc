// Instanzen
//
var app = new Vue({
    el: '#materialienTable',
    data: {
        materialien: [
            { id: 1, name: "Fussbälle", beschreibung: "Bälle die mit dem Fuss getreten werden.", anzahl:'24'},
            { id: 2, name: "Tennisbälle", beschreibung: "Werden bei uns selten gebraucht", anzahl:'10'},
            { id: 3, name: "Medinzinbälle", beschreibung: "Für das schwere Training", anzahl:'8'},
            { id: 4, name: "Trickots", beschreibung: "Um unsere Mannschaft zu erkennen.", anzahl:'30'}
        ]
    },
    computed: {
        "columns": function columns() {
            if (this.materialien.length == 0) {
                return [];
            }
            return Object.keys(this.materialien[0])
        }
    },
    methods: {
        "sortTable": function sortTable(col) {
            if (this.sortColumn === col) {
                this.ascending = !this.ascending;
            } else {
                this.ascending = true;
                this.sortColumn = col;
            }

            var ascending = this.ascending;

            this.materialien.sort(function (a, b) {
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