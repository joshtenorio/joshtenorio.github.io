import Link from 'next/link'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'


export default function Home() {

  return (
    <div className="mx-auto max-w-xl py-8">
      <h1 className="mb-4 text-center text-2xl font-black">
        {`josh's tech journey`}
      </h1>
      <p className='mb-10 text-center'>{`Hi, I'm Josh. Thanks for visiting, and please mind the dust while I finish this website :)`}</p>
    </div>
  )
}