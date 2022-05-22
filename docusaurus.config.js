require("dotenv").config();
const path = require("path");
const redirects = require("./redirects");

module.exports = {
  title: "Shaquil",
  tagline: "Technical Writer | JavaScript Developer",
  //disableTitleTagline: true,
  //titleDelimiter: "*",
  url: "https://shaquilhansford.com/",
  baseUrl: "/",
  //onBrokenLinks: "throw",
  //onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.png",
  projectName: "Shaquil's Personal Blog", // Usually your repo name.
  stylesheets: ["https://fonts.font.im/css?family=Raleway:500,700"],
  themeConfig: {
    metadata: [
      {
        name: "keywords",
        content:
          "technical writer, javascript developer, saas technical writing, documentation developer, content developer",
      },
      {
        name: "description",
        content:
          "Shaquil Hansford is a technical writer specializing in SaaS web products. Need to explain your tool to developers? Shaquil can help.",
      },
    ],
    navbar: {
      title: "Shaquil Hansford",
      logo: {
        alt: "My Site Logo",
        src: "img/logo.png",
      },
      items: [
        // {
        //   to: "docs/",
        //   activeBasePath: "docs",
        //   label: "Docs",
        //   position: "left",
        // },
        { type: "localeDropdown", position: "right" },
        { to: "blog", label: "Blog", position: "right" },
        {
          href: "https://github.com/S3Prototype",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Social Media",
          items: [
            {
              label: "Linkedin",
              href: "https://www.linkedin.com/in/shaquil-hansford/",
            },
            {
              label: "Twitter",
              href: "https://www.twitter.com/shaquilhansford",
            },
          ],
        },
        // {
        //   title: "Docusaurus",
        //   items: [
        //     {
        //       label: "Style Guide",
        //       to: "docs/",
        //     },
        //     {
        //       label: "Second Doc",
        //       to: "docs/doc2/",
        //     },
        //   ],
        // },
        // {
        //   title: "Community",
        //   items: [
        //     {
        //       label: "Stack Overflow",
        //       href: "https://stackoverflow.com/questions/tagged/docusaurus",
        //     },
        //     {
        //       label: "Discord",
        //       href: "https://discordapp.com/invite/docusaurus",
        //     },
        //     {
        //       label: "Twitter",
        //       href: "https://twitter.com/docusaurus",
        //     },
        //   ],
        // },
        {
          title: "More",
          items: [
            {
              label: "Blog",
              to: "blog",
            },
            {
              label: "GitHub",
              href: "https://github.com/S3Prototype",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Shaquil Hansford. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl: "https://github.com/S3Prototype/personal-blog",
        },
        blog: {
          path: "blog",
          blogSidebarTitle: "Blog Posts",
          blogSidebarCount: 20,
          blogTitle: "Shaquil Hansford's Technical Writing Blog",
          blogDescription: "Shaquil Hansford's Technical Writing Blog.",
          authorsMapPath: "./authors/authors.yml",
          postsPerPage: 20,
          feedOptions: {
            type: "all",
            title: "Shaquil Hansford's Blog Feed",
            copyright: `Copyright © ${new Date().getFullYear()} Shaquil Hansford.`,
          },
          showReadingTime: true,
          routeBasePath: "blog",
        },
        blog: {
          path: "./blog",
          //routeBasePath: "/",
          showReadingTime: true,
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
  plugins: [
    [
      "@docusaurus/plugin-ideal-image",
      {
        sizes: [320, 640, 960],
      },
    ],
    [
      "@easyops-cn/docusaurus-search-local",
      {
        hashed: true,
        language: "en",
        searchResultLimits: 10,
        indexDocs: true,
        docsRouteBasePath: "/",
        indexBlog: true,
        blogRouteBasePath: "/guides",
      },
    ],
    ["@docusaurus/plugin-client-redirects", { redirects }],
  ],
  i18n: {
    defaultLocale: "en",
    locales: ["en", "ja-JP"],
    localeConfigs: {
      en: {
        label: "English",
      },
      "ja-JP": {
        label: "日本語",
      },
    },
  },
};
