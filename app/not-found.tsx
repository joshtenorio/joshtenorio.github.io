import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

function NotFound() {
  return (
    <div>
        <h1 className="text-xl">Page not found</h1>
        <Link href="/"><Button>Return Home</Button></Link>
    </div>
  )
}

export default NotFound