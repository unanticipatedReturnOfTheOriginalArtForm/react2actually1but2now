import React, {useState, useEffect} from 'react';
import axios from 'axios';

export default function Joke() {
    
    const [joke, setJoke] = useState('');

    function axForJoke(){
        axios
        .get('https://icanhazdadjoke.com/', {headers: {Accept: 'application/json'}})
        .then(res => setJoke(res.data))
        .catch(err => console.log(err))
    }

    useEffect(() => {
        axForJoke()
    }, [])

    const fetchJoke = () =>{
        axForJoke()
    }



    return (
        <div className="mt-4">
            <div className="card">
                <h5 className="card-header">Papa Joke, Dave:</h5>
                <div className="card-body">
                    <p className="card-text">{joke.joke}</p>
                    <a className="btn btn-primary" onClick={fetchJoke}>Get another Papa Joke, Dave</a>
                </div>
            </div>
        </div>
    )
}
