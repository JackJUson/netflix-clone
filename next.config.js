/** @type {import('next').NextConfig} */
module.exports = {
  transpilePackages: ['@stripe/firestore-stripe-payments'],
  reactStrictMode: true,
  images: {
    domains: ['image.tmdb.org', "rb.gy"],
  },
}