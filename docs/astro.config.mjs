import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  integrations: [
    starlight({
      title: 'React Runko UI',
      description: 'Atomic React component library with minimal CSS',
      social: [
        {
          icon: 'github',
          label: 'GitHub',
          href: 'https://github.com/jEnbuska/react-runko-ui',
        },
      ],
      sidebar: [
        {
          label: 'Getting Started',
          autogenerate: { directory: 'getting-started' },
        },
        {
          label: 'Components',
          autogenerate: { directory: 'components' },
        },
        {
          label: 'Guides',
          autogenerate: { directory: 'guides' },
        },
      ],
      customCss: ['./src/styles/custom.css'],
    }),
  ],
});
