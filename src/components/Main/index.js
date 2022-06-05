import React from 'react';
import Contents from './Contents';
import PopularDiscussion from './PopularDiscussion';
import './Main.css';

class Main extends React.Component {
    render() {
        return (
            <main className='main-wrapper'>
                <section className="left">
                    <Contents />
                </section>

                <section className="right">
                    <PopularDiscussion  />
                </section>
            </main>
        )
    }
}

export default Main
