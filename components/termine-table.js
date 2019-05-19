// Instanzen
//
var app = new Vue({
    el: '#teamsTable',
    data: {
        teams: [
            { id: 1, name: "Torschützen", anzahl:'24'},
            { id: 2, name: "Wegen dem Bier", anzahl:'12'},
            { id: 3, name: "Nichtskönner", anzahl:'13'},
            { id: 4, name: "1. Liga", anzahl:'18'},
            { id: 5, name: "GCZ Rasenblockierer", anzahl:'19'},
            { id: 6, name: "Feierabendrunde", anzahl:'11'}
        ]
    },
    computed: {
        "columns": function columns() {
            if (this.teams.length == 0) {
                return [];
            }
            return Object.keys(this.teams[0])
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

            this.teams.sort(function (a, b) {
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