import React from 'react';
import {connect} from 'react-redux';

const Navigation = ({title}) => (
    <nav className='light-blue darken-4'>
        <div className="container">
            <a className="brand-logo" href='/'>{title}</a>
        </div>
    </nav>
);

const mapStateToProps = state => ({
    title: state.appTitle
});
const mapDispatchToProps = dispatch => ({});


export default connect(mapStateToProps, mapDispatchToProps)(Navigation);