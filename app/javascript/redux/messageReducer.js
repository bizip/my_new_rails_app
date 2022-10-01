import axios from 'axios';

// Action goes here
const GET_MESSAGE = 'messages/message';

// Action Creator goes here
const getMessage = (message) => ({ type: GET_MESSAGE, payload: message});

// Reducer
export default function greetingsReducer(state = [], action = {}) {
  switch (action.type) {
    case GET_MESSAGE:
      return action.payload;
    default:
      return state;
  }
}

// Side Effects goes here
const fetchMessage = async () => {
  await axios.get('api/messages').then((response) => {
    return response.data.message
  });
};

export { fetchMessage, getMessage };