import { logActivity } from "./logger";

function login(username: string, password: string) {
  try {
    logActivity(username, "login function triggered");

    if (username === "sudha" && password === "123") {
      logActivity(username, "credentials are validated");
    } else {
      logActivity(username, "invalid user");
    }
  } catch (e) {
    logActivity(username, "Exception occurred: " + e);
  }
}

login("sudha", "123");
login("john", "999");
