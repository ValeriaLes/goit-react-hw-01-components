import {Section, List, ListItem, Title} from './Statistics.styled'



export const Statistics = ({ stats, title }) => {
  
    return (
      <Section>
        {title && <Title>{title}</Title>}
        <List>
            {stats.map(stat => (
                 <ListItem key={stat.id}>
                 <span>{stat.label}</span>
                 <span>{stat.percentage}</span>
               </ListItem>
            ))}
         
        </List>
      </Section>
    );
  
};

