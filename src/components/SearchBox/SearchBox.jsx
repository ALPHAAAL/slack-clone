import styles from './SearchBox.module.scss';
import { ReactComponent as SearchIcon } from '../../assets/icons/search.svg';

export default function SearchBox() {
  return (
    <div className={styles.container}>
      <input placeholder='Search' />
      <i><SearchIcon /></i>
    </div>
  );
}
