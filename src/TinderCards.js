import React, { useEffect, useState } from 'react'
import TinderCard from 'react-tinder-card'

import { collection, getDocs } from 'firebase/firestore';
import { db } from './firebase';

import './TinderCards.css'

const TinderCards = () => {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const dataCollection = collection(db, 'cats');
      const snapshot = await getDocs(dataCollection);
      setCats(snapshot.docs.map(doc => doc.data()));
    }

    fetchData();

    return () =>{
        //aqui se limpiaria pero no se como xd
    }

  }, [cats])

  return (
    <div>
        <div className='tinderCards__cardContainer'>
            {cats.map(cat => (
                <TinderCard 
                    className='swipe' 
                    key={cat.name}
                    preventSwipe={['up', 'down']}
                >
                    <div 
                    style={{ backgroundImage: `url(${cat.url})` }}
                    className='card'>
                        <h3>{cat.name}</h3>
                    </div>
                </TinderCard>
            ))}
        </div>
    </div>
  )
}

export default TinderCards