const { createGlobPatternsForDependencies } = require('@nx/angular/tailwind');
const { join } = require('path');
const baseConfig = require('../../tailwind.config');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(__dirname, 'src/**/!(*.stories|*.spec).{ts,html}'),
    ...createGlobPatternsForDependencies(__dirname),
  ],

  theme: {  
      
    extend: {
      colors:{
        'primary':'blue'
      },
      // padding:{
      //   '5px':'5px',
      // }
    }
  },
  plugins: [],
  presets: [baseConfig],
};
