class VehicleS {
  driveStrategy: DriveStrategy;

  constructor(driveStrategy: DriveStrategy) {
    this.driveStrategy = driveStrategy;
  }

  drive(): string {
    return this.driveStrategy.drive();
  }
}
