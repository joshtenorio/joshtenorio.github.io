import React from 'react'

function Page() {
  return (
    <div>
      <h1 className='text-2xl'>About Me</h1>
      <p className='m-4'>
      {`Hi there! My name is Josh, and I'm currently studying Computer Science and Mathematics at Arizona State University.`}
      </p>
      <h2 className='text-xl'>About This Website</h2>
      <p className='m-4'>
      This website is written with Next.js, Tailwind CSS, and shadcn/ui.
      </p>
    </div>
  )
}

export default Page