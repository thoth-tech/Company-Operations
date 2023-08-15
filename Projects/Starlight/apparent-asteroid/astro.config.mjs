import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Thoth Tech',
			social: {
				github: 'https://github.com/thoth-tech',
			},
			sidebar: [
				{
					label: 'Processes',
					autogenerate: { directory: 'processes'},
					
				},
				{
					label: 'Teams and Leadership',
					autogenerate: { directory: 'teams-and-leadership'},
					
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],

	// Process images with sharp: https://docs.astro.build/en/guides/assets/#using-sharp
	image: { service: { entrypoint: 'astro/assets/services/sharp' } },
});
