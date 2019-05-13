var app = new Vue({
    el: '#mitglieder',
    data: {
        user: {
            name: "Tomic",
            lastName: "Dejan",
            birthdate: "13.11.1990",
            team: "Herren 1",
            type: "Spieler"
        }

    },
    methods: {
        sayHello: function () {
            alert("Hello" + this.user.name)
        }
    }
})

var app = new Vue({
    el: '#teams',
    data: {
        team: {
            name: "Herren 1",
            members: "22"
        }

    }
})