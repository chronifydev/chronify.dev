import Link from "@docusaurus/Link";
import React from "react";

type Partner = {
  href: string;
  logo: string;
};

const partners: Partner[] = [
  {
    href: "https://aws.amazon.com/marketplace/pp/prodview-nkiq4lewjosjc",
    logo: "/partners/aws.svg",
  },
  {
    // href: "https://marketplace.digitalocean.com/apps/easypanel",
    href: "https://marketplace.digitalocean.com/apps/easypanel?refcode=9b8aca9dc290&action=deploy",
    logo: "/partners/digitalocean.svg",
  },
  {
    href: "https://www.linode.com/marketplace/apps/easypanel/easypanel/",
    logo: "/partners/linode.svg",
  },
  {
    // href: "https://www.vultr.com/marketplace/apps/easypanel",
    href: "https://www.vultr.com/marketplace/apps/easypanel?ref=9104173",
    logo: "/partners/vultr.svg",
  },
];

export default function Hero(): JSX.Element {
  return (
      
    <section className="tw-py-24 lg:tw-py-32 tw-text-center">
      <h1 className="tw-text-4xl lg:tw-text-7xl tw-tracking-tight tw-leading-none tw-font-extrabold tw-px-4">
        <span className="tw-text-transparent tw-bg-clip-text tw-bg-gradient-to-r tw-to-cyan-400 tw-from-emerald-600">
          Deploy and Schedule
        </span>
        <br /> Python Functions
      </h1>
      <p className="tw-text-lg lg:tw-text-xl tw-font-normal tw-text-gray-400 tw-max-w-2xl tw-mx-auto tw-px-4">
        {/* Deploy applications, manage databases, and provision SSL certificates,
          from an easy-to-use interface. */}
        Chronify allows to developers to deploy and schedule python functions for free. Welcome to simplicity.
      </p>
      <div className="tw-px-4 tw-mt-8">
        <input
          className="tw-bg-gray-800 tw-text-white tw-p-4 tw-border-0 tw-rounded-lg tw-font-mono tw-font-bold tw-text-base tw-text-center tw-w-[430px] tw-max-w-full tw-cursor-pointer tw-shadow-highlight"
          defaultValue="$ brew install chronify-cli"
          onFocus={(e) => e.currentTarget.select()}
          onSelect={(e) => e.currentTarget.select()}
          readOnly
        />
        <div className="tw-text-gray-400 tw-mt-6 tw-text-base">
          Running on Linux or Windows?{" "} No problem, go to <a href="http://localhost:3000/docs">docs</a>
        </div>
      </div>
      {/* <div className="tw-mt-20 tw-flex tw-flex-col lg:tw-flex-row tw-justify-between tw-gap-6 tw-max-w-4xl tw-mx-auto"> */}
    </section>
  );
}
