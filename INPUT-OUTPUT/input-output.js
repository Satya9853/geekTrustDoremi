const fsPromises = require("fs/promises");

// this class is responsible for input and output of data
class InputOutputManager {
  // reads the file data from the given source file and returns it
  async #readFileAsync(source_to_file) {
    try {
      const contents = await fsPromises.readFile(source_to_file, "utf-8");
      return contents;
    } catch (error) {
      console.log(error);
    }
  }

  async readCommandLine(){
    const filename = process.argv[2]
    let data = await fsPromises.readFile(filename, "utf8");
    data = data.toString().split("\n").map((input) =>input.replace(/(\r\n|\n|\r)/gm, ""));
    return data;
}

  // this receives the fund data converts to JSON object and returns it
  async readSubscriptionAsync(source_to_file) {
    const data = await this.#readFileAsync(source_to_file);
    return data;
  }

}

module.exports = InputOutputManager;
