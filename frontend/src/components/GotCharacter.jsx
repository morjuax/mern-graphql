import React from 'react'
import {connect} from 'react-redux'
import CharacterBooks from './CharacterBooks'

const GotCharacter = ({character, isView}) => (
        <section>
            {/*<a className="waves-effect waves-light btn modal-trigger" href="#modal1">Modal</a>*/}
            <div className="modal">
                <div className="modal-content">
                    <div className="card darken-1">
                        <div className="card-content">
                            <span className="card-title">{character.name}</span>
                            <table>
                                <tbody>
                                <tr>
                                    <th>House</th>
                                    <td>{character.name}</td>
                                </tr>
                                <tr>
                                    <th>Gender</th>
                                    <td>{character.gender}</td>
                                </tr>
                                <tr>
                                    <th>Slug</th>
                                    <td>{character.slug}</td>
                                </tr>
                                <tr>
                                    <th>Rank</th>
                                    <td>{character.pagerank !== undefined ? character.pagerank.rank : ''}</td>
                                </tr>
                                <tr>
                                    <th>Books</th>
                                    <td>
                                        <CharacterBooks/>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                        {/*<div className="card-action">*/}
                        {/*    <a href="#" className="modal-close waves-effect waves-green btn-flat">Close</a>*/}
                        {/*</div>*/}
                    </div>
                </div>
                <div className="modal-footer">
                    <a href="#" className="modal-close waves-effect waves-green btn-flat">Close</a>
                </div>
            </div>
        </section>
    );


const mapStateToProps = state => ({
    character: state.character,
    isView: state.isView,
});

export default connect(mapStateToProps, {})(GotCharacter);