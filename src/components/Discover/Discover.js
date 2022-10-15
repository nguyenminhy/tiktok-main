import classNames from 'classnames/bind';
import { HashtagIcon, MusicIcon } from '../Icons';

import style from './Discover.module.scss';
import ItemContainer from './ItemContainer';

const cx = classNames.bind(style);

function Discover({ label }) {
    return (
        <div className={cx('wrapper')}>
            <p className={cx('label')}>{label}</p>
            <div className={cx('list-container')}>
                <ItemContainer icon={<HashtagIcon />} title="suthatla" />
                <ItemContainer icon={<HashtagIcon />} title="mackedoi" />
                <ItemContainer icon={<HashtagIcon />} title="sansangthaydoi" />
                <ItemContainer icon={<MusicIcon />} title="Yêu Đơn Phương Là Gì (MEE Remix) - Mee Remix" />
                <ItemContainer
                    icon={<MusicIcon />}
                    title="Về Nghe Mẹ Ru - NSND Bach Tuyet & Hứa Kim Tuyền & 14 Casper & Hoàng Dũng"
                />
                <ItemContainer icon={<MusicIcon />} title="Thiên Thần Tình Yêu - RICKY STAR" />
                <ItemContainer icon={<HashtagIcon />} title="7749hieuung" />
                <ItemContainer icon={<HashtagIcon />} title="genzlife" />
                <ItemContainer icon={<MusicIcon />} title="Tình Đã Đầy Một Tim - Huyền Tâm Môn" />
                <ItemContainer
                    icon={<MusicIcon />}
                    title="Thằng Hầu (Thái Hoàng Remix) [Short Version] - Dunghoangpham"
                />
            </div>
        </div>
    );
}

export default Discover;
