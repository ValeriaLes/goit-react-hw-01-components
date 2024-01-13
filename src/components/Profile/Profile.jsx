import { Container, Photo, Name, Tag, Location, List, ListItem } from "./Profile.styled";



export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <>
      <Container>
        <div>
          <Photo src={avatar} alt={username} />
          <Name>{username}</Name>
          <Tag>{tag}</Tag>
          <Location>{location}</Location>
        </div>

        <List>
          <ListItem>
            <span >Followers</span>
            <span>{stats.followers}</span>
          </ListItem>
          <ListItem>
            <span >Views</span>
            <span >{stats.views}</span>
          </ListItem>
          <ListItem>
            <span >Likes</span>
            <span >{stats.likes}</span>
          </ListItem>
        </List>
      </Container>
    </>
  );
};
