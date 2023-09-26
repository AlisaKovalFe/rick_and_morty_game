const initialState = {
    statusOfVitality: [
      {
        title: 'Alive',
        id: 1
      },
      {
        title: 'Dead',
        id: 2
      },
      {
        title: 'unknown',
        id: 3
      },      
    ]
};

export function statusReducer(state = initialState, action) {
    switch (action.type) {
        
        default: {
          return state;
        }
      }
  }