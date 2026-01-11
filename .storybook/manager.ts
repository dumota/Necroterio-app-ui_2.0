import { addons } from 'storybook/manager-api';
import { themes } from 'storybook/theming';
 
addons.setConfig({
  theme: themes.dark,
  branding: {
    title: 'Necroterio UI',
    url: '/',
    image: 'public/assets/logo.png',
    target: '_self',
  }
  
});