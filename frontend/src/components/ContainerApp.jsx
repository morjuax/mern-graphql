import React from 'react'
import Navigation from "./Navigation";
import GotLists from "./GotLists";
import GotCharacter from "./GotCharacter";
import Spinner from "./Spinner";
import SearchCharacters from "./SearchCharacters";


const ContainerApp = () => (
    <main>
        <Spinner/>
        <Navigation/>
        <div className="container">
            <div className="row">
                <div className="col s12">
                    <div className="card">
                        <div className="card-content">
                            {/*<SearchCharacters/>*/}
                            <GotLists/>
                            {/*<GotCharacter/> /!*TODO: FIXME*!/*/}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
);

export default ContainerApp;