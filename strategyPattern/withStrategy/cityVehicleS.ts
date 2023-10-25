import { DriveStrategy } from "./driveStrategy.interface";
import { VehicleS } from "./vehiceS";

export class CityVehicleS extends VehicleS {
  constructor(driveStategey: DriveStrategy) {
    super(driveStategey);
  }
}
