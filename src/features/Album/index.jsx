import React from 'react';
import AlbumList from './components/AlbumList';

AlbumFeature.propTypes = {

};

function AlbumFeature(props) {
    const albumList = [
        {
            id: 1,
            name: 'Nhạc Hoa Thịnh Hành',
            thumbnailURL: 'https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/f/9/5/b/f95b9ec1cb7c2ae0c84307dbcb6ffb4e.jpg'
        },
        {
            id: 2,
            name: 'Rap Việt Nghe Là Ghiền',
            thumbnailURL: 'https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/f/b/3/4/fb3413a5072cabdeb48583f9f596afc4.jpg'
        },
        {
            id: 3,
            name: 'Trào Lưu Nhạc Hot',
            thumbnailURL: 'https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/1/f/c/6/1fc60053adeae51c077502d969686a90.jpg'
        },
    ]
    return (
        <div>
            <h2>Có thể bạn sẽ thích đấy</h2>
            <AlbumList albumList={albumList} />
        </div>
    );
}

export default AlbumFeature;