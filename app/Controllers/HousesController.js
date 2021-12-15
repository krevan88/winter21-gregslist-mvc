import { ProxyState } from "../AppState.js";

function _drawHouses() {
  const houses = ProxyState.houses;
  let template = "";
  houses.forEach((h) => (template += h.Template));
  document.getElementById("listings").innerHTML = template;
}

export class HousesController {
  constructor() {}

  drawHouses() {
    _drawHouses();
  }
}
