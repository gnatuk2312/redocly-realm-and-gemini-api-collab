import { exec } from "child_process";
import { writeFileSync, readFileSync } from "fs";

import { COMMAND, YAML_FILE_PATH } from "./constants";
import { GeminiAPIService } from "./services/gemini-api/gemini-api.service";

// const yamlFileContent = readFileSync(YAML_FILE_PATH, "utf-8");

// const childProcess = exec(COMMAND, (error, standardOutput, standardError) => {
//   const errorText = error ? `Error: ${error.message}\n` : "";

//   const standardErrorText = standardError
//     ? `Standard Error: ${standardError}\n`
//     : "";

//   const logContent = `${errorText}${standardErrorText}`;

//   if (logContent.trim()) {
//     writeFileSync("error-log.txt", logContent, "utf-8");
//   }
// });

// childProcess.stdout?.pipe(process.stdout);
// childProcess.stderr?.pipe(process.stderr);

// GeminiAPIService.askAI(`I've got the following .yaml file: \n\n ${yamlFileContent}.
//   \n There is an error, which I receive from my compiler:
//   \n ${errorText}.
//   \n\n Check out this .yaml file, fix the errors and return only the content of correct .yaml file.
//   \n No explanation needed!`);

GeminiAPIService.askAI("Name 5 car brands").then((solution) =>
  console.log(solution)
);
