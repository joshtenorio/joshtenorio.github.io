"use client";

import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import { File, Folder, Undo2 } from "lucide-react";
import { useState } from "react";

// use this instead of string[] in FileTableProps
interface File {
  path: string; // use / for separator
  // add more here depending on your usecase
}
interface FileTableProps {
  files: string[]; // list of paths et al
}

interface uwu {
  relative: string;
  isFolder: boolean;
}

function renderFiles(paths: string[], cd: string) {
  let output: uwu[] = [];
  for (let i = 0; i < paths.length; i++) {
    if (paths[i].indexOf(cd) == 0) {
      let item: uwu = {
        relative: paths[i].substring(cd.length, paths[i].length),
        isFolder: false,
      };
      if (item.relative.split("/").length > 1) {
        item.isFolder = true;
        item.relative = item.relative.split("/")[0];
      }
      let found = false;
      for (let j = 0; j < output.length; j++) {
        if (output[j].relative === item.relative) {
          found = true;
          break;
        }
      }
      if (!found) output.push(item);
    }
  }
  return output;
}

function FileTable(props: FileTableProps) {
  const [cd, setCd] = useState("src/");

  const render = renderFiles(props.files, cd);

  return (
    <div className="">
      <Table>
        <TableBody>
          {cd != "" ? (
            <TableRow>
              <TableCell>
                <Undo2 />
              </TableCell>
              <TableCell>..</TableCell>
            </TableRow>
          ) : (
            <></>
          )}
          {render.map((item) => {
            return (
              <TableRow key={item.relative}>
                <TableCell>{item.isFolder ? <Folder /> : <File />}</TableCell>
                <TableCell>{item.relative}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
}

export { FileTable };
