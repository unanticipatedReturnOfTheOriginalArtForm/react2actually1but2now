import React, {useState, useEffect} from 'react'

export default function Joke() {

    const initialJoke = {
        joke: 'Cocaine smells lovely though'
    }
    

    const [joke, setJoke] = useState(initialJoke);

    return (
        <div className="mt-4">
            <div className="card">
                <h5 className="card-header">Papa Joke, Dave:</h5>
                <div className="card-body">
                    <p className="card-text">{joke.joke}</p>
                    <a href="#" className="btn btn-primary">Get another Papa Joke, Dave</a>
                </div>
            </div>
        </div>
    )
}
