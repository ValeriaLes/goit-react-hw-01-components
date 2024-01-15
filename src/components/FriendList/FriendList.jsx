import { List } from "./FriendList.styled";
import { FriendListItem } from "./FriendListItem";



export const Friendlist = ({ friends }) => {
  return (
    <List>
      {friends.map(friend => {
        return (
          <FriendListItem
            key={friend.id}
            avatar={friend.avatar}
            name={friend.name}
            status={friend.isOnline}
          />
        );
      })}
    </List>
  );
};

