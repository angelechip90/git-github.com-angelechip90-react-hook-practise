import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CodeIcon from '@material-ui/icons/Code';
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from '@mui/material';
import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Register from '../../features/Auth/components/Register';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  link: {
    textDecoration: 'none',
    color: '#fff',
  },
}));

export default function Header() {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <CodeIcon className={classes.menuButton} />
          {/* <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton> */}
          <Typography variant="h6" className={classes.title}>
            <Link to="/" className={classes.link}>
              {' '}
              React Demo
            </Link>
          </Typography>
          <NavLink to="/products" className={classes.link}>
            <Button color="inherit">Products</Button>
          </NavLink>

          <NavLink to="/clock" className={classes.link}>
            <Button color="inherit">Clock</Button>
          </NavLink>

          {/* <NavLink to="/hero" className={classes.link}>
            <Button color="inherit">Hero</Button>
          </NavLink> */}

          <NavLink to="/magicbox" className={classes.link}>
            <Button color="inherit">Magic box</Button>
          </NavLink>

          {/* <NavLink to="/post" className={classes.link}>
            <Button color="inherit">Post List</Button>
          </NavLink> */}

          <NavLink to="/todos-list" className={classes.link}>
            <Button color="inherit">Todo List</Button>
          </NavLink>

          {/* <NavLink to="/counter" className={classes.link}>
            <Button color="inherit">Counter</Button>
          </NavLink> */}

          {/* <NavLink to="/album" className={classes.link}>
            <Button color="inherit">Album</Button>
          </NavLink> */}
          <Button color="inherit" onClick={handleClickOpen}>
            Register
          </Button>
        </Toolbar>
      </AppBar>

      <Dialog
        disableEscapeKeyDown
        //onBackdropClick
        open={open}
        //onClose={handleClose}
        aria-labelledby="form-dialog-title"
        fullWidth
      >
        {/* <DialogTitle id="form-dialog-title">Register</DialogTitle> */}
        <DialogContent>
          <Register />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
