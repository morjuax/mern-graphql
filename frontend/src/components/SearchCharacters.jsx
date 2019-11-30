import React from 'react'
import {handleInput, handleCheck, searchCharacter} from '../actions'
import {connect} from 'react-redux'

const SearchCharacters = ({formSearch, handleInput, handleCheck, searchCharacter}) => (
    <section>
        <div className="row valign-wrapper">
            <div className="col s8">
                <input name="textSearch" onChange={handleInput} placeholder="Sear by name or house" type="search"/>
                <small>Default search by name</small>
            </div>
            <div className="col s2">
                <p>
                    <label>
                        <input onChange={handleCheck} name="searchByHouse" type="checkbox" value="0" checked={formSearch.searchByHouse} />
                        <span>By house</span>
                    </label>
                </p>
            </div>
            <div className="col s2">
                <button onClick={() => searchCharacter()} className="btn light-blue darken-4">
                    Search
                </button>
            </div>
        </div>
    </section>
);
const mapStateToProps = state => ({
    formSearch: state.formSearch
});

const mapDispatchToProps = {handleInput, handleCheck, searchCharacter};

export default connect(mapStateToProps, mapDispatchToProps)(SearchCharacters);