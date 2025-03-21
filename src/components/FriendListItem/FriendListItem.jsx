import clsx from 'clsx';
import s from './FriendListItem.module.css';

const FriendListItem = ({ friend }) => {
    return (
        <div>
            <img src="{friend.avatar}" alt="Avatar" width="48" />
            <p>{friend.name}</p>
            <p>{friend.isOnline ? 'online' : 'offline'}</p>
        </div>
    );
}

export default FriendListItem;