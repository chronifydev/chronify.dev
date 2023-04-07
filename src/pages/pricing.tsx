import Link from "@docusaurus/Link";
import Layout from "@theme/Layout";
import React, { ReactNode, useState } from "react";

export default function Page(): JSX.Element {
  return (
    <Layout
      title="Pricing"
      description="Easypanel comes in two editons: developer edition and business edition. The developer edition will always be free."
    >
      <Pricing />
    </Layout>
  );
}

const bullet = (
  <svg
    className="tw-w-5 tw-h-5 tw-text-gray-500"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path
      fillRule="evenodd"
      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
      clipRule="evenodd"
    />
  </svg>
);

const Feature = ({
  children,
  soon,
  underline,
}: {
  children: ReactNode;
  soon?: boolean;
  underline?: boolean;
}) => (
  <li className="tw-flex tw-items-center">
    {bullet}
    <span
      className={[
        "tw-ml-2 tw-text-base tw-font-normal tw-text-white",
        underline &&
          "tw-border-0 tw-border-b-2 tw-border-solid tw-border-emerald-700",
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {children}{" "}
      {soon && <span className="tw-text-sm tw-text-gray-400">(soon)</span>}
    </span>
  </li>
);

const Pricing = () => {
  const [annual, setAnnual] = useState(false);

  return (
    <section className="tw-py-12 tw-bg-black sm:tw-py-16 lg:tw-py-20 xl:tw-py-24">
      <div className="tw-px-4 tw-mx-auto tw-max-w-7xl">
        <div className="tw-max-w-3xl tw-mx-auto tw-text-center">
          <h2 className="tw-text-4xl tw-font-semibold tw-text-white sm:tw-text-4xl lg:tw-text-5xl xl:tw-text-6xl">
            Pricing<br className="sm:tw-hidden" />
          </h2>
          <p className="tw-mt-4 tw-text-xl tw-font-normal tw-text-gray-400">
            We like simple things &ndash; and we're offering you simple pricing to cover your needs.
          </p>
        </div>

        <div className="tw-flex tw-items-center tw-justify-center tw-mt-8 tw-space-x-6 sm:tw-mt-12">
          <button
            type="button"
            onClick={() => setAnnual(!annual)}
            className="tw-m-0 tw-p-0 tw-bg-transparent tw-border-none tw-flex tw-items-center tw-cursor-pointer"
          >
            <div
              className={[
                annual ? "tw-bg-emerald-600" : "tw-bg-gray-600",
                "tw-relative tw-inline-flex tw-h-6 tw-w-11 tw-flex-shrink-0 tw-rounded-full tw-border-2 tw-border-solid tw-border-transparent tw-transition-colors tw-duration-200 tw-ease-in-out focus:tw-outline-none",
              ]
                .filter(Boolean)
                .join(" ")}
            >
              <span
                className={[
                  annual
                    ? "tw-translate-x-5 tw-bg-white"
                    : "tw-translate-x-0 tw-bg-gray-300",
                  "tw-pointer-events-none tw-inline-block tw-h-5 tw-w-5 tw-transform tw-rounded-full tw-shadow tw-ring-0 tw-transition tw-duration-200 tw-ease-in-out",
                ]
                  .filter(Boolean)
                  .join(" ")}
              ></span>
            </div>
            <span className="tw-ml-3 tw-text-base">
              <span className="tw-text-base tw-font-medium tw-text-gray-300">
                Annual billing
              </span>
              <span className="tw-ml-2 tw-text-base tw-font-medium tw-text-emerald-500">
                (Save 20%)
              </span>
            </span>
          </button>
        </div>

        <div className="tw-grid tw-max-w-md tw-grid-cols-1 tw-gap-6 tw-mx-auto tw-mt-12 lg:tw-grid-cols-3 lg:tw-gap-3 sm:tw-mt-16 lg:tw-max-w-7xl">

          <div className="tw-flex tw-flex-col tw-p-6 tw-bg-gray-900 tw-rounded-md">
            <div className="tw-flex-1">
              <h3 className="tw-text-lg tw-font-normal tw-text-white">Free (Forever)</h3>

              <div className="tw-flex tw-items-end tw-mt-3">
                <p className="tw-text-6xl tw-font-normal tw-text-white">
                  ${annual ? 0 : 0}
                </p>
                <p className="tw-ml-1 tw-text-base tw-font-normal tw-text-gray-500">
                  / month
                </p>
              </div>
              <p className="tw-mt-4 tw-text-base tw-font-normal tw-text-gray-400">
                The perfect start for playing around with Chronify
              </p>

              <hr className="tw-mt-8 tw-border-gray-800" />

              <ul className="tw-p-0 tw-mt-8 tw-space-y-4">
              <Feature underline>
                  <b>3</b> tasks
                </Feature>
                <Feature underline>
                  <b>5</b> webhooks triggers
                </Feature>
                <Feature>
                  <b>24 hours</b> logs retention</Feature>
                <Feature>Ad hoc and recurring tasks</Feature>
                <Feature>Email Support</Feature>
                <Feature>48-hour support response time</Feature>
              </ul>
            </div>

            <Link href="https://portal.easypanel.io">
              <div className="tw-relative tw-flex tw-items-center tw-justify-center tw-mt-8 tw-group">
                <div className="tw-absolute tw-transition-all tw-duration-200 tw-rounded-md tw--inset-px tw-bg-gradient-to-r tw-from-cyan-500 tw-to-emerald-500 group-hover:tw-shadow-lg group-hover:tw-shadow-cyan-500/50"></div>
                <div
                  className="tw-relative tw-inline-flex tw-items-center tw-justify-center tw-w-full tw-px-8 tw-py-3 tw-text-base tw-font-semibold tw-text-white tw-bg-gray-900 tw-border tw-border-transparent tw-rounded-md"
                  role="button"
                >
                  Buy Your Licences
                </div>
              </div>
            </Link>
          </div>

          <div className="tw-relative tw-z-10 tw-flex tw-flex-col tw-p-6 tw-bg-gray-900 tw-rounded-md">
            <div className="tw-absolute tw-rounded-md tw--inset-px tw-bg-gradient-to-r tw-from-cyan-500 tw-to-emerald-500"></div>
            <div className="tw-absolute tw-inset-0 tw-bg-gray-900 tw-rounded-md"></div>

            <div className="tw-relative tw-flex-1">
              <h3 className="tw-text-lg tw-font-normal tw-text-white">
                Professional
              </h3>

              <div className="tw-flex tw-items-end tw-mt-3">
                <p className="tw-text-6xl tw-font-normal tw-text-white">
                  ${annual ? 50 : 60}
                </p>
                <p className="tw-ml-1 tw-text-base tw-font-normal tw-text-gray-500">
                  / month
                </p>
              </div>
              <p className="tw-mt-4 tw-text-base tw-font-normal tw-text-gray-400">
                Bring your whole team on board and schedule tasks together
              </p>

              <hr className="tw-mt-8 tw-border-gray-800" />

              <ul className="tw-p-0 tw-mt-8 tw-space-y-4">
              <Feature underline>
                  <b>50</b> tasks
                </Feature>
                <Feature underline>
                  <b>100</b> webhooks triggers
                </Feature>
                <Feature>
                  <b>15 days</b> logs retention</Feature>
                <Feature>Ad hoc and recurring tasks</Feature>
                <Feature>5 team members</Feature>
                <Feature>Email Alerts</Feature>
                <Feature>Priority Email Support</Feature>
                <Feature>24-hour support response time</Feature>
              </ul>
            </div>

            <Link href="https://portal.easypanel.io">
              <div className="tw-relative tw-mt-8">
                <div className="tw-inline-flex tw-items-center tw-justify-center tw-w-full tw-px-8 tw-py-4 tw-text-base tw-font-semibold tw-text-white tw-transition-all tw-duration-200 tw-rounded-md tw-bg-gradient-to-r tw-from-cyan-500 tw-to-emerald-500 hover:tw-contrast-150 tw-border-none">
                  Buy Your Licences
                </div>
              </div>
            </Link>
          </div>

              <div className="tw-flex tw-flex-col tw-p-6 tw-bg-gray-900 tw-rounded-md">
                <div className="tw-flex-1">
                  <h3 className="tw-text-lg tw-font-normal tw-text-white">
                    Enteprise
                  </h3>

                  <div className="tw-flex tw-items-end tw-mt-3">
                    <p className="tw-text-6xl tw-font-normal tw-text-white">
                      ${annual ? 100 : 120}
                    </p>
                    <p className="tw-ml-1 tw-text-base tw-font-normal tw-text-gray-500">
                      / month
                    </p>
                  </div>
                  {/* <p className="tw-text-base tw-font-normal tw-text-gray-200">
                    $65 billed anually
                  </p> */}
                  <p className="tw-mt-4 tw-text-base tw-font-normal tw-text-gray-400">
                    The floor is yours. Unlimited everything. 
                  </p>

                  <hr className="tw-mt-8 tw-border-gray-800" />

                  <ul className="tw-p-0 tw-mt-8 tw-space-y-4">
                  <Feature underline>
                      <b>Unlimited</b> tasks
                    </Feature>
                    <Feature underline>
                      <b>Unlimited</b> webhooks triggers
                    </Feature>
                    <Feature>Unlimited logs retention</Feature>
                    <Feature>Ad hoc and recurring tasks</Feature>
                    <Feature>Unlimited team members</Feature>
                    <Feature>Email, and Slack alerts</Feature>
                    <Feature>Enterprise Support</Feature>
                    <Feature>Support through email, phone and slack</Feature>
                    <Feature>4-hour response time</Feature>
                  </ul>
                </div>

                <Link href="https://portal.easypanel.io">
                  <div className="tw-relative tw-flex tw-items-center tw-justify-center tw-mt-8 tw-group">
                    <div className="tw-absolute tw-transition-all tw-duration-200 tw-rounded-md tw--inset-px tw-bg-gradient-to-r tw-from-cyan-500 tw-to-emerald-500 group-hover:tw-shadow-lg group-hover:tw-shadow-cyan-500/50"></div>
                    <div
                      className="tw-relative tw-inline-flex tw-items-center tw-justify-center tw-w-full tw-px-8 tw-py-3 tw-text-base tw-font-semibold tw-text-white tw-bg-gray-900 group-hover:tw-bg-gray-800 tw-border tw-border-transparent tw-rounded-md"
                      role="button"
                    >
                      Buy Your Licences
                    </div>
                  </div>
                </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
