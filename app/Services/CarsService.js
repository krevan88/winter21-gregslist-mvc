import { ProxyState } from "../AppState.js";
import { Car } from "../Models/Car.js";
import { cwAPI } from "./AxiosService.js";

class CarsService {
  async getAllCars() {
    const res = await cwAPI.get("cars");
    ProxyState.cars = res.data.map((c) => new Car(c));
  }

  async removeCar(id) {
    const res = await cwAPI.delete(`cars/${id}`);
    ProxyState.cars = ProxyState.cars.filter((c) => c.id !== id);
  }

  async createCar(carData) {
    const res = await cwAPI.post("cars", carData);
    ProxyState.cars = [new Car(res.data), ...ProxyState.cars];
  }

  async editCar(carData, id) {
    const res = await cwAPI.put(`cars/${id}`, carData);
    let editedCarIndex = ProxyState.cars.findIndex((c) => c.id == id);
    ProxyState.cars.splice(editedCarIndex, 1, new Car(res.data));
    ProxyState.cars = ProxyState.cars;
  }
}

export const carsService = new CarsService();
