export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "6167da74cb07599b909d7682",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-y24x3uw4",
                  apiId: "6af16157-0917-47d0-b1f8-abde143c84c1",
                },
                {
                  buildHookId: "6167da745124669c6faebb1f",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-wuu1sf7f",
                  apiId: "218a4f59-4a59-487e-8ef8-cf4611763186",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/justinloffler/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-wuu1sf7f.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
