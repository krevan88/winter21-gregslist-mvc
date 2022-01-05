export class Job {
  constructor(data) {
    this.id = data.id;
    this.title = data.title || "";
    this.company = data.company || "";
    this.rate = data.rate || "";
    this.hours = data.hours || "";
    this.description = data.description || "";
  }

  get template() {
    return `
    <div class="col-md-4 p-4">
      <div class="bg-white shadow rounded">
        <div class="p-3">
          <p class="text-center uppercase"><b>${this.title} - ${this.company}</b></p>
          <p class="m-0">${this.description}</p>
        </div>
        <div class="p-3 d-flex justify-content-between align-items-center">
          <p class="m-0">$${this.rate} / ${this.hours}</p>
          <div class="d-flex align-items-center">
          </div>
          <i class="mdi mdi-pencil selectable" onclick="app.carsController.editCar('${this.id}')"></i>
          <i class="mdi mdi-delete selectable" onclick="app.carsController.removeCar('${this.id}')"></i>
        </div>
      </div>
    </div>
    `;
  }
}
