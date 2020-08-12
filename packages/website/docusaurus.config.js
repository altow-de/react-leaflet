module.exports = {
  title: 'React Leaflet',
  tagline: 'React components for Leaflet maps',
  url: 'https://react-leaflet.js.org',
  baseUrl: '/',
  favicon: 'img/logo.svg',
  organizationName: 'PaulLeCam',
  projectName: 'react-leaflet',
  stylesheets: ['//unpkg.com/leaflet@1.6.0/dist/leaflet.css'],
  themeConfig: {
    navbar: {
      title: 'React Leaflet',
      logo: {
        alt: 'React Leaflet Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: 'docs/start-introduction',
          activeBasePath: 'docs/start',
          label: 'Getting Started',
          position: 'left',
        },
        {
          to: 'docs/example-popup-marker',
          activeBasePath: 'docs/example',
          label: 'Examples',
          position: 'left',
        },
        {
          to: 'docs/api-map',
          activeBasePath: 'docs/api',
          label: 'API',
          position: 'left',
        },
        {
          href: 'https://github.com/PaulLeCam/react-leaflet',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Getting Started',
              to: 'docs/start-introduction',
            },
            {
              label: 'Public API',
              to: 'docs/api-map',
            },
            {
              label: 'Core API',
              to: 'docs/core-introduction',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/react-leaflet',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/PaulLeCam/react-leaflet',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Paul Le Cam and contributors`,
    },
    prism: {
      theme: require('prism-react-renderer/themes/nightOwl'),
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // editUrl:
          //   'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  plugins: ['@react-leaflet/docusaurus-plugin'],
  themes: ['@docusaurus/theme-live-codeblock'],
}
