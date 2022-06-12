import PropTypes from 'prop-types';
import clsx from 'clsx';

import styles from './TabButton.module.scss';
import './TabButton.module.scss';

import { ReactComponent as Activities } from '../../../../assets/icons/activities.svg';
import { ReactComponent as AnimalsAndNature } from '../../../../assets/icons/animals_and_nature.svg';
import { ReactComponent as Custom } from '../../../../assets/icons/custom.svg';
import { ReactComponent as Flags } from '../../../../assets/icons/flags.svg';
import { ReactComponent as FoodAndDrink } from '../../../../assets/icons/food_and_drink.svg';
import { ReactComponent as FrequentlyUsed } from '../../../../assets/icons/frequently_used.svg';
import { ReactComponent as Objects } from '../../../../assets/icons/objects.svg';
import { ReactComponent as SmileysAndPeople } from '../../../../assets/icons/smileys_and_people.svg';
import { ReactComponent as Symbols } from '../../../../assets/icons/symbols.svg';
import { ReactComponent as TravelAndPlaces } from '../../../../assets/icons/travel_and_places.svg';

import * as IconConstants from '../../../../constants/IconConstants';

function getIcon(icon) {
  switch (icon) {
    case IconConstants.ACTIVITIES:
      return Activities;
    case IconConstants.ANIMALS_AND_NATURE:
      return AnimalsAndNature;
    case IconConstants.CUSTOM:
      return Custom;
    case IconConstants.FLAGS:
      return Flags;
    case IconConstants.FOOD_AND_DRINK:
      return FoodAndDrink;
    case IconConstants.FREQUENTLY_USED:
      return FrequentlyUsed;
    case IconConstants.OBJECTS:
      return Objects;
    case IconConstants.SMILEYS_AND_PEOPLE:
      return SmileysAndPeople;
    case IconConstants.SYMBOLS:
      return Symbols;
    case IconConstants.TRAVEL_AND_PLACES:
      return TravelAndPlaces;
    default:
      return null;
  }
}

export default function TabButton(props) {
  const { icon, isActive, onClick } = props;
  const IconComponent = getIcon(icon);
  const classNames = clsx(styles.container, {
    [styles.selected]: isActive,
  });

  return (
    <button type="button" className={classNames} onClick={onClick}>
      <IconComponent fill="#ccc" stroke="#ccc" />
    </button>
  );
}

TabButton.propTypes = {
  isActive: PropTypes.bool,
  icon: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

TabButton.defaultProps = {
  isActive: false,
};
