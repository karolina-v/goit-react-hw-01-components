import React from "react";
import PropTypes from "prop-types";
import FriendListItem from './FriendListItem';
import s from './FriendList.module.css';

const FriendList = ({ friends }) => (
    <ul className={s.friendList}>
        {friends.map(friend => (
            <FriendListItem avatar={friend.avatar} name={friend.name} isOnline={friend.isOnline} key={friend.id}/>
        ))}
    </ul>
)


FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
                    id: PropTypes.number.isRequired,
                    avatar: PropTypes.string.isRequired,
                    name: PropTypes.string.isRequired,
                    isOnline: PropTypes.bool.isRequired
    })),
};

export default FriendList;