import { generateId } from "../utils/GenerateId.js"




export class home {
    constructor(data) {
        this.id = data.id || generateId()
        this.year = data.year
        this.name = data.name
        this.bedrooms = data.bedrooms
        this.bathrooms = data.bathrooms
        this.sqft = data.sqft
        this.price = data.price
        this.description = data.description
        this.imgUrl = data.imgUrl
    }

    get HomeCard() {
        return `
        <div class="col-6 col-md-4">
            <div class="card">
              <img class="card-img-top"
                src="${this.imgUrl}"
                alt="">
              <div class="card-body">
                <h3 class="card-title text-center text-success">${this.year} ${this.bedrooms} ${this.year}</h3>
                <p class="card-text">${this.sqft} ${this.price}
                <i class="mdi mdi-engine"></i><i class="mdi mdi-${this.description}"></i>
                </p>
                <p class="bg-success p-2 rounded text-light fw-bold text-end">$${this.price}</p>
                <button onclick="app.HomeController.deleteHome('${this.id}')" class="btn btn-danger"><i class="mdi mdi-delete"></i></button>
              </div>
            </div>
          </div>
        `
    }





}

