import React,{useState} from 'react';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
  
function Like() {
const [count, setCount] =   useState(0);
  return (
    <div style={{
      margin: 'auto',
      display: 'block',
      width: 'fit-content',
      
    }}>

      <FormControlLabel
        onClick={()=> {
            setCount(count + 1);
        }}
        control={<Checkbox icon={<FavoriteBorder />} 
                  checkedIcon={<Favorite />}
          name="checkedH" />}
          label ={count}
        
      />
    </div>
  );
}
export default Like;