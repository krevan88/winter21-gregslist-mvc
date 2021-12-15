import { generateId } from "../Utils/generateId.js";

export class House {
  constructor(data) {
    this.id = generateId();
    this.bdrm = data.bdrm;
    this.bath = data.bath;
    this.sqFt = data.sqFt;
    this.year = data.year;
    this.price = data.price;
    this.description = data.description;
    this.imgUrl = data.imgUrl;
  }

  get Template() {
    return `
    <div class="col-md-4 p-4">
        <div class="bg-white shadow rounded">
        <img
            class="w-100 rounded-top"
            src="${this.imgUrl}"
            alt="house"
        />
        <div class="p-3">
            <p class="text-center"><b>${this.bdrm} Bed, ${this.bath} Bath - ${this.sqFt}sqft</b></p>
            <p class="m-0">
            ${this.description}
            </p>
        </div>
        <div
            class="p-3 d-flex justify-content-between align-items-center"
        >
            <p class="m-0">$${this.price}</p>
            <div class="d-flex align-items-center">
            <p class="m-0">Built: ${this.year} </p>
            </div>
            <i class="mdi mdi-delete"></i>
        </div>
        </div>
    </div>
    `;
  }
}
