import React from 'react';
import './PopularDiscussion.css';
import LabelNumber from './LabelNumber';

const PopularDiscussion = () => {
    return (
        <React.Fragment>
          <h2 className='popular-discussion'>Diskusi 5 teratas</h2>
          <article className='top-discussion'><LabelNumber number={1} /> <p>Bersihkan laptop dari butiran debu</p></article>
          <article className='top-discussion'><LabelNumber number={2} /> <p>Cara akses website menggunakan koneksi openVPN</p></article>
          <article className='top-discussion'><LabelNumber number={3} /> <p>Batas aman overclock PC rakitan</p></article>
          <article className='top-discussion'><LabelNumber number={4} /> <p>Cara mengetahui akun Facebook di-hack melalu aplikasi</p></article>
          <article className='top-discussion'><LabelNumber number={5} /> <p>Tutorial: langkah-langkah mencegah website untuk track user</p></article>
        </React.Fragment>
    );
}

export default PopularDiscussion;