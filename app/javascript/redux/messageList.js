import axios from 'axios';

const getMessageList = (payload) => ({ type: 'GET_MESSAGE_LIST', payload });
const initialState = [];

const fetchMessageList = () => async (dispatch) => {
  const res = await axios.get('api/v1/messages');
  dispatch(getMessageList(res.data));
}

const updateMessageList = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_MESSAGE_LIST':
      return action.payload;
    default:
      return state;
  }
};

export default updateMessageList;
export { fetchMessageList };