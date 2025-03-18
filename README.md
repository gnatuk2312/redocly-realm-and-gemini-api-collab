## Documentation

#### Problem to solve

This project uses **@redocly/realm** library to validate museum-api.yaml file for having issues, typos or syntax errors.
After running `npx @redocly/realm develop` command the script checks if there is some error messages.

P.S. You can cause an error by modifying museum-api.yaml file, for example.

If the error exists the script generate a request to **Gemini API** to regenerate the following file and fix the issues.

After that `npx @redocly/realm develop` command will run automatically again and check if there is still any issues (repeat the whole flow if so).

#### Installation

1. Clone this git repository
2. Create a .env file
3. Use .env.example to see what variables you need (you can copy _GEMINI_API_URL_ value, but need to generate your own _GEMINI_API_KEY_)
4. Run `npm install` command
5. Run `npm run dev` to start the script
6. See the output in console
