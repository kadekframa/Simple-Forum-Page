import React from 'react';
import './PopularDiscussion.css';
import LabelNumber from './LabelNumber';

const PopularDiscussion = () => {
    return (
        <div className='top-discussion-wrapper'>
          <h2 className='popular-discussion'>Diskusi 5 teratas</h2>
          <article className='top-discussion'><LabelNumber number={1} /> <a href='/'> Bersihkan laptop dari butiran debu</a></article>
          <article className='top-discussion'><LabelNumber number={2} /> <a href='/'> Cara akses website menggunakan koneksi openVPN</a></article>
          <article className='top-discussion'><LabelNumber number={3} /> <a href='/'> Batas aman overclock PC rakitan</a></article>
          <article className='top-discussion'><LabelNumber number={4} /> <a href='/'>Cara mengetahui akun Facebook di-hack melalui aplikasi</a></article>
          <article className='top-discussion'><LabelNumber number={5} /> <a href='/'>Tutorial: langkah-langkah mencegah website untuk track user</a></article>
          
        </div>
    );
}

export default PopularDiscussion;