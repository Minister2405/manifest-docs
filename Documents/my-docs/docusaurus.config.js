// @ts-check

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Manifest Knowledge Base',
  tagline: 'Your one-stop shop for all things Manifest',

  url: 'https://manifest-docs.vercel.app',
  baseUrl: '/',

  favicon: 'img/favicon.ico',

  organizationName: 'my-org',
  projectName: 'my-api-docs',

  onBrokenLinks: 'throw',

  presets: [
    [
      'classic',
      {
        docs: {
          routeBasePath: 'docs',

          sidebarPath: require.resolve('./sidebars.js'),

          docItemComponent: '@theme/ApiItem',

          lastVersion: 'current',

          versions: {
            current: {
              label: 'Current Version',
            },

            '2.0-beta': {
              label: 'Beta Releases',
            },

            '1.0': {
              label: 'Past Releases',
            },
          },
        },

        blog: false,

        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],

  themes: ['docusaurus-theme-openapi-docs'],

  plugins: [
    [
      'docusaurus-plugin-openapi-docs',
      {
        id: 'api',

        docsPluginId: 'classic',

        config: {
          api: {
            specPath:
              'https://apihub.document360.io/swagger/v2/swagger.json',

            outputDir: 'docs/api',

            sidebarOptions: {
              groupPathsBy: 'tag',
            },
          },
        },
      },
    ],

    [
      require.resolve('@easyops-cn/docusaurus-search-local'),
      {
        hashed: true,

        language: ['en'],

        indexDocs: true,

        indexBlog: false,

        docsRouteBasePath: '/docs',
      },
    ],
  ],

  themeConfig: {
    navbar: {
      title: 'Manifest Knowlege Base',

      items: [
        {
          to: '/docs/intro',
          label: 'Docs',
          position: 'left',
        },

        {
          to: '/docs/api/adds-a-new-team-account',
          label: 'API',
          position: 'left',
        },

        {
          to: '/docs/graphql/intro',
          label: 'GraphQL',
          position: 'left',
        },

        {
          to: '/asyncapi',
          label: 'Async API',
          position: 'left',
        },

        {
          type: 'docsVersionDropdown',
          position: 'right',
        },
      ],
    },
  },
};

module.exports = config;