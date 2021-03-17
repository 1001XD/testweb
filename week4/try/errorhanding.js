function criticalCode() {
  throw "error";
}

function logError(theException) {
  console.log(theException);
}

console.log("\n******Try...Catch*******\n");

try {
} catch (ex) {
  console.log("Got an error");
  logError(ex);
}

console.log("\n********Throw...Try...Catch*********\n");

try {
  throw "An exception !!!!!";
} catch (ex) {
  console.log("Got an error");
  logError(ex);
}

// try chach finally
try {
  criticalCode();
} catch (ex) {
  console.log("Got an error");
  logError(ex);
} finally {
  console.log("cod that always will run");
}

function hello() {
  console.log("\n******Throwing Exceptions*******\n");
}
