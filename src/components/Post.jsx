import React from 'react'
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
    display: 'flex'
  },
  postText: {
    display: 'block'
  },
  postMeta: {
    display: 'flex',
    padding: '.5rem',
    '& h5': {
      padding: '.25rem'
    }
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
        <Typography variant='h5' component='h5'>
          {props.count}  
        </Typography>
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

