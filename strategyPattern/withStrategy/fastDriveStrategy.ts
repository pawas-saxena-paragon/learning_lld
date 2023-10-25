import { DriveStrategy } from "./driveStrategy.interface";

export class FastDriveStrategy implements DriveStrategy {
  drive(): string {
    return "drive fast vehicle";
  }
}
