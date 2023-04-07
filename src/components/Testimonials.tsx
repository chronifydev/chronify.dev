import React from "react";

type Testimonial = {
  name: string;
  role: string;
  link: string;
  avatar: string;
  text: JSX.Element;
};

const testimonials: Testimonial[] = [
  {
    name: "Ignacio Van Droogenbroeck",
    role: "Founder at Chronify / Sales Engineer at InfluxDB",
    link: "https://mastodon.social/@ignaciovdk",
    avatar: "https://files.mastodon.social/accounts/avatars/109/988/436/113/159/348/original/7600cc2e0373ca17.jpg",
    text: (
      <>
        I built Chronify to solve a problem I had. I wanted to deploy and schedule python functions without the complexity of the current solutions. I wanted to be able to do it from my terminal. Chronify is the result of that and works pretty well for me. I hope you like it too.
      </>
    ),
  },
  {
    name: "Awesome Name",
    role: "Awesome Developer",
    link: "https://mastodon.social/@chronify",
    avatar:
      "https://files.mastodon.social/accounts/avatars/109/988/523/388/432/206/original/af4c9a28fac84698.png",
    text: (
      <>
        Here goes your testimonial. Contact us trough our <a href="https://mastodon.social/@chronify">Mastodon</a> or <a href="https://twitter.com/chronifydev">Twitter</a> account.
      </>
    ),
  },
];

export default function Testimonials(): JSX.Element {
  return (
    <section className="tw-pt-16 tw-pb-32 tw-px-4 lg:tw-px-8">
      <div className="tw-text-center">
        <div className="tw-text-sm lg:tw-text-base tw-text-emerald-500 tw-uppercase tw-font-bold tw-tracking-wider">
          Testimonials
        </div>
        <h2 className="tw-text-4xl lg:tw-text-5xl tw-mt-4 tw-font-extrabold">
          People love Chronify
        </h2>
        <p className="tw-text-xl tw-text-gray-400 tw-mb-4">
          This looks very empty, but it's not. We're just waiting for you to add a testimonial.
        </p>
      </div>
      <div className="tw-max-w-7xl tw-mx-auto tw-mt-16 lg:tw-columns-3 tw-gap-4 lg:tw-gap-8">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="tw-mb-4 lg:tw-mb-8"
            style={{ breakInside: "avoid" }}
          >
            <div className="tw-p-6 tw-bg-gray-800 tw-rounded-xl tw-shadow-highlight">
              <div className="tw-flex tw-items-center">
                <a href={testimonial.link} target="_blank">
                  <img
                    src={testimonial.avatar}
                    className="tw-w-14 tw-h-14 tw-rounded-full tw-shadow"
                  />
                </a>
                <div className="tw-ml-3">
                  <div className="tw-font-semibold">
                    <a
                      className="tw-text-white"
                      href={testimonial.link}
                      target="_blank"
                    >
                      {testimonial.name}
                    </a>
                  </div>
                  <div className="tw-text-sm tw-text-gray-400">
                    {testimonial.role}
                  </div>
                </div>
              </div>
              <p className="tw-text-gray-300 tw-mt-6 tw-text-base tw-mb-0">
                {testimonial.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
