const { join } = require('path');

module.exports = {
  plugins: {
    tailwindcss: {
      config: join(__dirname, 'tailwind.config.js'),
    },
    autoprefixer: {},
  },
};

module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
module.exports = {
  plugins: [
    'tailwindcss',
    'postcss-preset-env',
  ],
}
