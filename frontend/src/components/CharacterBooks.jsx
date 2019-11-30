import React from 'react'
import {connect} from 'react-redux'

const CharacterBooks = ({character}) => (
    <ul>
        {character.books !== undefined ? character.books.map((item, i) => {
            return (
                <li key={i}>{item}</li>
            );
        }) : ''}
    </ul>
);

const mapStateToProps = state => ({
    character: state.character,
});


export default connect(mapStateToProps, {})(CharacterBooks)
