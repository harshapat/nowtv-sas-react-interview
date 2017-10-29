import { getMessages, getMembers } from './data';


// export default function getChatLog() {
//   return Promise.resolve([{
//     messageId: '12356',
//     userId: '613651251',
//     fullName: 'Robin Balmforth',
//     timestamp: new Date().toISOString(),
//     email: 'robin@example.com',
//     message: 'Hello, World!',
//     avatar: null
//   }]);
// };


export function getMembersList() {
  return {
    type: 'MEMBERS_LOADING',
    payload: getMembers()
  }
}

export default function getChatLog() {
  return {
    type: 'MESSAGES_LOADING',
    payload: getMessages()
  };
}