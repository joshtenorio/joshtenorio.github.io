import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <div className="mx-auto max-w-xl py-8">
      <h1 className="mb-4 text-center text-2xl font-black">
        {`josh's tech journey`}
      </h1>
      <h2 className="text-xl text-center">{"Hi, I'm Josh -"}</h2>
      <p className="mb-4">- Software Engineer</p>
      <p className="text-center mb-4">Please mind the dust while I build this website :)</p>
      <Separator />
      <div className="flex flex-row flex-wrap space-x-2 space-y-2 p-2">
        <Badge className="hidden"></Badge> {/** LMAO */}
        <Badge>C/C++</Badge>
        <Badge>TypeScript</Badge>
        <Badge>React</Badge>
        <Badge>Python</Badge>
        <Badge>Matplotlib</Badge>
        <Badge>pandas</Badge>
        <Badge>NumPy</Badge>
        <Badge>Rust</Badge>
        <Badge>Tauri</Badge>
        <Badge>Go</Badge>
        <Badge>Java</Badge>
        <Badge>LaTeX</Badge>
        <Badge>Git</Badge>
        <Badge>KiCAD</Badge>
        <Badge>SOLIDWORKS</Badge>
        <Badge>MATLAB</Badge>
        </div>
    </div>
  )
}