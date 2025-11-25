import * as fs from "fs";

const logFile = "user-activity.log";

export function logActivity(username: string, action: string) {
  const timestamp = new Date().toISOString();
  const logEntry = `${timestamp} - ${username}: ${action}\n`;

  fs.appendFile(logFile, logEntry, (err: any) => {
    if (err) {
      console.error("Error writing to log file:", err);
      return;
    }
    console.log("Log saved:", logEntry.trim());
  });
}
