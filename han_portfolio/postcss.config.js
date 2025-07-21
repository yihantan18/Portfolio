// postcss.config.js (ESM-friendly and correct)
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';

export default {
  plugins: [tailwindcss, autoprefixer],
};
