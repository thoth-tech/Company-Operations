import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Thoth Tech',
			logo: {
				dark: './src/assets/logo-dark-theme.png',
				light: './src/assets/logo-light-theme.png'
			},
			social: {
				github: 'https://github.com/thoth-tech',
			},
			sidebar: [
				{
					label: 'Products',
					autogenerate: { directory: 'products'},
					
				},
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
