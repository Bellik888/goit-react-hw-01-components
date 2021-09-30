import PropTypes from 'prop-types';
import s from './Statistics.module.css';

export const Statistics = ({ statistics }) => {
  return (
    <section className={s.statistics}>
      <h2 className={s.title}>Upload stats</h2>

      <ul className={s.statList}>
        {statistics.map(item => (
          <li className={s.item} key={item.id}>
            <span className={s.label}>{item.label}</span>
            <span className={s.percentage}>{item.percentage}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  id: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};
