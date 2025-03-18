import { ChildProcess, exec } from "child_process";

export class RedoclyRealmService {
  static async runCommand(command: string): Promise<string> {
    return new Promise((resolve) => {
      const childProcess = exec(
        command,
        (error, standardOutput, standardError) => {
          if (error) {
            return resolve(error.message);
          }

          if (standardError) {
            return resolve(standardError);
          }

          return resolve(standardOutput);
        }
      );

      this.pipeOutput(childProcess);
    });
  }

  static pipeOutput(childProcess: ChildProcess): void {
    childProcess.stdout?.pipe(process.stdout);
    childProcess.stderr?.pipe(process.stderr);
  }
}
