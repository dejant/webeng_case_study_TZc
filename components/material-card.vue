Vue.component("material-card", {
    data: function () {
        return {
            material: {
                name: "Fussball",
                description: "adidas",
                amount: "80" 
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
                                <td>{{ material.name }}</td>
                            </tr>
                            <tr>
                                <td>Ort</td>
                                <td>{{ material.description }}</td>
                            </tr>
                            <tr>
                                <td>Fläche</td>
                                <td>{{ material.amount }}</td>
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
    el: '#material',
    data: {
    }
})