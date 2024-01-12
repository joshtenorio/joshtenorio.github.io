import Link from 'next/link'
import { compareDesc, format, parseISO } from 'date-fns'
import { allPosts, Post } from 'contentlayer/generated'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

function PostCard(post: Post) {
  return (
    <Link href={post.url}>
    <Card>
      <CardHeader>
        <CardTitle>{post.title}</CardTitle>
        <time dateTime={post.date} className="mb-2 block text-s text-gray-600">
        {format(parseISO(post.date), 'LLLL d, yyyy')}
        </time>
      </CardHeader>
      <CardContent>
      <p>{post.description}</p>
      </CardContent>
    </Card></Link>
  )
}

export default function Home() {
  const posts = allPosts.sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)))

  return (
    <div className="mx-auto max-w-xl py-8">
      <h1 className="mb-4 text-center text-2xl font-black">
        {`josh's tech journey`}
      </h1>
      <p className='mb-10 text-center'>{`Hi, I'm Josh. Thanks for visiting, and please mind the dust while I finish this website :)`}</p>
      {posts.map((post, idx) => (
        <PostCard key={idx} {...post} />
      ))}
    </div>
  )
}