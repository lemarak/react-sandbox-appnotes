const INITIAL_STATE = {
  selectedNote: {
    title: "",
    subtitle: "",
    body: "",
    id: "",
    toggle: false,
  },
};

export default function selectedReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "SEENOTE": {
      return {
        selectedNote: {
          ...action.payload,
          toggle: true,
        },
      };
    }
    case "RESETNOTE": {
      return INITIAL_STATE;
    }
  }
  return state;
}
