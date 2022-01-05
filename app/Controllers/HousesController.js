import { ProxyState } from "../AppState.js";
import { housesService } from "../Services/HousesService.js";

function _drawHouses() {
  const houses = ProxyState.houses;
  let template = "";
  houses.forEach((h) => (template += h.Template));
  document.getElementById("listings").innerHTML = template;
}

export class HousesController {
  constructor() {
    housesService.getAllHouses();
  }

  drawHouses() {
    _drawHouses();
  }
}
