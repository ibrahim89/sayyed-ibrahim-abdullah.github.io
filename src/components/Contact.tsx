import * as React from 'react';
import { Button } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CircularProgress from '@mui/material/CircularProgress';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import Grid from '@mui/material/Grid';
import InstagramIcon from '@mui/icons-material/Instagram';
import Link from '@mui/material/Link';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MuiAlert from '@mui/material/Alert';
import SendIcon from '@mui/icons-material/Send';
import Snackbar from '@mui/material/Snackbar';
import TextField from '@mui/material/TextField';
import TwitterIcon from '@mui/icons-material/Twitter';
import Typography from '@mui/material/Typography';

export const Contact = () => {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [subject, setSubject] = React.useState('');
  const [message, setMessage] = React.useState('');
  const [serverState, setServerState] = React.useState({
    submitting: false,
    status: ''
  });
  const [openSnackbar, setOpenSnackbar] = React.useState(false);
  const handleSnackbarClose = () => setOpenSnackbar(false);
  const sendEmail = () => {
    setServerState({ submitting: true, status: '' });
    const data = new FormData();
    data.append('name', name);
    data.append('email', email);
    data.append('subject', subject);
    data.append('message', message);
    fetch('https://script.google.com/macros/s/AKfycbxp7ixnN0zZsWfNEoVB2mNoMpT5yJq_WaC3tRm2GnDEaTlSG8mKCMRvJkYjSKejIPPX/exec', {
      mode: 'no-cors',
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: data
    })
    .then(() => {
      setServerState({ submitting: false, status: 'OK' });
      setOpenSnackbar(true);
    })
    .catch(() => setServerState({ submitting: false, status: 'ERROR' }))
    .finally(() => {
      setName('');
      setEmail('');
      setSubject('');
      setMessage('');
    });
  };
  return (<div className={'contacts'}>
    <Typography component={'h4'} variant={'h4'}>Contact Me</Typography>
    <br/>
    <Typography variant={'body1'}>
      My contact details and accounts on some famous sites:
    </Typography>
    <Grid container spacing={2}>
      <Grid item xs={3} md={2}>
        <Link href={'https://github.com/Tejesh-Raut'} rel={'noopener'} target={'_blank'}>
          <GitHubIcon fontSize={'large'} color={'action'}/>
        </Link>
      </Grid>
      <Grid item xs={3} md={2}>
        <Link href={'https://www.linkedin.com/in/tejesh-raut'} rel={'noopener'} target={'_blank'}>
          <LinkedInIcon fontSize={'large'} color={'action'}/>
        </Link>
      </Grid>
      <Grid item xs={3} md={2}>
        <Link href={'https://www.facebook.com/Tejesh.Tukaram.Raut'} rel={'noopener'}
              target={'_blank'}>
          <FacebookIcon fontSize={'large'} color={'action'}/>
        </Link>
      </Grid>
      <Grid item xs={3} md={2}>
        <Link href={'https://www.instagram.com/tejeshraut'} rel={'noopener'} target={'_blank'}>
          <InstagramIcon fontSize={'large'} color={'action'}/>
        </Link>
      </Grid>
      <Grid item xs={3} md={2}>
        <Link href={'https://twitter.com/Tejesh_Raut'} rel={'noopener'} target={'_blank'}>
          <TwitterIcon fontSize={'large'} color={'action'}/>
        </Link>
      </Grid>
    </Grid>
    <br/>
    <Link href={'mailto:tejesh22.raut@gmail.com'}>
      <Typography variant={'h5'}>
        <span className={'contact-email'}>tejesh22.raut@gmail.com</span>
      </Typography>
    </Link>
    <br/>
    <Typography variant={'body2'}>
      Beed - 431122, Maharashtra
    </Typography>
    <br/>
    <Grid container spacing={2}>
      <Grid item xs={12} md={6}>
        <Card elevation={3}>
          <CardContent>
            {(() => {
              if (serverState.submitting) {
                return (<CircularProgress/>);
              } else {
                if (serverState.status === 'ERROR') {
                  return (<div> Something went wrong.</div>);
                } else {
                  return (<div>
                    <Typography variant={'h5'} align={'left'}>
                      Say Hello
                    </Typography>
                    <TextField id="say-hello-name" label="Name" variant="standard" fullWidth
                               value={name} onChange={e => setName(e.target.value)}/>
                    <TextField id="say-hello-email" label="Email" variant="standard" fullWidth
                               value={email} onChange={e => setEmail(e.target.value)}/>
                    <TextField id="say-hello-subject" label="Subject" variant="standard" fullWidth
                               value={subject} onChange={e => setSubject(e.target.value)}/>
                    <TextField id="say-hello-message" label="Message" variant="standard" fullWidth
                               multiline minRows={3} value={message}
                               onChange={e => setMessage(e.target.value)}/>
                    <br/>
                    <br/>
                    <Button variant={'contained'} onClick={sendEmail} disabled={message === ''}
                            endIcon={<SendIcon/>}>
                      Send
                    </Button>
                  </div>);
                }
              }
            })()}
          </CardContent>
        </Card>
      </Grid>
    </Grid>
    <Snackbar open={openSnackbar} autoHideDuration={6000} onClose={handleSnackbarClose}>
      <MuiAlert onClose={handleSnackbarClose} severity="success" sx={{ width: '100%' }}>
        Message sent successfully!
      </MuiAlert>
    </Snackbar>
  </div>);
};
