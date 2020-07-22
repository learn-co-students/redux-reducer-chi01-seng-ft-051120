export function manageFriends(state, action){
    switch (action.type) {
        case 'ADD_FRIEND':
            let newFriends = state.friends.slice()
            newFriends.push(action.friend)
            return {friends: newFriends}
        case 'REMOVE_FRIEND':
            let friends = state.friends.filter(friend => friend.id !== action.id)
            return {friends: friends}
        default: 
            return state;
    }
}
