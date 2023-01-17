require('dotenv').config






/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
  images: {
    domains: ['res.cloudinary.com'],
  },

  env: {
    API_URL: process.env.API_URL
  },

  nextConfig

}