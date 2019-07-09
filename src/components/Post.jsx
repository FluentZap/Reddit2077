import React from 'react'
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import UpArrow from '@material-ui/icons/ArrowUpwardSharp'
import DownArrow from '@material-ui/icons/ArrowDownwardSharp'

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
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
      padding: '.25rem'
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
        <UpArrow/>
        <Typography variant='h5' component='h5'>
          {props.count}  
        </Typography>
        <DownArrow/>
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

