import { DriveStrategy } from "./driveStrategy.interface";

export class SlowDriveStrategy implements DriveStrategy {
  drive(): string {
    return "drive slow vehicle";
  }
}
