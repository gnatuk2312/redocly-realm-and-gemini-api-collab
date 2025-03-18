import axios from "axios";

import {
  GeminiAPIResponseInterface,
  RequestBodyInterface,
} from "./gemini-api.interfaces";
import { GEMINI_API_KEY, GEMINI_API_URL } from "../../constants/env.constants";

export class GeminiAPIService {
  static async askAI(prompt: string): Promise<string> {
    try {
      const url = `${GEMINI_API_URL}?key=${GEMINI_API_KEY}`;
      const body = this.createRequestBody(prompt);

      const response = await axios.post(url, body);

      return this.getResponseData(response.data);
    } catch (error) {
      throw new Error(`Error: ${error}`);
    }
  }

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
}
