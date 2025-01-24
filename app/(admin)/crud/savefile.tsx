import { writeFile } from "fs";
export const saveMd = (value) : any =>{
  writeFile("./writeFile.md", value, (err) => {
      if (err) throw err;
      console.log('The file has been saved!');
  });
}