import * as React from 'react';
import { Link, useMatch } from 'react-router-dom';
import CloudDoneIcon from '@mui/icons-material/CloudDone';
import { Constants } from '../utils/Constants';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import HomeIcon from '@mui/icons-material/Home';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import PersonIcon from '@mui/icons-material/Person';
import SchoolIcon from '@mui/icons-material/School';
import TerminalIcon from '@mui/icons-material/Terminal';
import Tooltip from '@mui/material/Tooltip';
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';

export const MainListItems = () => (
    <div>
      <Tooltip title={'Home'} placement={'right'}>
        <ListItem button component={Link} to={Constants.routes[0]}
                  selected={!!useMatch(Constants.routes[0])}>
          <ListItemIcon>
            <HomeIcon/>
          </ListItemIcon>
          <ListItemText primary="Home"/>
        </ListItem>
      </Tooltip>
      <Tooltip title={'About'} placement={'right'}>
        <ListItem button component={Link} to={Constants.routes[1]}
                  selected={!!useMatch(Constants.routes[1])}>
          <ListItemIcon>
            <PersonIcon/>
          </ListItemIcon>
          <ListItemText primary="About"/>
        </ListItem>
      </Tooltip>
      <Tooltip title={'Education'} placement={'right'}>
        <ListItem button component={Link} to={Constants.routes[2]}
                  selected={!!useMatch(Constants.routes[2])}>
          <ListItemIcon>
            <SchoolIcon/>
          </ListItemIcon>
          <ListItemText primary="Education"/>
        </ListItem>
      </Tooltip>
      <Tooltip title={'Experience'} placement={'right'}>
        <ListItem button component={Link} to={Constants.routes[3]}
                  selected={!!useMatch(Constants.routes[3])}>
          <ListItemIcon>
            <WorkHistoryIcon/>
          </ListItemIcon>
          <ListItemText primary="Experience"/>
        </ListItem>
      </Tooltip>
      <Tooltip title={'Skills'} placement={'right'}>
        <ListItem button component={Link} to={Constants.routes[4]}
                  selected={!!useMatch(Constants.routes[4])}>
          <ListItemIcon>
            <TerminalIcon/>
          </ListItemIcon>
          <ListItemText primary="Skills"/>
        </ListItem>
      </Tooltip>
      <Tooltip title={'Projects'} placement={'right'}>
        <ListItem button component={Link} to={Constants.routes[5]}
                  selected={!!useMatch(Constants.routes[5])}>
          <ListItemIcon>
            <CloudDoneIcon/>
          </ListItemIcon>
          <ListItemText primary="Projects"/>
        </ListItem>
      </Tooltip>
    </div>
);

export const SecondaryListItems = () => (
    <div>
      <Tooltip title={'Contact'} placement={'right'}>
        <ListItem button component={Link} to={Constants.routes[6]}
                  selected={!!useMatch(Constants.routes[6])}>
          <ListItemIcon>
            <ContactMailIcon/>
          </ListItemIcon>
          <ListItemText primary="Contact"/>
        </ListItem>
      </Tooltip>
    </div>
);
