/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    images: {
      unoptimized: true, // Use this if you have issues with images in static export
    },
};
  
module.exports = nextConfig;
  