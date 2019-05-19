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
        ]
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