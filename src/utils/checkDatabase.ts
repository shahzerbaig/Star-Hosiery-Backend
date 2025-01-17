import fs from "fs";
import path from "path";

export function checkDatabase(): { message: string; present: boolean } {
  const filePath = path.resolve(__dirname, "../../../starhosiery.db");

  if (fs.existsSync(filePath)) {
    return { message: "Database Present", present: true };
  } else {
    return { message: "Database Not Found", present: false };
  }
}
