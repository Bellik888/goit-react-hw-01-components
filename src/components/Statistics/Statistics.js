// import PropTypes from 'prop-types';
import s from './Statistics.module.css';
import { StatisticsItem } from './StatisticsItem/StatisticsItem';

export const Statistics = ({ stats, title = 'Upload stats' }) => {
  return (
    <section className={s.statistics}>
      {title && <h2 className={s.title}>{title}</h2>}

      <ul className={s.statList}>
        {stats.map(item => (
          <StatisticsItem
            key={item.id}
            label={item.label}
            percentage={item.percentage}
          />
        ))}
      </ul>
    </section>
  );
};
