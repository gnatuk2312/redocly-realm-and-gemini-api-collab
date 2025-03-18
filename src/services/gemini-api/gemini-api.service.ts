import { writeFileSync } from "fs";

import { GEMINI_API_KEY, GEMINI_API_URL } from "../../constants";
import {
  GeminiAPIResponseInterface,
  RequestBodyInterface,
} from "./gemini-api.interfaces";

export class GeminiAPIService {
  static createRequestBody(prompt: string): RequestBodyInterface {
    return {
      contents: [
        {
          parts: [
            {
              text: prompt,
            },
          ],
        },
      ],
    };
  }

  static getResponseData(response: GeminiAPIResponseInterface): string {
    return response?.candidates[0]?.content?.parts[0]?.text || "Invalid output";
  }

  static async askAI(prompt: string): Promise<string> {
    try {
      const response = await fetch(`${GEMINI_API_URL}?key=${GEMINI_API_KEY}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(this.createRequestBody(prompt)),
      });

      const data = await response.json();
      const solution = this.getResponseData(data);

      writeFileSync("solution.md", solution, "utf-8");
      console.log("Response saved to solution.txt");

      return solution;
    } catch (error) {
      writeFileSync("solution-error.md", JSON.stringify(error), "utf-8");
      console.error("Error:", error);
      throw new Error(`Error: ${error}`);
    }
  }
}
