
import FriendListItem from '../FriendListItem/FriendListItem';
import s from './FriendList.module.css';

const FriendList = ({ friends }) => {
    return (
        <ul>
            {friends.map(friend => (
                <li key={friend.id}>
                    <FriendListItem friend={friend} />
                </li>
            ))}
        </ul>
    );
}



export default FriendList;