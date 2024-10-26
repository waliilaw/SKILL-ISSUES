import { useState, useEffect } from 'react';
import './Card.css';
import TinderCard from 'react-tinder-card';
import { collection, onSnapshot } from 'firebase/firestore';
import database from './firebase';

function Card() {
    const [people, setPeople] = useState([]);

    useEffect(() => {
        const peopleCollection = collection(database, 'people');

        const unsubscribe = onSnapshot(peopleCollection, (snapshot) => {
            setPeople(snapshot.docs.map((doc) => doc.data()));
        });

        // Cleanup the listener on component unmount
        return () => unsubscribe();
    }, []);

    return (
        <>
            <h1>Cards are here</h1>
            <div className='card-container'>
                {people.map((person) => (
                    <TinderCard
                        className="swipe"
                        key={person.name}
                        preventSwipe={['up', 'down']}
                    >
                        <div
                            style={{ backgroundImage: `url(${person.url})` }}
                            className="card"
                        >
                            <h3>{person.name}</h3>
                        </div>
                    </TinderCard>
                ))}
            </div>
        </>
    );
}

export default Card;