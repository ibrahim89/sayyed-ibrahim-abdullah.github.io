import * as React from 'react';
import * as _ from 'lodash';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import Grid from '@mui/material/Grid';
import LinearProgress from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
import config from '../utils/config.json';

export const Skills = () =>
    (<div className={'skills'}>
      <Typography component={'h4'} variant={'h4'}>Skills</Typography>
      <br/>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Typography component={'h5'} variant={'h5'}>Scholastic Achievements</Typography>
          <br/>
          <Grid container spacing={2}>
            {_.map(config.skills.achievements, a =>
                (<Grid item xs={12} md={6} key={a.title}>
                  <Card elevation={3}>
                    <CardContent>
                      <EmojiEventsIcon fontSize={'large'} color={'action'}/>
                      <Typography gutterBottom variant={'h6'} component={'div'}>
                        {a.title}
                      </Typography>
                      <br/>
                      <Typography variant={'body2'}>
                        {a.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>))}
          </Grid>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography component={'h5'} variant={'h5'}>Courses completed</Typography>
          <br/>
          <Grid container spacing={2}>
            {_.map(config.skills.courses, c => {
              return (<Grid item xs={12} md={6} key={c}>
                <Typography variant={'body1'}>
                  {c}
                </Typography>
              </Grid>);
            })}
          </Grid>
        </Grid>
        <Grid item xs={12} md={4}>
          <Typography component={'h5'} variant={'h5'}>Language Skills</Typography>
        </Grid>
        <Grid item xs={12} md={8}>
          {_.map(config.skills.languages, l => (<div key={l.name}>
            <Typography variant={'body1'} textAlign={'left'}>
              {l.name}
            </Typography>
            <LinearProgress variant={'determinate'} value={l.percent} color={'inherit'}/>
          </div>))}
        </Grid>
      </Grid>
    </div>);
