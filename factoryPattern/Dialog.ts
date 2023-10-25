//creator

import { IButton } from "./Button.interface";

export abstract class Dialog {
  render() {
    console.log("rednders the dialog");
  }

  abstract createButton(): IButton;
}
