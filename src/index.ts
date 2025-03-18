import { writeFileSync, readFileSync } from "fs";

import { COMMAND, YAML_FILE_PATH } from "../src/constants/common.constants";
import { GeminiAPIService } from "./services/gemini-api/gemini-api.service";
import { RedoclyRealmService } from "./services/redocly-realm/redocly-realm.service";

const main = async () => {
  while (true) {
    try {
      console.log("Running Redocly Realm command...");
      const errorMessage = await RedoclyRealmService.runCommand(COMMAND);

      console.log("Asking GeminiAI for a solution...");
      const yamlFileContent = readFileSync(YAML_FILE_PATH, "utf-8");

      const solution = await GeminiAPIService.askAI(
        `I've got the following .yaml file:\n\n${yamlFileContent}.\nThere is an error, which I receive from my compiler:\n${errorMessage}.\n\nCheck out this .yaml file, fix the errors and return only the content of correct .yaml file.\nNo explanation needed!\nDo not add \`\`\`yaml at the start and the end of the solution, only pure file content needed`
      );

      console.log("Regenerating museum-api.yaml file...");
      writeFileSync(YAML_FILE_PATH, solution, "utf-8");
    } catch (error) {
      console.error("Error executing command:", error);
    }
  }
};

main();
