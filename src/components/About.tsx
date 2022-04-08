import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import { Button } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import ConstructionIcon from '@mui/icons-material/Construction';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import ProfileImage from '../images/profile-pic.jpg';
import PublicIcon from '@mui/icons-material/Public';
import SettingsIcon from '@mui/icons-material/Settings';
import SkateboardingIcon from '@mui/icons-material/Skateboarding';
import Typography from '@mui/material/Typography';

const getAge = (birthYear: number, birthMonth: number, birthDay: number): number => {
  const birthDate = new Date(birthYear, (birthMonth - 1), birthDay);
  const today = new Date();
  let age: number = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();
  if ((monthDiff < 0) || ((monthDiff == 0) && ((today.getDay() - birthDate.getDate()) < 0))) {
    age--;
  }
  return age;
};

export const About = () => {
  return (<div className={'about'}>
    <Typography component={'h4'} variant={'h4'}>About Me</Typography>
    <br/>
    <Grid container spacing={2}>
      <Grid item xs={12} md={3}>
        <Avatar
            alt={'Image'}
            src={ProfileImage}
            sx={{ width: 200, height: 200 }}
        />
      </Grid>
      <Grid item xs={12} md={9}>
        <Typography component={'h5'} variant={'h5'} color={'textSecondary'} textAlign={'left'}>
          Programmer, Traveller and Technology Enthusiast</Typography>
        <br/>
        <Typography component={'div'} variant={'body1'} color={'textSecondary'} textAlign={'left'}>
          Software Engineer at&nbsp;
          <Link href={'https://about.google/'} rel={'noopener'} target={'_blank'}>
            Google
          </Link>
        </Typography>
        <br/>
        <Typography component={'div'} variant={'body1'} color={'textSecondary'} textAlign={'left'}>
          Bachelor of Technology (B.Tech.) with honors in&nbsp;
          <Link href={'https://www.cse.iitb.ac.in/'} rel={'noopener'} target={'_blank'}>
            Computer Science & Engineering
          </Link>
          ,&nbsp;
          <Link href={'https://www.iitb.ac.in/'} rel={'noopener'} target={'_blank'}>
            Indian Institute of Technology Bombay
          </Link>
        </Typography>
        <br/>
        <Typography component={'div'} variant={'body1'} color={'textSecondary'} textAlign={'left'}>
          Master of Science in&nbsp;
          <Link href={'https://www.wqu.edu/programs/mscfe/'} rel={'noopener'} target={'_blank'}>
            Financial Engineering
          </Link>
          ,&nbsp;
          <Link href={'https://www.wqu.edu/'} rel={'noopener'} target={'_blank'}>
            WorldQuant University
          </Link>
        </Typography>
      </Grid>
    </Grid>
    <br/>
    <Grid container spacing={2}>
      <Grid item xs={12} md={4}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={12}>
            <Card elevation={3}>
              <CardContent>
                <SettingsIcon fontSize={'large'}/>
                <Typography variant={'body2'} color={'text.secondary'}>
                  Java, Typescript, Bash, Scala, Spark, C++, Python, SQL
                </Typography>
                <Typography gutterBottom variant={'h5'} component={'div'}>
                  Programming
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={12}>
            <Card elevation={3}>
              <CardContent>
                <ConstructionIcon fontSize={'large'}/>
                <Typography variant={'body2'} color={'text.secondary'}>
                  Git, Jenkins, Hadoop, HBase, Android Studio, Impala, OpenGL, Matlab
                </Typography>
                <Typography gutterBottom variant={'h5'} component={'div'}>
                  Softwares
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={12}>
            <Card elevation={3}>
              <CardContent>
                <PublicIcon fontSize={'large'}/>
                <Typography variant={'body2'} color={'text.secondary'}>
                  React, Redux, Material UI, HTML, CSS
                </Typography>
                <Typography gutterBottom variant={'h5'} component={'div'}>
                  Web Development
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={12}>
            <Card elevation={3}>
              <CardContent>
                <SkateboardingIcon fontSize={'large'}/>
                <Typography variant={'body2'} color={'text.secondary'}>
                  Travelling, Trekking, Programming, Games, Social Service
                </Typography>
                <Typography gutterBottom variant={'h5'} component={'div'}>
                  Hobbies
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} md={8}>
        <Paper elevation={3}>
          <br/>
          <Grid container spacing={2}>
            <Grid item xs={3} md={4}>
              <Typography variant={'body1'} color={'text.secondary'} textAlign={'left'}
                          paddingLeft={3}>
                Name
              </Typography>
            </Grid>
            <Grid item xs={9} md={8}>
              <Typography variant={'body1'} color={'text.secondary'} textAlign={'left'}
                          paddingLeft={3}>
                Tejesh Raut
              </Typography>
            </Grid>
          </Grid>
          <br/>
          <Grid container spacing={2}>
            <Grid item xs={3} md={4}>
              <Typography variant={'body1'} color={'text.secondary'} textAlign={'left'}
                          paddingLeft={3}>
                Age
              </Typography>
            </Grid>
            <Grid item xs={9} md={8}>
              <Typography variant={'body1'} color={'text.secondary'} textAlign={'left'}
                          paddingLeft={3}>
                {getAge(1996, 2, 22)} years
              </Typography>
            </Grid>
          </Grid>
          <br/>
          <Grid container spacing={2}>
            <Grid item xs={3} md={4}>
              <Typography variant={'body1'} color={'text.secondary'} textAlign={'left'}
                          paddingLeft={3}>
                Email
              </Typography>
            </Grid>
            <Grid item xs={9} md={8} rowSpacing={20}>
              <Typography variant={'body1'} color={'text.secondary'} textAlign={'left'}
                          paddingLeft={3}>
                <Link href={'mailto:tejesh22.raut@gmail.com'}>
                  tejesh22.raut@gmail.com
                </Link>
              </Typography>
            </Grid>
          </Grid>
          <br/>
          <Grid container spacing={2}>
            <Grid item xs={3} md={4}>
              <Typography variant={'body1'} color={'text.secondary'} textAlign={'left'}
                          paddingLeft={3}>
                Website
              </Typography>
            </Grid>
            <Grid item xs={9} md={8}>
              <Typography variant={'body1'} color={'text.secondary'} textAlign={'left'}
                          paddingLeft={3}>
                <Link href={'https://tejesh-raut.github.io/'} rel={'noopener'} target={'_blank'}>
                  tejesh-raut.github.io
                </Link>
              </Typography>
            </Grid>
          </Grid>
          <br/>
          <Grid container spacing={2}>
            <Grid item xs={3} md={4}>
              <Typography variant={'body1'} color={'text.secondary'} textAlign={'left'}
                          paddingLeft={3}>
                Address
              </Typography>
            </Grid>
            <Grid item xs={9} md={8}>
              <Typography variant={'body1'} color={'text.secondary'} textAlign={'left'}
                          paddingLeft={3}>
                Beed - 431122, Maharashtra
              </Typography>
            </Grid>
          </Grid>
          <br/>
          <Button href={'/resume.pdf'} rel={'noopener'} target={'_blank'} variant={'contained'}>View/Download
            Resume</Button>
          <br/>
          <br/>
          <div>
            <iframe className={'mymap'}
                    src={'https://www.google.com/maps/d/embed?mid=1Y2M6LWeN2fmlwPv1ywb31STA4QqVacz0&z=4'}/>
          </div>
        </Paper>
      </Grid>
    </Grid>
  </div>);
};
