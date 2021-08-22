import React,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import "../style/Post.css"; 
//import Comment1 from '../Comment1';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: '36ch',
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: 'inline',
  },
}));

function Comments() {
    const classes = useStyles();
    const [items, setItems] = useState([]);
    const [itemName, setItemName] = useState("");
    const Final = () =>{
      
      <ul>
       {items.map(item => (
         <li key={item.id}>Username:{item.name}</li>
       ))}
     </ul>
    }
    const addItem = event => {
      event.preventDefault();
      setItems([
        ...items,
        {
          id: items.length,
          name: itemName
        }
      ]);
      setItemName("");
    };

    return (
      <div>
        <form onSubmit={addItem}>
        <List className={classes.root}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="https://images.unsplash.com/photo-1609220361638-14ceb45e5e1e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max" />
        </ListItemAvatar>
        <ListItemText
          primary="username@123"
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
               
              Username@123:{Final}

            
              </Typography>
              
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />  
    </List>
            </form>
            <ul>
             {items.map(item => (
               <li key={item.id}>Username:{item.name}</li>
             ))}
           </ul>
           </div>
    
    )
}

export default Comments;