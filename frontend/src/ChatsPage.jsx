// import {MultiChatSocket, MultiChatWindow, useMultiChatLogic} from 'react-chat-engine-advanced';
// const ChatsPage = (props) => {
//     const chatProps = useMultiChatLogic(
//         '2dfcd845-e647-4926-b6d5-6bb3fccb00d1',
//         props.user.username, 
//         props.user.secret
//     );
//     return (
//         <div style={{ height: '100vh' }}>
//             <MultiChatSocket {...chatProps} />
//             <MultiChatWindow {...chatProps} style={{ height: '100%'}} />
//         </div>
//     )
// }

// export default ChatsPage

import { PrettyChatWindow } from 'react-chat-engine-pretty';
const ChatsPage = (props) => {
    return (
        <div style={{ height: '100vh' }}>
            <PrettyChatWindow
            projectId='2dfcd845-e647-4926-b6d5-6bb3fccb00d1'
            username={props.user.username}
            secret={props.user.secret}
            style={{ height: '100%'}}
            />
        </div>
    )
}

export default ChatsPage