if (!process.env.NEXTAUTH_URL) throw new Error('Please set NEXTAUTH_URL');
if (!process.env.NEXTAUTH_SECRET) throw new Error('Please set NEXTAUTH_SECRET');
if (!process.env.DATABASE_URL) throw new Error('Please set DATABASE_URL');
if (!process.env.GOOGLE_CLIENT_ID)
  throw new Error('Please set GOOGLE_CLIENT_ID');
if (!process.env.GOOGLE_CLIENT_SECRET)
  throw new Error('Please set GOOGLE_CLIENT_SECRET');
if (!process.env.GITHUB_ID) throw new Error('Please set GITHUB_ID');
if (!process.env.GITHUB_SECRET) throw new Error('Please set GITHUB_SECRET');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    locales: ['en-US'],
    defaultLocale: 'en-US',
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
      },
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
      },
      {
        protocol: 'https',
        hostname: 'bugees.vercel.app',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/home/:path*',
        destination: '/:path*',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
