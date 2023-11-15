import { DebugLogProcessor } from "./DebugLogProcessor";
import { ErrorLogProcessor } from "./ErrorLogProcessor";
import { InfoLogProcessor } from "./InfoLogProcessor";
import { LogType } from "./shared";

const logProcessor = new InfoLogProcessor(
  new DebugLogProcessor(new ErrorLogProcessor(null))
);

logProcessor.log(LogType.ERROR, "exception happened");
logProcessor.log(LogType.DEBUG, "need to debug this");
logProcessor.log(LogType.INFO, "just some info");
