import { IButton } from "./Button.interface";

export class WebButton implements IButton {
  render() {
    console.log("render Web button");
  }

  click() {
    console.log("click Web Button");
  }
}
