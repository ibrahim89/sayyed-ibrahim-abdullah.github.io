import * as React from 'react';
import * as _ from 'lodash';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Chip from '@mui/material/Chip';
import ExperienceImage from '../images/experience.jpg';
import ExperienceImage1 from '../images/experience1.jpg';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import config from '../utils/config.json';

export const Experience = () => {
  return (<div className={'education'}>
    <Typography component={'h4'} variant={'h4'}>Experience</Typography>
    <br/>
    <Grid container spacing={2}>
      <Box sx={{ display: { xs: 'block', md: 'none' } }}>
        <Grid item xs={12} md={6}>
            <img src={ExperienceImage} style={{ width: '100%' }} alt={'Education Image'}/>
        </Grid>
      </Box>
      <Grid item xs={12} md={6}>
        {_.map(config.experience, e => {
          return (<Card elevation={3} className={'education-card'} key={e.timePeriod}>
            <CardContent>
              <Grid container spacing={2}>
                <Grid item xs={12} md={4}>
                  <Chip label={e.timePeriod} variant={'outlined'}/>
                </Grid>
                <Grid item xs={12} md={8}>
                  <Card elevation={1}>
                    <CardContent>
                      <Typography gutterBottom variant={'h6'} component={'div'}
                                  textAlign={'left'}>
                        {e.name}
                      </Typography>
                      <Typography variant={'body1'} textAlign={'left'}>
                        {e.position}
                      </Typography>
                      <br/>
                      <Typography variant={'body2'} textAlign={'left'}>
                        {e.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
            </CardContent>
          </Card>);
        })}
      </Grid>
      <Grid item xs={12} md={6}>
        <Box sx={{ display: { xs: 'none', md: 'block' } }}>
          <img src={ExperienceImage} style={{ width: '100%' }} alt={'Experience Image'}/>
          <img src={ExperienceImage1} style={{ width: '100%' }} alt={'Experience Image'}/>
        </Box>
      </Grid>
    </Grid>
  </div>);
};
