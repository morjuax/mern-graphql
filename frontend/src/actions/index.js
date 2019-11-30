import axios from 'axios';

// consts init app
export const [REQUEST_LOAD, REQUEST_LIST_SUCCESS, REQUEST_LIST_FAIL, REQUEST_SAVE_FAIL] =
    [`REQUEST_LOAD`, `REQUEST_LIST_SUCCESS`, `REQUEST_LIST_FAIL`, `REQUEST_SAVE_FAIL`];

export const [REQUEST_VIEW_SUCCESS, REQUEST_VIEW_FAIL] =
    [`REQUEST_VIEW_SUCCESS`, `REQUEST_VIEW_FAIL`];


export const handleInput = (e) => {
    return (dispatch) =>
        dispatch({
            type: "HANDLE_INPUT",
            e
        })
};
export const handleCheck = (e) => {
    return (dispatch) =>
        dispatch({
            type: "HANDLE_CHECK",
        });
};

export const initApp = () => {
    return async (dispatch) => {
        dispatch({
            type: REQUEST_LOAD,
            loading: true,
        });

        // let response = await axios.post(`/api/characters`);
        // if (response.data.status) {
        //     await dispatchRequestListLoad(dispatch);
        // } else { //TODO, make reducer respective
        //     dispatch({
        //         type: REQUEST_SAVE_FAIL,
        //         data: response.data
        //     })
        // }
        await dispatchRequestListLoad(dispatch);
    }
};

export const viewCharacter = (id) => {
    return async (dispatch) => {
        dispatch({
            type: 'REQUEST_VIEW_LOAD',
            loading: true,
            isView: true
        });
        let response = await axios.get(`/api/characters/${id}`);
        console.log(response);
        if (response.data.status) {
            dispatch({
                type: REQUEST_VIEW_SUCCESS,
                character: response.data.data
            });
        } else {
            dispatch({
                type: REQUEST_VIEW_FAIL,
                data: response.data
            });
        }

    }
};

export const searchCharacter = () => {
    return async (dispatch, getState) => {
        let {
            formSearch, characters
        } = getState();

        dispatch({
            type: 'REQUEST_SEARCH_LOAD',
        });
        let response = [];
        if (formSearch.textSearch === '') {
            dispatch({
                type: 'REQUEST_NO_FILTERED_LOAD',
                loading: true
            });
            dispatch({
                type: 'REQUEST_NO_FILTERED_SUCCESS',
            });
        } else {
            response = await searchCharacterAUX(formSearch, characters);
        }

        dispatch({
            type: 'REQUEST_FILTERED_SUCCESS',
            charactersFiltered: response
        });
    }
};

//TODO:FIXME
export const backPage = () => {
    return async (dispatch) => {
        dispatch({
            type: 'BACK_PAGE'
        })
    }
};
//TODO:FIXME
export const nextPage = () => {
    return async (dispatch) => {
        dispatch({
            type: 'NEXT_PAGE'
        })
    }

};

const dispatchRequestListLoad = async (dispatch) => {
    dispatch({
        type: REQUEST_LOAD,
        loading: true,
    });
    // let response = await axios.get('/api/characters');
    // if (response.data.status) {
    //     dispatch({
    //         type: REQUEST_LIST_SUCCESS,
    //         characters: response.data.data
    //     });
    // } else { //TODO, make reducer respective
    //     dispatch({
    //         type: REQUEST_LIST_FAIL,
    //         data: response.data
    //     })
    // }
};


const searchCharacterAUX = async (formSearch, characters) => {
    if (formSearch.searchByName) {
        return await characters.filter(character => character.name.includes(formSearch.textSearch));
    } else if (formSearch.searchByHouse) {
        return await characters.filter(character => {
            return character.house !== undefined ? character.house.includes(formSearch.textSearch) : false;
        });
    }
    return [];
};
