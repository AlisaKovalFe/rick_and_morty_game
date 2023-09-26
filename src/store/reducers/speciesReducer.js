const initialState = {
    species: [
      {
        title: 'Human',
        id: 1
      },
      {
        title: 'Alien',
        id: 2
      },
      {
        title: 'Animal',
        id: 3
      },      
    ]
};

export function speciesReducer(state = initialState, action) {
    switch (action.type) {
        
        default: {
          return state;
        }
      }
  }