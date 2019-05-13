Vue.component("mitglieder-liste", {
    data: function () {
        return {
            user: {
                name: "Tomic",
                lastName: "Dejan",
                birthdate: "13.11.1990",
                team: "Herren 1",
                type: "Spieler"
            }
        }
    },
    template: `
        <div class="card" style="width: 16rem;">
            <b-card-img img-src="icons\portrait-solid.svg" class="card-img-top"></b-card-img>
            <div class="card-body">
                    <table class="table table-sm">
                        <tbody>
                            <tr>
                                <td>NAME</td>
                                <td>{{ user.name }} {{ user.lastName }}</td>
                            </tr>
                            <tr>
                                <td>GEBURTSDATUM</td>
                                <td>{{ user.birthdate }}</td>
                            </tr>
                            <tr>
                                <td>TEAM</td>
                                <td>{{ user.team }}</td>
                            </tr>
                            <tr>
                                <td>TYP</td>
                                <td>{{ user.type }}</td>
                            </tr>
                        </tbody>
                    </table>
                <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                        <button type="button" class="btn btn-sm btn-outline-secondary">DETAILS</button>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="defaultCheck1">
                        <label class="form-check-label" for="defaultCheck1">
                        </label>
                    </div>
                </div>
            </div>
        </div>`
})

var app = new Vue({
    el: '#mitglieder',
    data: {
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