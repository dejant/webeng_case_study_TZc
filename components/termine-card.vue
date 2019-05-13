Vue.component("termine-card", {
    data: function () {
        return {
            termin: {
                name: "Turnier",
                description: "Junioren 1",
                start: "01.05.2019",
                end: "01.05.2019",
                place: "Zürich",
                map: "https://goo.gl/maps/JJ3JNC1GtCt",
            }
        }
    },
    template: `
        <div class="card" style="width: 16rem;">
            <img src="icons\\portrait-solid.svg" class="card-img-top">
            <div class="card-body">
                    <table class="table table-sm">
                        <tbody>
                            <tr>
                                <td>NAME</td>
                                <td>{{ termin.name }}</td>
                            </tr>
                            <tr>
                                <td>BESCHREIBUNG</td>
                                <td>{{ termin.description }}</td>
                            </tr>
                            <tr>
                                <td>START</td>
                                <td>{{ termin.start }}</td>
                            </tr>
                            <tr>
                                <td>ENDE</td>
                                <td>{{ termin.end }}</td>
                            </tr>
                            <tr>
                                <td>ORT</td>
                                <td>{{ termin.place }}</td>
                            </tr>
                            <tr>
                                <td>MAP</td>
                                <td>
                                <a target="_blank" href="https://goo.gl/maps/JJ3JNC1GtCt">
                                    <i class="fas fa-sign-out-alt"></i>
                                </a>
                            </td>
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
    el: '#termine',
    data: {
    }
})