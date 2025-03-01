import BentoBox from "@/components/bentobox";
import { Badge } from "@/components/ui/badge";
import { Card, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import Link from "next/link";
import { compareDesc, format, parseISO } from 'date-fns'
import { allPosts, Post } from 'contentlayer2/generated'

function PostCard(post: Post) {
  return (
    <div className="mb-8">
      <h2 className="mb-1 text-xl">
        <Link href={post.url} className="text-blue-700 hover:text-blue-900 dark:text-blue-400">
          {post.title}
        </Link>
      </h2>
      <time dateTime={post.date} className="mb-2 block text-xs text-gray-600">
        {format(parseISO(post.date), 'LLLL d, yyyy')}
      </time>
      <div className="text-sm [&>*]:mb-3 [&>*:last-child]:mb-0" dangerouslySetInnerHTML={{ __html: post.body.html }} />
    </div>
  )
}

export default function Home() {
  const posts = allPosts.sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)))

  return (
    <div className="flex flex-col mx-auto max-w-screen py-8 items-center p-96">
      <h1 className="mb-4 text-center text-2xl font-black">
        {`josh's tech journey`}
      </h1>
      <h2 className="text-xl text-center">{"Hi, I'm Josh -"}</h2>
      <div className="flex flex-row space-x-2 justify-items-center py-4">
        <Badge variant="outline">Software Engineer</Badge>
        <Badge variant="outline">Sim Racer</Badge>
        <Badge variant="outline">Robot Builder</Badge>
      </div>
      <p className="text-center mb-4">
        Please mind the dust while I build this website :)
      </p>
      <Separator />
      {/*
      <div className="flex flex-row flex-wrap space-x-2 space-y-2 p-2">
        <Badge className="hidden"></Badge>
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
        */}
        {
          posts.map((post, idx) => (
            <PostCard key={idx} {... post} />
          ))
        }
    </div>
  );
}
