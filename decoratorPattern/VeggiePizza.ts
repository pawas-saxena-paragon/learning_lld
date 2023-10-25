import { BasePizza } from "./BasePizza";

export class VeggiePizza extends BasePizza {
  cost(): number {
    return 150;
  }
}
