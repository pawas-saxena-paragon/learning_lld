import { BasePizza } from "./BasePizza";
import { ToppingsDecorator } from "./ToppingsDecorator";

export class ExtraCheeseDecorator extends ToppingsDecorator {
  pizza: BasePizza;
  constructor(pizza: BasePizza) {
    super();
    this.pizza = pizza;
  }

  cost(): number {
    return this.pizza.cost() + 70;
  }
}
