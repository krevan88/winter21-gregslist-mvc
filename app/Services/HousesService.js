import { ProxyState } from "../AppState.js";
import { House } from "../Models/House.js";
import { cwAPI } from "./AxiosService.js";

class HousesService {
  async getAllHouses() {
    const res = await cwAPI.get("houses");
    ProxyState.houses = res.data.map((h) => new House(h));
  }
}

export const housesService = new HousesService();
