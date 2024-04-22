import createNextIntlPlugin from 'next-intl/plugin'
 
const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  // images: {
  //   domains: ['cdn.sanity.io']
  // },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'flore.com',
        pathname: '**',
      },
    ],
  },
  i18n: {
    locales: ['en-US', 'zh-Hant', 'zh-CN'],
    // This is the default locale you want to be used when visiting
    // a non-locale prefixed path e.g. `/hello`
    defaultLocale: 'en-US',
    // This is a list of locale domains and the default locale they
    // should handle (these are only required when setting up domain routing)
    // Note: subdomains must be included in the domain value to be matched e.g. "fr.example.com".
    domains: [
      {
        domain: 'gtlt.vercel.app',
        defaultLocale: 'en-US',
      },
      {
        domain: 'gtlt.vercel.app.zh-Hant',
        defaultLocale: 'zh-Hant',
        // an optional http field can also be used to test
        // locale domains locally with http instead of https
        // http: true,
      },
      {
        domain: 'gtlt.vercel.app.zh-CN',
        defaultLocale: 'zh-CN',
      },
    ],
  },
  // typescript: {
  //   ignoreBuildErrors: true,
  // },
};

// export default nextConfig;
export default withNextIntl(nextConfig);