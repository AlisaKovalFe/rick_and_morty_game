import { mainTypes } from './actionTypes';

export const addCharacterAC = (characterData) => ({
  type: mainTypes.ADD_CHARACTERS,
  payload: characterData
})

export const addCharacterThunk = () => (dispatch) => {
  const randomID = Math.round(Math.random() * 827)
  fetch(`https://rickandmortyapi.com/api/character/${randomID}`)
    .then((res) => res.json())
    .then((data) => {
      dispatch(addCharacterAC((data)));
    })
};
