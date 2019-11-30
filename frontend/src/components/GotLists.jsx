import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {initApp, viewCharacter, backPage, nextPage} from '../actions'
// import GotListItem from "./GotListItem";

const GotLists = ({characters, page, initApp, viewCharacter, backPage, nextPage, limit}) => {

    useEffect(() => {
        initApp();
    }, []);
    return (
        <section>
            <table className="">
                <thead>
                <tr>
                    {/*<th>#</th>*/}
                    <th>Id</th>
                    <th>Name</th>
                    <th>House</th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                {characters.slice(page.init, page.last).map((item, i) => {
                    return (
                        <tr key={i}>
                            {/*<td>{i + 1}</td>*/}
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.house}</td>
                            <td>
                                <button
                                    onClick={() => viewCharacter(item._id)}
                                    className="btn light-blue darken-4" style={{margin: '4px'}}>
                                    <i className="material-icons">remove_red_eye</i>
                                </button>
                            </td>
                        </tr>
                    );
                })}

                {/*/<GotListItem/>*/}
                </tbody>
            </table>

            <div className="row mt-1">
                <div className="col s12 right-align">
                    <button disabled={page.init <= 0}
                        onClick={() => backPage()}
                        className="btn light-blue darken-4" style={{margin: '4px'}}>
                        <i className="material-icons">arrow_back</i>
                    </button>
                    <button
                        disabled={page.last >= limit} // TODO: FIXME
                        onClick={() => nextPage()}
                        className="btn light-blue darken-4" style={{margin: '4px'}}>
                        <i className="material-icons">arrow_forward</i>
                    </button>
                </div>
            </div>
        </section>
    );
};

const mapStateToProps = state => ({
    characters: !state.isFiltered ? state.characters : state.charactersFiltered,
    limit: state.limit,
    page: state.page,
    next: state.next,
    charactersFiltered: state.charactersFiltered
});

const mapDispatchToProps = {initApp, viewCharacter, backPage, nextPage};


export default connect(mapStateToProps, mapDispatchToProps)(GotLists);