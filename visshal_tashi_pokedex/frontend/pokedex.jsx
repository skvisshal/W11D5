import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import {fetchAllPokemon} from "./util/api_util"
import {receiveAllPokemon, requestAllPokemon} from "./actions/pokemon_actions"
import {selectAllPokemon} from "./reducers/selectors";


document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("root");
    const store = configureStore();
    window.fetchAllPokemon = fetchAllPokemon;
    window.receiveAllPokemon = receiveAllPokemon;
    window.requestAllPokemon = requestAllPokemon;
    window.selectAllPokemon = selectAllPokemon;
    // const getSuccess = pokemon => store.dispatch(receiveAllPokemon(pokemon));
    // fetchAllPokemon().then(getSuccess);
    //console.log(store.getState())
    window.getState = store.getState;
    window.dispatch = store.dispatch;
    ReactDOM.render(<Root store ={store} />, root)
})
