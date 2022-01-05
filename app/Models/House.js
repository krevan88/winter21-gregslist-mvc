export class House {
  constructor(data) {
    this.id = data.id;
    this.bdrm = data.bedrooms || 0;
    this.bath = data.bathrooms || 0;
    this.levels = data.levels || 0;
    this.year = data.year || 0;
    this.price = data.price || 0;
    this.description = data.description || "";
    this.imgUrl = data.imgUrl || "";
  }

  get Template() {
    return `
    <div class="col-md-4 p-4">
        <div class="bg-white shadow rounded">
        <img class="w-100 rounded-top" src="${this.imgUrl}" alt="house">
        <div class="p-3">
            <p class="text-center"><b>${this.bdrm} Bed, ${this.bath} Bath - ${this.levels} Floors</b></p>
            <p class="m-0">
            ${this.description}
            </p>
        </div>
        <div class="p-3 d-flex justify-content-between align-items-center">
            <p class="m-0">$${this.price}</p>
            <div class="d-flex align-items-center">
            <p class="m-0">Built: ${this.year}</p>
            </div>
          <i class="mdi mdi-pencil selectable" onclick="app.carsController.editCar('${this.id}')"></i>
          <i class="mdi mdi-delete selectable" onclick="app.carsController.removeCar('${this.id}')"></i>
        </div>
        </div>
    </div>
    `;
  }
}
