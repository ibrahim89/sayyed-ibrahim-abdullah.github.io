import * as React from 'react';
import Typography from '@mui/material/Typography';

export const Home = () => {
  return (<div className={'home'}>
    <div className={'home-text'}>
      <Typography component={'h4'} variant={'h4'} align={'left'}>
        <span className={'intro'}> Hi, I'm</span>
      </Typography>
      <Typography component={'h3'} variant={'h3'} align={'left'}>
        <span className={'intro'}>
          <span className={'intro-initial'}>T</span>ejesh &nbsp;
          <span className={'intro-initial'}>R</span>aut
        </span>
      </Typography>
      <Typography component={'span'} variant={'body1'} align={'left'}>
        <p className={'designation'}>Software Engineer at Google</p>
        <p className={'designation'}>B.Tech. in Computer Science, IIT Bombay</p>
      </Typography>
    </div>
  </div>);
};
