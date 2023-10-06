import * as fs from "fs/promises";

const go = async (): Promise<void> => {
  try {
    console.log("Starting task...");
    const data: string = await fs.readFile("first.txt", "utf8");
    const parts: string[] = data.split("---");
    await fs.writeFile("second.txt", parts[0], "utf8");
    console.log("Successfully copied the contents");
  } catch (err: any) {
    console.log("Something went wrong");
    console.log(err);
  }
};

go();
