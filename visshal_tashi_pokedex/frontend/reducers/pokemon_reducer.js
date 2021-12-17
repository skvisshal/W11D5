import {RECIEVE_ALL_POKEMON} from "../actions/pokemon_actions"

const pokemonReducer = (state={}, action) => {
    Object.freeze(state);
    const nextState = Object.assign({}, state);
    switch(action.type) {
        case RECIEVE_ALL_POKEMON:
            return Object.assign(nextState, action.pokemon);
        default:
            return state;
    }
}

export default pokemonReducer;