import React from 'react'

function Page() {
  return (
    <div>
      <h1 className='mt-2 scroll-m-20 text-4xl font-bold'>About Me</h1>
      <p className='m-4'>
      {`
      Hi there! My name is Josh, and I'm currently studying Computer Science and Mathematics at Arizona State University.
      I'm interested in embedded software development, and currently learning UI/UX and Rust.
      `}
      </p>
      <h2 className='mt-10 scroll-m-20 text-3xl font-semibold'>About This Website</h2>
      <p className='m-4'>
      {`
      This website is written with Next.js, Tailwind CSS, and shadcn/ui.
      I am using Contentlayer to manage the blog content.
      `}
      </p>
    </div>
  )
}

export default Page