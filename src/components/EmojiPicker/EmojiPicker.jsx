import clsx from 'clsx';

import Tab from './Tab/Tab';

import styles from './EmojiPicker.module.scss';
import SearchBox from '../SearchBox/SearchBox';
import EmojiList from './EmojiList/EmojiList';
import Footer from './Footer/Footer';

export default function EmojiPicker() {
  const className = clsx([styles.container, styles.center]);

  return (
    <div className={className}>
      <Tab />
      <SearchBox />
      <EmojiList />
      <Footer />
    </div>
  );
}
