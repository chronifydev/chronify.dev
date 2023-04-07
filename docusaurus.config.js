// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/nightOwlLight");
const darkCodeTheme = require("prism-react-renderer/themes/nightOwl");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Chronify",
  tagline: "Esto es una prueba",
  url: "https://chronify.dev",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/chronify-website-favicon-color.svg",
  organizationName: "chronifydev", // Usually your GitHub org/user name.
  projectName: "chronify.dev", // Usually your repo name.
  deploymentBranch: "main",
  stylesheets: [
    // "https://fonts.googleapis.com/css2?family=Inter:wght@583&display=block",
    // "https://fonts.googleapis.com/css2?family=Inter:wght@400;700;800&display=block",
  ],
  trailingSlash: false,
  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          // sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl: "https://github.com/easypanel-io/website/tree/main",
          breadcrumbs: false,
          sidebarCollapsed: true,
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl: "https://github.com/easypanel-io/website/tree/main",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
        gtag: {
          trackingID: "G-4JL0CD3631",
          anonymizeIP: true,
        },
        sitemap: {
          changefreq: "weekly",
          priority: 0.5,
        },
      }),
    ],
  ],

  plugins: [
    () => ({
      name: "postcss-tailwindcss-loader",
      configurePostCss(postcssOptions) {
        postcssOptions.plugins.unshift(require("tailwindcss"));
        return postcssOptions;
      },
    }),
    // [
    //   "@docusaurus/plugin-content-docs",
    //   {
    //     id: "product",
    //     path: "product",
    //     routeBasePath: "product",
    //     breadcrumbs: false,
    //   },
    // ],
    // [
    //   "@docusaurus/plugin-content-docs",
    //   {
    //     id: "templates",
    //     path: "templates",
    //     routeBasePath: "templates",
    //     breadcrumbs: false,
    //   },
    // ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: "dark",
        disableSwitch: true,
      },
      navbar: {
        // title: "My Site",
        // hideOnScroll: true,
        logo: {
          alt: "Chronify Logo",
          src: "img/logo-white.svg",
          srcDark: "img/chronify-high-resolution-logo-color-on-transparent-background.svg",
        },
        items: [
          { to: "/docs", label: "Docs", position: "left" },
          { to: "/pricing", label: "Pricing", position: "left" },
          { to: "/blog", label: "Blog", position: "left" },
          { to: "https://discord.gg/mfrhTeyb", label: "Community", position: "left" },
          { to: "https://status.chronify.dev", label: "Status", position: "left" },
        ],
      },
      algolia: {
        appId: "291Q7ITAVJ",
        apiKey: "e0fa29c5c372199c5b407b3c177d50b3",
        indexName: "website",
        contextualSearch: false,
        searchPagePath: false,
      },
      footer: {
        logo: {
          alt: "Easypanel Logo",
          src: "img/logo_light.svg",
          srcDark: "img/chronify-high-resolution-logo-color-on-transparent-background.svg",
        },
        // style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Get Started",
                to: "/docs",
              },
                        ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Discord",
                href: "https://discord.gg/mfrhTeyb",
              },
                            {
                label: "Mastodon",
                href: "https://mastodon.social/@chronify",
              },
              {
                label: "Twitter",
                href: "https://twitter.com/chronifydev",
              },
              {
                label: "Feedback",
                href: "https://feedback.easypanel.io/",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "Blog",
                to: "/blog",
              },
              {
                label: "GitHub",
                href: "https://github.com/chronifydev",
              },
              {
                label: "Status",
                href: "https://status.chronify.dev",
              }
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Chronify.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ["php"],
      },
    }),
};

module.exports = config;
