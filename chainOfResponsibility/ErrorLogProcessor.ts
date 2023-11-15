import { LogProcessor } from "./LogProcessor";
import { LogType } from "./shared";

export class ErrorLogProcessor extends LogProcessor {
  log(logLevel: LogType, message: string): void {
    if (logLevel === LogType.ERROR) {
      console.log("Error:", message);
    } else {
      super.log(logLevel, message);
    }
  }
}
