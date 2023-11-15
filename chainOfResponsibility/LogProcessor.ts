import { LogType } from "./shared";

export abstract class LogProcessor {
  constructor(private nextLogProcessor: LogProcessor | null) {}

  log(logLevel: LogType, message: string) {
    if (this.nextLogProcessor !== null) {
      this.nextLogProcessor.log(logLevel, message);
    }
  }
}
