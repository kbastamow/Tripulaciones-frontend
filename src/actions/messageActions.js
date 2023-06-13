// ./actions/messageActions.js


// Action Creators
export const sendMessage = (message) => ({
  type: 'SEND_MESSAGE',
  payload: message,
});

export const receiveMessage = (message) => ({
  type: 'RECEIVE_MESSAGE',
  payload: message,
});

export const markMessageAsRead = (messageId) => ({
  type: 'MARK_MESSAGE_AS_READ',
  payload: messageId,
});

export const deleteMessage = (messageId) => ({
  type: 'DELETE_MESSAGE',
  payload: messageId,
});