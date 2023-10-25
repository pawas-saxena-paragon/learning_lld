import { IButton } from "./Button.interface";
import { Dialog } from "./Dialog";
import { WindowButton } from "./WindowButton";

// concreate creator 1
export class WindowDialog extends Dialog {
  createButton(): IButton {
    return new WindowButton();
  }
}
