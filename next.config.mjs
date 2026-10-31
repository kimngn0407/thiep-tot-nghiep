// Xuất ra web tĩnh (thư mục "out") để chạy được trên GitHub Pages, Vercel, Netlify...
// Khi build trên GitHub Actions, biến GITHUB_PAGES=true sẽ thêm tiền tố /ten-repo cho đường dẫn.
const onGithubPages = process.env.GITHUB_PAGES === 'true';
const repo = process.env.REPO_NAME || '';
const basePath = onGithubPages && repo ? `/${repo}` : '';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: { unoptimized: true },
  basePath,
  assetPrefix: basePath || undefined,
  env: { NEXT_PUBLIC_BASE_PATH: basePath }
};

export default nextConfig;
