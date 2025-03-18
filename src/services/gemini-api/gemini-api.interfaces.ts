export interface RequestBodyInterface {
  contents: {
    parts: {
      text: string;
    }[];
  }[];
}

export interface GeminiAPIResponseInterface {
  candidates: {
    content: {
      parts: {
        text: string;
      }[];
    };
  }[];
}
