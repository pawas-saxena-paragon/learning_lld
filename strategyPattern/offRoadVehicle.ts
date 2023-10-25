import { Vehicle } from "./vehicle";

export class OffRoadVehicle extends Vehicle {
  drive(): string {
    return "drive fast vehicle"; // code duplicated with the sports Vehicle
  }
}
