import React from "react";

function Page() {
  return (
    <div className="flex flex-col mx-auto max-w-screen py-8 items-center p-96">
      <div>
        This is my{" "}
        <a
          href="https://nownownow.com/about"
          target="_blank"
          className="underline"
        >
          now
        </a>{" "}
        page.
      </div>
    </div>
  );
}

export default Page;
