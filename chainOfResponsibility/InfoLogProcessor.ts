import { LogProcessor } from "./LogProcessor";
import { LogType } from "./shared";

export class InfoLogProcessor extends LogProcessor {
  log(logLevel: LogType, message: string): void {
    if (logLevel === LogType.INFO) {
      console.log('Info:', message);
    } else {
      super.log(logLevel, message);
    }
  }
}
