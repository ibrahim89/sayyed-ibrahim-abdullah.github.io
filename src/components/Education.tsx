import * as React from 'react';
import * as _ from 'lodash';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Chip from '@mui/material/Chip';
import EducationImage from '../images/education.jpg';
import EducationImage1 from '../images/education1.jpg';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import config from '../utils/config.json';

export const Education = () => {
  return (
      <div className={'education'}>
        <Typography component={'h4'} variant={'h4'}>Education</Typography>
        <br/>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Box sx={{ display: { xs: 'none', md: 'block' } }}>
              <img src={EducationImage1} style={{ width: '100%' }} alt={'Education Image'}/>
            </Box>
            <img src={EducationImage} style={{ width: '100%' }} alt={'Education Image'}/>
          </Grid>
          <Grid item xs={12} md={6}>
            {_.map(config.education, e => {
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
                          <Typography variant={'body2'} textAlign={'left'}>
                            {e.degree}
                          </Typography>
                        </CardContent>
                      </Card>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>);
            })}
          </Grid>
        </Grid>
      </div>);
};
