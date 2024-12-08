import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
	images: {
		remotePatterns: [
			{
				hostname: 'firebasestorage.googleapis.com',
			},
			{
				hostname: 'img.clerk.com',
			},
		],
	},
};

export default nextConfig;
