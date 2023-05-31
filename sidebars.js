module.exports = {
  docSidebar: [
    {
      type: "category",
      label: "Introduction",
      collapsible: false,
      collapsed: false,
      items: [
        "about-swan",
        {
          type: "category",
          label: "Starter guides",
          link: { type: "doc", id: "guides/starter-guides/intro" },
          collapsible: true,
          collapsed: true,
          items: ["guides/starter-guides/activate"],
        },
        {
          type: "category",
          label: "Use cases",
          link: { type: "doc", id: "guides/use-cases/intro" },
          collapsible: true,
          collapsed: true,
          items: [
            "guides/use-cases/bnpl",
            "guides/use-cases/expense",
            "guides/use-cases/financial",
            "guides/use-cases/rental",
            "guides/use-cases/swan-solo",
            "guides/use-cases/vertical",
          ],
        },
      ],
    },
    {
      type: "category",
      label: "Use the Swan API",
      collapsible: false,
      collapsed: false,
      items: [
        {
          type: "category",
          label: "Access tokens",
          link: { type: "doc", id: "swan-api/access-tokens/concepts" },
          collapsible: true,
          collapsed: true,
          items: [
            "swan-api/access-tokens/get-token-project",
                "swan-api/access-tokens/get-token-user",
          ],
        },
        {
          type: "category",
          label: "Errors and rejections",
          link: { type: "doc", id: "swan-api/rejections/concepts" },
          collapsible: true,
          collapsed: true,
          items: ["swan-api/rejections/using-rejections"],
        },
        {
          type: "category",
          label: "Webhooks",
          link: { type: "doc", id: "swan-api/webhooks/concepts" },
          collapsible: true,
          collapsed: true,
          items: ["swan-api/webhooks/using-webhooks"],
        },
      ],
    },
    {
      type: "category",
      label: "Guides",
      collapsible: false,
      collapsed: false,
      items: [
        "guides/accounts/concepts",
        {
          type: "category",
          label: "Payments",
          link: { type: "doc", id: "guides/payments/concepts" },
          collapsed: true,
          items: [
            {
              type: "category",
              label: "Credit transfers",
              link: {
                type: "doc",
                id: "guides/payments/credit-transfers/concepts",
              },
              collapsed: true,
              items: [
                "guides/payments/credit-transfers/guide-receive-transfers",
                "guides/payments/credit-transfers/guide-refund-transfers",
                "guides/payments/credit-transfers/guide-set-up-recurring-transfers",
                "guides/payments/credit-transfers/guide-transfer-money",
              ],
            },
            "guides/payments/direct-debit/concepts",
            "guides/payments/card-payments/concepts",
            "guides/payments/checks/concepts",
            "guides/payments/open-banking/concepts",
          ],
        },
      ],
    },
    {
      type: "category",
      label: "Resources",
      collapsible: false,
      collapsed: false,
      items: [
        "changelog",
        {
          type: "link",
          label: "Status page", // The link label
          href: "https://status.swan.io/", // The external URL
        },
        {
          type: "link",
          label: "Roadmap", // The link label
          href: "https://swanio.notion.site/Swan-Public-Roadmap-385e4b2e91b3409786a6c8e885654a22", // The external URL
        },
        "guides/contact",
        {
          type: "link",
          label: "Support center", // The link label
          href: "https://support.swan.io/hc/en-150", // The external URL
        },
      ],
    },
  ],

  partnershipSidebar: [
    {
      type: "category",
      label: "Partnership with Swan",
      collapsible: false,
      collapsed: false,
      items: [
        "partnership/intro",
        "partnership/rules",
        {
          type: "category",
          label: "Country guides",
          link: { type: "doc", id: "partnership/country-guides/index" },
          collapsible: true,
          collapsed: true,
          items: [
            "partnership/country-guides/france",
            "partnership/country-guides/spain",
          ],
        },
      ],
    },
    {
      type: "category",
      label: "Resources",
      collapsible: false,
      collapsed: false,
      items: [
        {
          type: "link",
          label: "Status page", // The link label
          href: "https://status.swan.io/", // The external URL
        },
        {
          type: "link",
          label: "Roadmap", // The link label
          href: "https://swanio.notion.site/Swan-Public-Roadmap-385e4b2e91b3409786a6c8e885654a22", // The external URL
        },
        "partnership/contact",
        {
          type: "link",
          label: "Support center", // The link label
          href: "https://support.swan.io/hc/en-150", // The external URL
        },
      ],
    },
  ],

  schemaSidebar: [
    {
      type: "category",
      label: "API Reference",
      collapsible: false,
      collapsed: false,
      items: [
        {
          type: "autogenerated",
          dirName: "api-reference",
        },
      ],
    },
  ],
};
