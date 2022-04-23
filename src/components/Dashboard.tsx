import * as React from 'react';
import { MainListItems, SecondaryListItems } from './listItems';
import { Route, Routes } from 'react-router-dom';
import { Theme, styled } from '@mui/material/styles';
import { shallowEqual, useSelector } from 'react-redux';
import { About } from './About';
import Box from '@mui/material/Box';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { Constants } from '../utils/Constants';
import { Contact } from './Contact';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import { Education } from './Education';
import { Experience } from './Experience';
import { Home } from './Home';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';
import List from '@mui/material/List';
import MenuIcon from '@mui/icons-material/Menu';
import MuiAppBar from '@mui/material/AppBar';
import { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import MuiDrawer from '@mui/material/Drawer';
import Paper from '@mui/material/Paper';
import { Projects } from './Projects';
import { Skills } from './Skills';
import { SxProps } from '@mui/system';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import config from '../utils/config.json';
import preval from 'preval.macro';

function Copyright(props: { sx?: SxProps<Theme> }) {
  const dateTimeStamp = preval`module.exports = new Date().toISOString().split('T')[0];`;
  return (
      <Typography variant="body2" color="text.secondary" align="center" {...props}>
        {'Copyright © '}
        <Link color="inherit" href={config.authorWebpage}>
          {config.author}
        </Link>{' '}
        {new Date().getFullYear()}
        {'. Build Date: '}
        {dateTimeStamp}
        {'.'}
      </Typography>
  );
}

const drawerWidth = 240;

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
      '& .MuiDrawer-paper': {
        position: 'relative',
        whiteSpace: 'nowrap',
        width: drawerWidth,
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen,
        }),
        boxSizing: 'border-box',
        ...(!open && {
          overflowX: 'hidden',
          transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
          }),
          width: theme.spacing(7),
          [theme.breakpoints.up('sm')]: {
            width: theme.spacing(9),
          },
        }),
      },
    }),
);


type DashboardContentProps = {
  toggleTheme: () => void;
}
const DashboardContent: React.FC<DashboardContentProps> = ({ toggleTheme }) => {
  const [open, setOpen] = React.useState(false);
  const toggleDrawer = () => {
    setOpen(!open);
  };
  const theme = useSelector((state: AppState) => state.theme, shallowEqual);

  return (
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar position="absolute" open={open}>
          <Toolbar
              sx={{
                pr: '24px', // keep right padding when drawer closed
              }}
          >
            <IconButton
                edge="start"
                color="inherit"
                aria-label="open drawer"
                onClick={toggleDrawer}
                sx={{
                  marginRight: '36px',
                  ...(open && { display: 'none' }),
                }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
                component="h1"
                variant="h6"
                color="inherit"
                noWrap
                sx={{ flexGrow: 1 }}
            >
              TEJESH
            </Typography>
            <IconButton sx={{ ml: 1 }} onClick={toggleTheme} color="inherit">
              {theme.palette.mode === Constants.themeType.dark ? <Brightness7Icon /> : <Brightness4Icon />}
            </IconButton>
          </Toolbar>
        </AppBar>
        <Drawer variant="permanent" open={open}>
          <Toolbar
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-end',
                px: [1],
              }}
          >
            <IconButton onClick={toggleDrawer}>
              <ChevronLeftIcon />
            </IconButton>
          </Toolbar>
          <Divider />
          <List><MainListItems/></List>
          <Divider />
          <List><SecondaryListItems/></List>
        </Drawer>
        <Box
            component="main"
            sx={{
              backgroundColor: (theme) =>
                  theme.palette.mode === 'light'
                      ? theme.palette.grey[100]
                      : theme.palette.grey[900],
              flexGrow: 1,
              height: '100vh',
              overflow: 'auto',
            }}
        >
          <div id={'scroll-top'}/>
          <Toolbar />
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Paper
                sx={{
                  p: 2,
                  display: 'flex',
                  flexDirection: 'column',
                  height: '100%',
                }}
            >
              <Routes>
                <Route path={Constants.routes[0]} element={<Home/>} />
                <Route path={Constants.routes[1]} element={<About/>}/>
                <Route path={Constants.routes[2]} element={<Education/>}/>
                <Route path={Constants.routes[3]} element={<Experience/>}/>
                <Route path={Constants.routes[4]} element={<Skills/>}/>
                <Route path={Constants.routes[5]} element={<Projects/>}/>
                <Route path={Constants.routes[6]} element={<Contact/>}/>
              </Routes>
            </Paper>
            <Copyright sx={{ pt: 4 }} />
          </Container>
        </Box>
      </Box>
  );
};

export default DashboardContent;
