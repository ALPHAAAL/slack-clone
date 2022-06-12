import { useCallback, useState } from 'react';
import styles from './Tab.module.scss';

import TabButton from './TabButton/TabButton';

import * as IconConstants from '../../../constants/IconConstants';

const { TABS } = IconConstants;

export default function Tab() {
  const [activeTab, setActiveTab] = useState(IconConstants.FREQUENTLY_USED);
  const handleClick = useCallback((tab) => {
    setActiveTab(tab);
  });

  return (
    <div className={styles.container}>
      {
        Object.keys(TABS).map((tab) => (
          <TabButton
            onClick={() => handleClick(tab)}
            isActive={activeTab === tab}
            icon={tab}
          />
        ))
      }
    </div>
  );
}
