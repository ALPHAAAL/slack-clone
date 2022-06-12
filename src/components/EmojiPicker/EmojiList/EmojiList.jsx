import styles from './EmojiList.module.scss';
import EmojiData from '../../../assets/apple-emoji-data.json';
import { HEADERS, emojiCategoryMap } from '../../../constants/EmojiListConstants';
import Emoji from '../../Emoji/Emoji';

export default function EmojiList() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        {
          Object.keys(HEADERS).map((header) => (
            <div key={header}>
              <h3>{HEADERS[header]}</h3>

              <div className={styles.emojiList}>
                {
                  EmojiData.categories.find(({id}) => id === emojiCategoryMap[header])?.emojis.map((emoji) => (
                    <button>
                      <Emoji key={emoji} codePoint={EmojiData.emojis[emoji].skins[0].unified} />
                    </button>
                  ))
                }
              </div>
            </div>
          ))
        }
      </div>
    </div>
  );
}
