import { FriendItem, FriendIsOnline } from "./FriendList.styled";


export const FriendListItem = (props) => {
    console.log(props)
    return (
      
      <FriendItem key={props.id}>
        <FriendIsOnline status={props.status}/>
        <img src={props.avatar} alt="User avatar" width="48" />
        <p>{props.name}</p>
      </FriendItem>
    );
  };
  