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
        ],
        team: {
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
        this.getTeam();
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
        getTeam: function () {
            axios.get('http://localhost:8080/teams', this.config)
                .then((response) => {
                    this.teams = response.data;
                })
                .catch((response) => {
                    console.log(error);
                });
        },
        createTeam: function () {
            var data = { title: this.team.name };
            axios.post('http://localhost:8080/teams', data, this.config)
                .then((response) => {
                    alert("Successfully created Team")
                    this.getTeam();
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