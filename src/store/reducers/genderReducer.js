const initialState = {
    genders: [
      {
        title: 'Male',
        id: 1
      },
      {
        title: 'Female',
        id: 2
      },
      {
        title: 'Genderless',
        id: 3
      },
      {
        title: 'unknown',
        id: 4
      },
    ]
};

export function genderReducer(state = initialState, action) {
    switch (action.type) {
        
        default: {
          return state;
        }
      }
  }