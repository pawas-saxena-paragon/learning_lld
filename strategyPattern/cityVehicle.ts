import { Vehicle } from "./vehicle";

export class CityVehicle extends Vehicle {
  drive(): string {
    return "drive slow vehicle";
  }
}
