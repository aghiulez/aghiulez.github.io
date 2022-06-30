/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    // "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    fontFamily: {
      'mono': ['ui-monospace']
    },
    extend: {
      backgroundImage: {
        'mac-desktop-wallpaper': "url('https://512pixels.net/downloads/macos-wallpapers-thumbs/10-5--thumb.png')",
        'footer-texture': "url('/img/footer-texture.png')",
      }
    }
  },
  plugins: [],
}
