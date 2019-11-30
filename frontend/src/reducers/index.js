import M from "materialize-css";


//TODO: FIXME
const optionsModal = {
    inDuration: 250,
    outDuration: 250,
    opacity: 0.5,
    dismissible: false,
    startingTop: "4%",
    endingTop: "10%"
};

let defaultState = {
    appTitle: 'GOT APP',
    formSearch: {
        textSearch: '',
        searchByName: true,
        searchByHouse: false,
    },
    isFiltered: false,
    characters: [],
    charactersFiltered: [],
    character: {},
    loading: false,
    limit: 10,
    isView: false,
    page: {
        init: 0,
        last: 9
    },
};

const mainReducer = (state = defaultState, action) => {

    switch (action.type) {
        case 'HANDLE_INPUT':
            let {value, name} = action.e.target;
            return {
                ...state,
                formSearch: {
                    ...state.formSearch,
                    [name]: value
                }
            };
        case 'HANDLE_CHECK':
            return {
                ...state,
                formSearch: {
                    ...state.formSearch,
                    searchByHouse: !state.formSearch.searchByHouse,
                    searchByName: state.formSearch.searchByHouse
                }
            };
        //***LIST***//
        case 'REQUEST_LOAD':
            if (action.e !== undefined) {
                action.e.preventDefault();
            }
            return {
                ...state,
                loading: true
            };
        case 'REQUEST_LIST_SUCCESS':
            return {
                ...state,
                loading: false,
                characters: action.characters,
                limit: action.characters.length
            };
        //****VIEW***//
        case 'REQUEST_VIEW_SUCCESS':
            openModal();
            return {
                ...state,
                loading: false,
                character: action.character
            };
        case 'REQUEST_VIEW_LOAD':
            return {
                ...state,
                loading: true,
                isView: action.isView
            };
        case 'REQUEST_SEARCH_LOAD':
            if (state.formSearch.textSearch !== '') {
                return {
                    ...state,
                    isFiltered: true,
                    loading: true
                }
            }
            return state;
        case 'REQUEST_FILTERED_SUCCESS':
            return {
                ...state,
                loading: false,
                charactersFiltered: action.charactersFiltered,
            };
        case 'REQUEST_NO_FILTERED_LOAD':
            return {
                ...state,
                loading: true,
            };
        case 'REQUEST_NO_FILTERED_SUCCESS':
            return {
                ...state,
                isFiltered: false,
                loading: false,
                charactersFiltered: action.charactersFiltered,
            };
        case 'BACK_PAGE':
            return {
                ...state,
                page: {
                    init: state.page.init - 10,
                    last: state.page.last - 10
                }
            };
        case 'NEXT_PAGE':
            return {
                ...state,
                page: {
                    init: state.page.init + 10,
                    last: state.page.last + 10
                }
            };
        default:
            return state;
    }
};

//TODO: FIXME
let openModal = () => {
    let elem = document.querySelector('.modal');
    M.Modal.init(elem, optionsModal);
    let instance = M.Modal.getInstance(elem);
    instance.open();
};


export default mainReducer;