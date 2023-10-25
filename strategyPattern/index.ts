import { CityVehicle } from "./cityVehicle";
import { CityVehicleS } from "./withStrategy/cityVehicleS";
import { SlowDriveStrategy } from "./withStrategy/slowDriveStrategy";

const cityVehicle = new CityVehicle();
const slowDriveStrategy = new SlowDriveStrategy();
const cityVehicleS = new CityVehicleS(slowDriveStrategy);
console.log(cityVehicle.drive());
console.log(cityVehicleS.drive());
