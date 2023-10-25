import { DriveStrategy } from "./driveStrategy.interface";
import { VehicleS } from "./vehiceS";

export class SportsVehicleS extends VehicleS {
  constructor(driveStrategy: DriveStrategy) {
    super(driveStrategy);
  }
}
