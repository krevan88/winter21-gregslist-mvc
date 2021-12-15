import { Car } from "./Models/Car.js";
import { House } from "./Models/House.js";
import { EventEmitter } from "./Utils/EventEmitter.js";
import { isValidProp } from "./Utils/isValidProp.js";

class AppState extends EventEmitter {
  /** @type {import('./Models/Car').Car[]} */
  cars = [
    new Car({
      make: "ford",
      model: "focus",
      year: 2008,
      price: 7500,
      description: "Like new only 100,000 miles",
      color: "#91e880",
      imgUrl:
        "https://i.pinimg.com/originals/c1/d1/a8/c1d1a890282f877de2ef09cd53131cdb.jpg",
    }),
    new Car({
      make: "ford",
      model: "taurus wagon",
      year: 1989,
      price: 1000,
      description: "Great Family vehicle for long vacations",
      color: "#93776a",
      imgUrl:
        "https://cdn.motor1.com/images/mgl/xWqly/s3/home-built-christmas-vacation-display-includes-movie-s-epic-vehicles.jpg",
    }),
    new Car({
      make: "Elven",
      model: "Sleigh",
      year: 1700,
      price: 900000,
      description: "It only works once a year, and has 8 horsepower",
      color: "#f44545",
      imgUrl:
        "https://cdn.shopify.com/s/files/1/1319/9267/products/metal-sleigh_1_1024x1024.jpg",
    }),
  ];
  // NOTE HOUSES HERE
  /** @type {import('./Models/House').House[]} */
  houses = [
    new House({
      bdrm: 4,
      bath: 2,
      sqFt: 1300,
      year: 1989,
      price: 375000,
      description: "Good house for medium sized family.",
      imgUrl:
        "https://images.craigslist.org/00K0K_dHMizNXlV0Tz_0uY0kG_600x450.jpg",
    }),
    new House({
      bdrm: 3,
      bath: 1,
      sqFt: 1000,
      year: 1974,
      price: 325000,
      description: "Smaller families will love it here.",
      imgUrl:
        "https://images.craigslist.org/00p0p_eFp8u1ff2O0z_0t20CI_600x450.jpg",
    }),
    new House({
      bdrm: 6,
      bath: 4,
      sqFt: 2400,
      year: 2004,
      price: 540000,
      description: "Large families living in luxury.",
      imgUrl:
        "https://images.craigslist.org/00C0C_kQ4XvtKvQ46z_0x20m1_1200x900.jpg",
    }),
  ];
}

export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop);
    return target[prop];
  },
  set(target, prop, value) {
    isValidProp(target, prop);
    target[prop] = value;
    target.emit(prop, value);
    return true;
  },
});
