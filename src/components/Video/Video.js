import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import Button from '../Button';
import { MusicIcon } from '../Icons';
import style from './Video.module.scss';

const cx = classNames.bind(style);

function Video() {
    return (
        <div className={cx('wrapper')}>
            <Link to="/">
                <img
                    className={cx('avatar')}
                    src="https://p9-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/ab697907ea64a03f8e7808906fffef6b.jpeg?x-expires=1665378000&x-signature=M%2FzjFYZhims9ELjD6RwDS0lR9b0%3D"
                    alt="ẢNh"
                />
            </Link>
            <div className={cx('content-container')}>
                <div className={cx('content-info')}>
                    <Link to="/" className={cx('text-info')}>
                        <strong className={cx('info-nickname')}>Nickname</strong>
                        <p className={cx('info-name')}>name</p>
                    </Link>
                    <Button outline small className={cx('button-content')}>
                        Follow
                    </Button>
                    <div className={cx('content-text')}>
                        <span>KHÔNG BIẾT LÀ AI NHƯNG LẠI RẤT NHIỆT TÌNH</span>
                    </div>
                    <Link to="/" className={cx('music')}>
                        <MusicIcon className={cx('icon')}></MusicIcon>
                        <strong className={cx('music-text')}>background music</strong>
                    </Link>
                </div>

                <div className={cx('content-video')}>
                    <div className={cx('vide-card')}>
                        {/* <video loop src={data?.file_url} ref={videoRef}></video> */}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Video;
