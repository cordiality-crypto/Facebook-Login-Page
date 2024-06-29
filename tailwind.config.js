/** @type {import('tailwindcss').Config} */
export const content = ['./src/index.html'];
export const theme = {
  screens: {
    'md': '900px',
    'lg': '1024px'
  },
  extend: {
    spacing: {
      '106' : '106px',
      '320' : '320.94px',
      '400' : '400px',
      '75' : '74.07px',
      'zehn' : '10px',
      '100' : '26rem'
    }
  }
};
export const plugins = [];

