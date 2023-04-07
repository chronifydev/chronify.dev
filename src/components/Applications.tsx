import React from "react";

type Feature = {
  title: string;

  icon: React.ComponentType<React.ComponentProps<"svg">>;
  description: JSX.Element;
};

const features: Feature[] = [
  {
    title: "Deploy",
    icon: require("@site/static/icons/Upload-toCloud.svg").default,
    description: (
      <>
        Deploy your code to the cloud with a single command from your terminal.
      </>
    ),
  },
  {
    title: "Run and Schedule",
    icon: require("@site/static/icons/Cloud-Secure.svg").default,
    description: (
      <>
        Run and schedule your python functions with ease.
      </>
    ),
  },
  {
    title: "Free",
    icon: require("@site/static/icons/Cursor-Click2.svg").default,
    description: (
      <>
        During our beta, start free and upgrade as you grow.
      </>
    ),
  },
  {
    title: "From your terminal",
    icon: require("@site/static/icons/Factory2.svg").default,
    description: (
      <>
        You can also deploy and manage your functions from your terminal. Using Curl or the Chronify CLI. 
      </>
    ),
  },
  {
    title: "Control Panel",
    icon: require("@site/static/icons/Approved-Window.svg").default,
    description: (
      <>
        Manage your functions, schedules and logs from the web control panel (coming soon).
      </>
    ),
  },
];

export default function Applications(): JSX.Element {
  return (
    <section className="tw-py-24 lg:tw-px-8">
      <div className="tw-max-w-7xl tw-mx-auto lg:tw-grid lg:tw-grid-cols-2 lg:tw-gap-20 lg:tw-items-center">
        <div className="tw-p-4">
          <h2 className="tw-text-4xl lg:tw-text-5xl tw-mb-6 tw-font-extrabold">
            Deploy your Python functions in seconds with our API
          </h2>
          <p className="tw-text-xl tw-text-gray-400">
            Chronify is a serverless platform that allows you to deploy, schedule and run your Python functions in seconds.
            It is a fully managed platform that takes care of all the infrastructure and scaling for you.
            <div className="tw-mt-6">
            <p><h5>Chronify is currently in beta and we are working on adding more languages to the platform.</h5></p>
            </div>
          </p>
          <img
            src="/img/applications-logos.png"
            className="tw-block tw-max-h-12 tw-mt-6"
          />
        </div>
        <div className="tw-p-4">
          <img src="/img/applications-screenshot.png" className="tw-block" />
        </div>
      </div>
      <div className="tw-max-w-7xl tw-mx-auto tw-mt-10 tw-grid lg:tw-grid-cols-3 tw-gap-x-20">
        {features.map((feature, index) => (
          <div key={index} className="tw-p-4">
            <feature.icon className="tw-fill-emerald-500 tw-w-12 tw-h-12" />
            <h3 className="tw-mt-4 tw-mb-2 tw-text-xl">{feature.title}</h3>
            <p className="tw-text-gray-400">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
