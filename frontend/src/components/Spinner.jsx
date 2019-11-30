import React from 'react'
import {connect} from 'react-redux'

const Spinner = ({loading}) => (
    <div>
        <div className={`progress ${loading ? 'isLoading' : ''}`}>
            <div className="indeterminate"></div>
        </div>
    </div>
);
const mapStateToProps = state => ({
    loading: state.loading,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Spinner);

