import React from 'react';
import {connect} from 'react-redux';
import {viewCharacter} from '../actions'

const GotListItem = ({characters, limit}) => (
    <React.Fragment>
        {characters.slice(0, limit).map((item, i) => {
            return (
                <tr key={i}>
                    <td>{i + 1}</td>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
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
    </React.Fragment>
);

const mapStateToProps = state => ({
    characters: state.characters,
    limit: state.limit,
});


export default connect(mapStateToProps, {viewCharacter})(GotListItem);