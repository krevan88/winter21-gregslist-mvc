import { ProxyState } from "../AppState.js";
import { Car } from "../Models/Car.js";
import { cwAPI } from "./AxiosService.js";

class CarsService {
  async getAllCars() {
    const res = await cwAPI.get("cars");
    ProxyState.cars = res.data.map((c) => new Car(c));
  }

  removeCar(id) {
    ProxyState.cars = ProxyState.cars.filter((c) => c.id !== id);
  }
  createCar(carData) {
    const car = new Car(carData);
    ProxyState.cars = [...ProxyState.cars, car];
  }
}

export const carsService = new CarsService();
