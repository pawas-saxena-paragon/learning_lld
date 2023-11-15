import { LogProcessor } from "./LogProcessor";
import { LogType } from "./shared";

export class DebugLogProcessor extends LogProcessor {
  log(logLevel: LogType, message: string): void {
    if (logLevel === LogType.DEBUG) {
      console.log('Debug:', message);
    } else {
      super.log(logLevel, message);
    }
  }
}
