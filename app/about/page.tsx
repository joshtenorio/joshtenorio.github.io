import Link from "next/link";

function Page() {
  return (
    <div className="flex flex-col mx-auto max-w-screen py-8 items-center p-96 text-center">
      <div className="text-xl font-semibold">About Me</div>
      <div>
        I&apos;m a software engineer currently living in Chandler, Arizona. My
        hobbies include building combat robots, playing video games, and keeping
        up with Formula 1. Find out what I&apos;m doing{" "}
        <Link
          href="/now"
          className="underline text-primary visited:text-secondary"
        >
          now
        </Link>
        .
      </div>
      <div className="text-xl font-semibold pt-4">About This Website</div>
      <div>
        This website is built using Next.js and styled with Tailwind and
        shadcn/ui. Blog content is managed with Contentlayer2.
      </div>
    </div>
  );
}

export default Page;
