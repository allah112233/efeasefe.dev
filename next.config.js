module.exports = {
  reactStrictMode: true,
  webpack5: true,
  poweredByHeader: false,
  images: {
    domains: ['lastfm.freetls.fastly.net'],
  },
  async redirects() {
    return [
      {
        source: '/github',
        destination: 'https://github.com/Efeasefe',
        permanent: true,
      },
      {
        source: '/twitter',
        destination: 'https://twitter.com/efeasefe1337',
        permanent: true,
      },
      {
        source: '/discord',
        destination: 'https://ptb.discord.com/users/694942062163918869',
        permanent: true,
      },
      {
        source: '/spotify',
        destination: 'https://open.spotify.com/user/21xbw2zguwfxgs3f2lxww2xqq?si=9c7fcd7839294cc0&nd=1',
        permanent: true,
      },
    ]
  },
}
