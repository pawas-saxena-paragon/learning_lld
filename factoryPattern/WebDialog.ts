import { IButton } from "./Button.interface";
import { Dialog } from "./Dialog";
import { WebButton } from "./WebButton";

export class WebDialog extends Dialog {
  createButton(): IButton {
    return new WebButton();
  }
}
