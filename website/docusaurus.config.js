/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */
// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Time Appliances Project (TAP)',
  tagline:
    'Develop an end-to-end hypothetical reference model, network architectures, performance objectives and the methods to distribute, operate, monitor time synchronization within data center and much more.',
  url: 'http://www.timingcard.com/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  trailingSlash: false,
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  organizationName: 'opencomputeproject',
  projectName: 'Time-Appliance-Project',

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
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
      navbar: {
        title: 'Time Appliances Project',
        logo: {
          alt: 'Time Appliances Project Logo',
          src: 'img/ocptaplogo.png',
        },
        items: [
          {to: 'docs/intro', label: 'Documentation', position: 'left'},
          {
            to: 'https://www.opencompute.org/projects/time-appliances-project-tap',
            label: 'OCP TAP',
            position: 'left',
          },
          {
            to: 'https://github.com/opencomputeproject/Time-Appliance-Project',
            label: 'Time-Applicance-Project@GitHub',
            position: 'left',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Project Info',
            items: [
              {
                label: 'Github',
                to: 'https://github.com/opencomputeproject/Time-Appliance-Project',
              },
              {
                label: 'Wiki',
                to: 'https://www.opencompute.org/wiki/Time_Appliances_Project',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'OCP',
                href: 'https://www.opencompute.org/',
              },
              {
                label: 'OCP TAP',
                href: 'https://www.opencompute.org/projects/time-appliances-project-tap',
              },
            ],
          },
          {
            title: 'Learn',
            items: [
              {
                label: 'DC PTP Profile',
                href: 'https://github.com/opencomputeproject/Time-Appliance-Project/tree/master/DC-PTP-Profile',
              },
              {
                label: 'Open Time Server',
                href: 'https://github.com/opencomputeproject/Time-Appliance-Project/tree/master/Open-Time-Server',
              },
              {
                label: 'Timecard',
                href: 'https://github.com/opencomputeproject/Time-Appliance-Project/tree/master/Time-Card',
              },
              {
                label: 'Software',
                href: 'https://github.com/opencomputeproject/Time-Appliance-Project/tree/master/Software',
              },
            ],
          },
          {
            title: 'Legal',
            // Please do not remove the privacy and terms, it's a legal requirement.
            items: [
              {
                label: 'Privacy',
                href: 'https://www.opencompute.org/privacy/',
              },
              {
                label: 'Terms',
                href: 'https://www.opencompute.org/terms-of-service/',
              },
              {
                label: 'OCP Policies',
                href: 'https://www.opencompute.org/about/ocp-policies/',
              },
            ],
          },
        ],
        logo: {
          alt: 'OCP Logo',
          src: 'img/ocplogo.svg',
          href: 'https://opensource.facebook.com',
        },
        // Please do not remove the credits, help to publicize Docusaurus :)
        copyright: `Copyright © ${new Date().getFullYear()} Open Compute Project. Built with Docusaurus.`,
      },
    }),
};

module.exports = config;
