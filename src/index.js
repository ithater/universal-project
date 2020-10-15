// подключение lazy-load-attrubute
import 'loading-attribute-polyfill';



// подключение normalize
import 'normalize.css';
import './sass/index.sass';

import menuMain from '@modules/menuMain';
import recomendationTabs from '@modules/recomendationTabs';
import sliderMain from '@modules/sliderMain'
import addBookmark from '@modules/addBookmark'



menuMain();
recomendationTabs();
sliderMain();
addBookmark();