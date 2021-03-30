import React from 'react';
import Card from '../../components/Card/Card'
import Details from '../DetailsPage/Details'
import './Landing.scss';

function Landing(props) {

    return (

        <div className="Landing">
            <section className="landing-container">
                {props.tvshows.map(show => {
                    if (show.id <= 50) {
                        return <Card showinfo={show} getshowid={props.getshowid} />
                    }
                })}
            </section>
        </div>
    );
}

export default Landing;
