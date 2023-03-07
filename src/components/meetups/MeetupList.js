import classes from './MeetupList.module.css';
import MeetupItem from './MeetupItem';
import React from 'react'
function MeetupList(props) {
    return <ul className={classes.list}>
        {props.meetups.map((meetup) => (
            <MeetupItem
                key={meetup.id}
                id={meetup.id}
                image={meetup.image}
                title={meetup.title}
                address={meetup.address}
                description={meetup.description}
                meetup={meetup}
            />
        ))}
    </ul>
}
export default MeetupList;
