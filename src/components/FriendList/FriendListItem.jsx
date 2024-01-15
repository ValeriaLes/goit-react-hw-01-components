import { FriendItem, FriendIsOnline } from "./FriendListItem.styled";


export const FriendListItem = (props) => {
   
    return (
      
      <FriendItem key={props.id}>
        <FriendIsOnline status={props.status}/>
        <img src={props.avatar} alt="User avatar" width="48" />
        <p>{props.name}</p>
      </FriendItem>
    );
  };
  