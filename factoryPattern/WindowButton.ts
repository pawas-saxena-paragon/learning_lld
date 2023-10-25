import { IButton } from "./Button.interface";

export class WindowButton implements IButton {
  render() {
    console.log("render Window button");
  }

  click() {
    console.log("click Window Button");
  }
}
