import { Dialog } from "./Dialog";
import { WebDialog } from "./WebDialog";
import { WindowDialog } from "./WindowDialog";

function getConfig(): "Web" | "Windows" {
  return Math.trunc(Math.random() * 10) % 2 === 0 ? "Web" : "Windows";
}

let dialog: Dialog;

const config = getConfig();
switch (config) {
  case "Web":
    dialog = new WebDialog();
    break;
  case "Windows":
    dialog = new WindowDialog();
    break;
}

console.log('config', config , dialog.createButton().render());
