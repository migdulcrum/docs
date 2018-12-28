module.exports = [
  ['/', 'Back to Table of Contents'],
  ["/exchanges/", "Exchanges Home"],
  {
    title: "Node Installation",
    collapsable: false,
    children: [
      "/exchanges/relay",
    ]
  },
  {
    title: "Communication endpoints",
    collapsable: false,
    children: [
      "/exchanges/migrating-to-ark-core",
      "/exchanges/public-api",
      "/exchanges/json-rpc-quick",

    ]
  },
  {
    title: "Advanced node configuration",
    collapsable: false,
    children: [
      "/exchanges/json-rpc",
    ]
  },
];
