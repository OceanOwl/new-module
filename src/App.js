import './App.css';
import Simpsons from "./components/simpsons/simpsons";
import Rickandmorty from "./components/rickandmorty/rickandmorty";

function App() {
    return (
        <div className="App">
            <div className={'container'}>
                <Simpsons
                    simpsonName={'Homer'}
                    picture={'https://upload.wikimedia.org/wikipedia/uk/0/02/Homer_Simpson_2006.png'}
                    desc={'Homer Jay Simpson is a fictional character and the main protagonist of the American animated sitcom The Simpsons'}
                />
                <Simpsons
                    simpsonName={'Bart'}
                    picture={'https://i1.sndcdn.com/avatars-000099391844-1oczm0-t500x500.jpg'}
                    desc={'Bartholomew JoJo "Bart" Simpson[1] is a fictional character in the American animated television series The Simpsons and part of the Simpson family.'}
                />
                <Simpsons
                    simpsonName={'Marge'}
                    picture={'https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png'}
                    desc={'Marjorie Jacqueline "Marge" Simpson[1] (née Bouvier) is a character in the American animated sitcom The Simpsons and part of the eponymous family.'}
                />
            </div>

            <div className={'secondContainer'}>
                <Rickandmorty
                    itemId={'itemId'}
                    // name={'arrElement.name'}
                    // species={''}
                />
            </div>

        </div>
    );
}

export default App;
