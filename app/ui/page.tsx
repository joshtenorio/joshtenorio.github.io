import { FileTable } from "./_filetable";

const files = [
  "document.txt",
  ".gitignore",
  "README.md",
  "LICENSE",
  "main",
  "src/main.c",
  "src/main.h",
  "src/robot/motor.h",
  "src/robot/motor.c",
  "docs/index.md",
  ".github/issue_template",
  ".github/workflows/publish.yml",
];

function Page() {
  return (
    <div className="px-2">
      <div className="text-2xl text-center py-4">UI Snippets</div>
      <div className="text-center py-4">File Table</div>
      <FileTable files={files} />
    </div>
  );
}

export default Page;
