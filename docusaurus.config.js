// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Software Designs and Algorithms",
  url: "https://your-docusaurus-test-site.com",
  baseUrl: "/designs-and-algorithms/",
  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  favicon: "img/favicon.ico",
  organizationName: "EPAM",
  projectName: "docusaurus",
  plugins: [require.resolve("docusaurus-lunr-search")],
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: undefined,
          exclude: ["**/hometask/node_modules/**"],
          lastVersion: 'current',
          versions: {
            current: {
              label: 'Next',
              path: '',
              banner: 'none'
            },
            '1.0.0': {
              label: '1.0.0',
              path: '1.0.0',
              banner: 'none'
            },
          },
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "Software Designs and Algorithms",
        logo: {
          alt: "Software Designs and Algorithms",
          src: "img/logo.svg",
        },
        items: [
          { href: 'https://d17btkcdsmqrmh.cloudfront.net', label: 'Back to Interactive Learning', position: 'left' },
          {
            href: "https://git.epam.com/ld-global-coordinators/js-programs/software-designs-and-algorithms-coursebook",
            label: "Gitlab",
            position: "right",
          },
          {
            type: "doc",
            docId: "contents",
            label: "Start learning",
            position: "left",
          },
          {
            type: "doc",
            docId: "Introduction/help",
            label: "Help",
            position: "left",
          },
          {
            type: 'docsVersionDropdown',
            position: 'left',
            dropdownItemsAfter: [],
            dropdownActiveClassDisabled: true,
          },
        ],
      },
      footer: {
        copyright: `Copyright © ${new Date().getFullYear()} Software Designs and Algorithms, Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

module.exports = config;
