// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Tyler Thompson',
  tagline:
    'Senior software engineer and founder of Thompson Software. Custom web and mobile software, built to last.',
  favicon: 'img/favicon.png',

  headTags: [
    {
      tagName: 'script',
      attributes: {},
      innerHTML: "document.documentElement.classList.add('js')",
    },
    {
      tagName: 'link',
      attributes: {rel: 'preconnect', href: 'https://fonts.googleapis.com'},
    },
    {
      tagName: 'link',
      attributes: {
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com',
        crossOrigin: 'anonymous',
      },
    },
    {
      tagName: 'link',
      attributes: {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Archivo:ital,wdth,wght@0,62..125,100..900;1,62..125,100..900&display=swap',
      },
    },
  ],

  // Set the production url of your site here
  url: 'https://www.tylerthompson.me',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',
  trailingSlash: false,
  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'tylerthompson', // Usually your GitHub org/user name.
  projectName: 'tylerthompson.github.io', // Usually your repo name.

  onBrokenLinks: 'throw',
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.png',
      navbar: {
        title: 'Tyler Thompson',
        logo: {
          alt: 'Tyler Thompson',
          src: 'img/logo.svg',
        },
        items: [
          {to: '/#work', label: 'Work', position: 'left'},
          {to: '/#services', label: 'Services', position: 'left'},
          {to: '/blog', label: 'Writing', position: 'left'},
          {
            href: 'https://github.com/tylerthompson',
            label: 'GitHub',
            position: 'right',
          },
          {
            href: 'https://www.linkedin.com/in/tylerjamesthompson',
            label: 'LinkedIn',
            position: 'right',
          },
          {
            type: 'html',
            position: 'right',
            value:
              '<a class="tt-nav-cta" href="https://thompsonsoftware.org/#contact">Start a project</a>',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Site',
            items: [
              {label: 'Work', to: '/#work'},
              {label: 'Services', to: '/#services'},
              {label: 'Background', to: '/#experience'},
              {label: 'Writing', to: '/blog'},
            ],
          },
          {
            title: 'Projects',
            items: [
              {
                label: 'Thompson Software',
                href: 'https://thompsonsoftware.org',
              },
              {
                label: 'LiveFromWisco',
                href: 'https://www.livefromwisco.com',
              },
              {
                label: 'Julian Suite',
                href: 'https://thompsonsoftware.org/#projects',
              },
              {
                label: 'Luna',
                href: 'https://apps.apple.com/us/app/luna-private-cycle-tracker/id6769168539',
              },
            ],
          },
          {
            title: 'Connect',
            items: [
              {
                label: 'LinkedIn',
                href: 'https://www.linkedin.com/in/tylerjamesthompson',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/tylerthompson',
              },
              {
                label: 'Start a project',
                href: 'https://thompsonsoftware.org/#contact',
              },
            ],
          },
        ],
        copyright: `© ${new Date().getFullYear()} Tyler Thompson`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
