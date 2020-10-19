// подключение lazy-load-attrubute
import 'loading-attribute-polyfill';

// подключение normalize
import 'normalize.css';
import './sass/article.sass';

import menuMain from '@modules/menuMain';
import subscription from '@modules/subscription';
import formModal from '@modules/formModal';
import resultModal from '@modules/resultModal';
import toUp from '@modules/toUp';
import addBookmark from '@modules/addBookmark';
import sliderArticle from '@modules/sliderArticle';
import downloadComments from '@modules/downloadComments';
import addComment from '@modules/addComment';
import toggleCommentLikes from '@modules/toggleCommentLikes';
import moveToAddCommentForm from '@modules/moveToAddCommentForm';


menuMain();
subscription();
formModal();
resultModal();
toUp();
addBookmark();
sliderArticle();
downloadComments();
addComment();
toggleCommentLikes();
moveToAddCommentForm();

