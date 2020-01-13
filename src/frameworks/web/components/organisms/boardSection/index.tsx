import * as className from 'classnames/bind';
import * as React from "react";
import Presenters from '../../../../../domains/interfaces/presenters';
import Actions from '../../../../../domains/interfaces/frameworks';
import BoardList from '../../molecules/boardList';
import * as styles from './index.scss';

const cx = className.bind(styles);

interface Props {
  presenters: Presenters;
  actions: Actions;
}

const BoardSection: React.FC<Props> = (props) => {
  const { presenters, actions } = props;

  return (
    <div className={cx("board-list")}>
      <section>
        <h2>Board List</h2>
        <BoardList presenters={presenters} actions={actions} />
      </section>
    </div>
  );
};

export default BoardSection;