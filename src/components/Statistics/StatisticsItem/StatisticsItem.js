import PropTypes from 'prop-types';
import s from './StatisticsItem.module.css';

export const StatisticsItem = ({ label, percentage, bgColor }) => {
  return (
    <li className={s.item} style={{ backgroundColor: bgColor }}>
      <span className={s.label}>{label}</span>
      <span className={s.percentage}>{percentage}%</span>
    </li>
  );
};

StatisticsItem.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};
