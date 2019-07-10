import React from 'react'
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import UpArrowUnstyled from '@material-ui/icons/ArrowUpwardSharp'
import DownArrowUnstyled from '@material-ui/icons/ArrowDownwardSharp'
import { styled } from '@material-ui/styles';

const UpArrow = styled(UpArrowUnstyled)({
  color: '#c6c6c6'
});

const DownArrow = styled(DownArrowUnstyled)({
  color: '#c6c6c6'
});

const useStyles = makeStyles(theme => ({
  root: {
    padding: 0,
    display: 'flex',
    alignItems: 'center'
  },
  postText: {
    display: 'block'
  },
  postMeta: {
    display: 'flex',
    alignItems: 'center',
    padding: '.5rem',
    '& h5': {
      padding: '.25rem',
      color: '#c6c6c6'
    }
  },
  voteCounter: {
    textAlign: 'center'
  }
}));

function Post(props) {
  const classes = useStyles();

  return (
    <div>
      <Paper className={classes.root}>
      <div className={classes.postMeta}>
        <Typography variant='h5' component='h5'>
          {props.number}  
        </Typography>

    <div className={classes.voteCounter}>
        <UpArrow onClick={() => props.trigger(prevState => {   
            let newState = [...prevState];
            newState[props.index].count++;
            return newState;
          })}/>
        <Typography variant='h5' component='h5'>
          {props.count}  
        </Typography>
        <DownArrow onClick={() => props.trigger(prevState => {   
            let newState = [...prevState];
            newState[props.index].count--;
            return newState;
          })}/>
    </div>

        <Typography variant='h5' component='h5'>
          {props.image}  
        </Typography>
      </div>
      <div className={classes.postText}>
        <Typography variant="h5" component="h3">
          {props.title}
        </Typography>
        <Typography component="p">
          <a to='#'>Comments</a>
        </Typography>
      </div>
    </Paper>
  </div>
  );
}

Post.prototype = {
  number: PropTypes.number.isRequired,
  count: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  image: PropTypes.string,
}

export default Post;

