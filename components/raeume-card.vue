Vue.component("raeume-card", {
    data: function () {
        return {
            raum: {
                name: "Sportplatz",
                place: "Winterthur",
                area: "100m2" 
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
                                <td>{{ raum.name }}</td>
                            </tr>
                            <tr>
                                <td>Ort</td>
                                <td>{{ raum.place }}</td>
                            </tr>
                            <tr>
                                <td>Fläche</td>
                                <td>{{ raum.area }}</td>
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
    el: '#raeume',
    data: {
    }
})