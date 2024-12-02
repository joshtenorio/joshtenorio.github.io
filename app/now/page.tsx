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
      <div className="font-semibold text-xl pt-4">Arizona State</div>
      <div className="text-center">
        I&apos;ve just graduated from Arizona State University in May 2024 with a
        Bachelors in Computer Science and a Bachelors in Mathematics. There, I
        was the Data Acquisition team lead for ASU&apos;s Formula SAE team Sun Devil
        Motorsports from Spring 2022 to Spring 2024.
      </div>
      <div className="font-semibold text-xl pt-4">Garmin</div>
      <div className="text-center">
        Currently I am a Software Engineer 1 at Garmin after interning there the
        past two summers in 2022 and 2023.
      </div>
      <div className="font-semibold text-xl pt-4">glassyPDM</div>
      <div className="text-center">
        Outside of Garmin, I work on an open-source product data management
        software called glassyPDM. It was born in fall 2023, when my Formula SAE
        team needed a PDM solution when GrabCAD Workbench shut down a few months
        prior.
      </div>
      <div className="font-semibold text-xl pt-4">Combat Robotics</div>
      <div className="text-center">
        I am building an antweight (1-pound) full combat robot with plans to
        eventually build a beetleweight (3-pound) robot.
      </div>
    </div>
  );
}

export default Page;
