/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		webpackBuildWorker: true,
		optimizePackageImports: ['@mantine/core', 'aws-amplify'],
	},
};

export default nextConfig;
