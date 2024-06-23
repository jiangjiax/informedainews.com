// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';
import tailwindPlugin from "./plugins/tailwind-plugin.cjs";

function reverseSidebarItems(items) {
  // Reverse items in categories
  const result = items.map((item) => {
    if (item.type === 'category') {
      return {...item, items: reverseSidebarItems(item.items)};
    }
    return item;
  });
  // Reverse items at current level
  result.reverse();
  return result;
}
/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Informed AI News',
  tagline: `"Informed AI News" is an AI-curated publications aggregation platform, ensuring you access only the most valuable information, with the aim of eliminating the information gap and transcending the confines of information cocoons.`,
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://informedainews.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'jiangjiax', // Usually your GitHub org/user name.
  projectName: 'InformedAINews.com', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  plugins:[
    tailwindPlugin,
  ],

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en','zh-Hans'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          async sidebarItemsGenerator({defaultSidebarItemsGenerator, ...args}) {
            const sidebarItems = await defaultSidebarItemsGenerator(args);
            return reverseSidebarItems(sidebarItems);
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
        gtag: {
          trackingID: 'G-48P8MMKF9P',
          anonymizeIP: true,
        },
      }),
    ]
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/social-card.jpeg',
      navbar: {
        title: 'Informed AI News',
        logo: {
          alt: 'Informed AI News Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Publications',
          },
          {
            type: 'localeDropdown',
            position: 'right',
          },
          {to: '/#faq', label: 'FAQ', position: 'right'},
          {to: '/news', label: 'Latest News', position: 'left'},
          {to: '/latest-tools', label: 'Selected Tools', position: 'left'},
          // {to: '/blog', label: 'Blog', position: 'left'},
          // {
          //   href: 'https://github.com/jiangjiax/informedainews.com',
          //   label: 'GitHub',
          //   position: 'right',
          // },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Contact',
            items: [
              {
                label: 'Email',
                href: 'mailto:jiangjiaxingogogo@gmail.com',
              },
              {
                label: 'Twitter',
                href: 'https://x.com/JJJ44129022',
              },
              // {
              //   label: 'Reddit',
              //   href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              // },
            ],
          },
          {
            title: 'More',
            items: [
              // {
              //   label: 'Blog',
              //   to: '/blog',
              // },
              {
                label: 'GitHub',
                href: 'https://github.com/jiangjiax/informedainews.com',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Informed AI News, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
