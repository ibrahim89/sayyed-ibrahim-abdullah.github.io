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
          <span className={'intro-initial'}>S</span>ayyed &nbsp;
          <span className={'intro-initial'}>I</span>brahim &nbsp;
          <span className={'intro-initial'}>A</span>bdullah 
        </span>
      </Typography>
      <Typography component={'span'} variant={'body1'} align={'left'}>
        <p className={'designation'}>Software Engineer at Cognizant</p>
        <p className={'designation'}>Msc. in Computer Science, SVS College, Chhindwara (M.P)</p>
      </Typography>
    </div>
  </div>);
};
