export default function SocialBar() {
  return (
    <div className="flex gap-4">
      <a
        href="https://facebook.com"
        target="_blank"
        className="px-4 py-2 bg-blue-600 rounded-lg hover:bg-blue-700"
      >
        Facebook
      </a>

      <a
        href="https://instagram.com"
        target="_blank"
        className="px-4 py-2 bg-pink-600 rounded-lg hover:bg-pink-700"
      >
        Instagram
      </a>

      <a
        href="https://tiktok.com"
        target="_blank"
        className="px-4 py-2 bg-gray-800 rounded-lg hover:bg-gray-900"
      >
        TikTok
      </a>

      <a
        href="https://youtube.com"
        target="_blank"
        className="px-4 py-2 bg-red-600 rounded-lg hover:bg-red-700"
      >
        YouTube
      </a>
    </div>
  );
}
