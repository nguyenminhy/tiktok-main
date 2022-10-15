import classNames from 'classnames/bind';
import style from './Home.module.scss';
import Video from '~/components/Video';

const cx = classNames.bind(style);

function Home() {
    return (
        <div className={cx('ListVideoContainer')}>
            <Video />
        </div>
    );
}

export default Home;
