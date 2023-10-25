import { MargeritaPizza } from "./MargeritaPizza";
import { MushroomDecorator } from "./MushroomDecorator";

const p1 = new MargeritaPizza();
const mushroomMargeritaPizza = new MushroomDecorator(p1);

console.log(mushroomMargeritaPizza.cost());
