import * as React from 'react';
import AgroDispenserIndicatorImage from '../images/agro-dispenser-indicator.png';
import AndroidCoursesImage from '../images/android-courses.png';
import AnimationMakingToolVideo from '../videos/animation-making-tool.mp4';
import AugmentedRealityShopFloorVideo from '../videos/augmented-reality-shop-floor.mp4';
import AutoReplyWebappVideo from '../videos/auto-reply-webapp.mp4';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import DirtBikeVideo from '../videos/dirt-bike.mp4';
import Grid from '@mui/material/Grid';
import ImageProcessingImage from '../images/image-processing.png';
import Link from '@mui/material/Link';
import ProfilerImage from '../images/profiler.png';
import SpeechToSpeechTranslationVideo from '../videos/speech-to-speech-translation.mp4';
import Typography from '@mui/material/Typography';
import WebScrappingVideo from '../videos/web-scrapping.mp4';
import WifiControlledRCCarImage from '../images/wifi-rc-car.png';

export const Projects = () => {
  return (<div className={'projects'}>
    <Typography component={'h4'} variant={'h4'}>Projects</Typography>
    <br/>
    <Grid container spacing={2}>
      <Grid item md={12}>
        <Card elevation={3}>
          <CardContent>
            <Grid container spacing={2}>
              <Grid item xs={12} md={8}>
                <Typography variant={'h5'} textAlign={'left'}>Animation making tool</Typography>
                <Typography variant={'body1'} textAlign={'right'} sx={{ fontStyle: 'italic' }}>
                  (Sep'17-Nov'17)
                </Typography>
                <Typography variant={'body1'} textAlign={'left'} sx={{ fontStyle: 'italic' }}>
                  (Guided by Prof. Parag Chaudhuri)
                </Typography>
                <Typography component={'div'} variant={'body2'} textAlign={'left'}>
                  <ul>
                    <li>
                      Project in <b>OpenGL</b> with one humanoid model and other simple toy model
                      made using triangle meshes
                    </li>
                    <li>
                      Orientations for various body parts can be changed by <b>hierarchical
                      modelling</b>
                    </li>
                    <li>Keyframes can captured to make animation by interpolation of motion frames
                    </li>
                    <li>Texturing over some of the faces</li>
                    <li>Lightening of scene using directional and focus lights</li>
                    <li>Movement of camera over a bezier curve</li>
                  </ul>
                </Typography>
                <Typography variant={'body1'} textAlign={'left'}>
                  To view the sample video play the video on right. For code&nbsp;
                  <Link href={'https://github.com/Tejesh-Raut/Animation-Making-Tool'}
                        rel={'noopener'} target={'_blank'}>click here</Link>
                </Typography>
              </Grid>
              <Grid item xs={12} md={4}>
                <CardMedia component={'video'} image={AnimationMakingToolVideo}
                           controls/>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
      <Grid item md={12}>
        <Card elevation={3}>
          <CardContent>
            <Grid container spacing={2}>
              <Grid item xs={12} md={7}>
                <Typography variant={'h5'} textAlign={'left'}>
                  Augmented-Reality in shop floor management
                </Typography>
                <Typography variant={'body1'} textAlign={'right'} sx={{ fontStyle: 'italic' }}>
                  (May'17 - Jul'17)
                </Typography>
                <Typography variant={'body1'} textAlign={'left'} sx={{ fontStyle: 'italic' }}>
                  (Guided by Yatendra Singh, Nilesh Kuber at Autodesk)
                </Typography>
                <Typography component={'div'} variant={'body2'} textAlign={'left'}>
                  <ul>
                    <li>
                      Researched in implementation of Augmented-Reality features in daily&nbsp;
                      <b>Shop-floor management</b>
                    </li>
                    <li>
                      Implemention of Virtual-buttons, Tool-path generation on detecting
                      Image-target using <b>Vuforia</b>
                    </li>
                    <li>Translation of an augmented 3-D tool model over the path generated</li>
                  </ul>
                </Typography>
                <Typography variant={'body1'} textAlign={'left'}>
                  To view the sample video play the video on right.
                </Typography>
              </Grid>
              <Grid item xs={12} md={5}>
                <CardMedia component={'video'} image={AugmentedRealityShopFloorVideo}
                           controls/>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
      <Grid item md={12}>
        <Card elevation={3}>
          <CardContent>
            <Grid container spacing={2}>
              <Grid item xs={12} md={7}>
                <Typography variant={'h5'} textAlign={'left'}>
                  Social and messaging webapp
                </Typography>
                <Typography variant={'body1'} textAlign={'right'} sx={{ fontStyle: 'italic' }}>
                  (Oct'16 - Nov'16)
                </Typography>
                <Typography variant={'body1'} textAlign={'left'} sx={{ fontStyle: 'italic' }}>
                  (Guided by Prof. S. Sudarshan)
                </Typography>
                <Typography component={'div'} variant={'body2'} textAlign={'left'}>
                  <ul>
                    <li>
                      Made social-media and messaging webapp <b>Profiler</b> like Facebook
                      using <b>Servlets</b> and <b>SQL</b> database
                    </li>
                    <li>
                      Various features like Newsfeed, Posts, Comments, Pictures, Videos, Links,
                      Followers, Messages, etc
                    </li>
                  </ul>
                </Typography>
                <Typography variant={'body1'} textAlign={'left'}>
                  For code and documentation&nbsp;
                  <Link href={'https://github.com/Tejesh-Raut/profiler-Social-WebApp'}
                        rel={'noopener'} target={'_blank'}>click here</Link>
                </Typography>
              </Grid>
              <Grid item xs={12} md={5}>
                <img src={ProfilerImage} style={{ width: '100%' }} alt={'Profiler Image'}/>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
      <Grid item md={12}>
        <Card elevation={3}>
          <CardContent>
            <Grid container spacing={2}>
              <Grid item xs={12} md={7}>
                <Typography variant={'h5'} textAlign={'left'}>
                  Image Processing
                </Typography>
                <Typography variant={'body1'} textAlign={'right'} sx={{ fontStyle: 'italic' }}>
                  (Oct'16 - Nov'16)
                </Typography>
                <Typography variant={'body1'} textAlign={'left'} sx={{ fontStyle: 'italic' }}>
                  (Guided by Prof. Suyash P. Awate and Prof. Ajit Rajwade)
                </Typography>
                <Typography component={'div'} variant={'body2'} textAlign={'left'}>
                  <ul>
                    <li>
                      <b>Coherence-enhancing diffusion</b> filtering for completion of interrupted
                      lines and enhancement of flow like patterns while preserving the edges
                    </li>
                    <li>
                      Application for <b>Face-recognition</b> using statistical method of Principal
                      Component Analysis (<b>PCA</b>)
                    </li>
                  </ul>
                </Typography>
                <Typography variant={'body1'} textAlign={'left'}>
                  For code of Coherence Enhancing Diffusion filtering&nbsp;
                  <Link
                      href={'https://github.com/Tejesh-Raut/Coherence-Enhancing-Diffusion-filtering'}
                      rel={'noopener'} target={'_blank'}>click here</Link>
                  &nbsp;and for code of Face-recognition&nbsp;
                  <Link href={'https://github.com/Tejesh-Raut/Face-Recognition-using-MATLAB'}
                        rel={'noopener'} target={'_blank'}>click here</Link>
                </Typography>
              </Grid>
              <Grid item xs={12} md={5}>
                <img src={ImageProcessingImage} style={{ width: '100%' }}
                     alt={'Image Processing Image'}/>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
      <Grid item md={12}>
        <Card elevation={3}>
          <CardContent>
            <Grid container spacing={2}>
              <Grid item xs={12} md={8}>
                <Typography variant={'h5'} textAlign={'left'}>
                  Android App for registration of courses
                </Typography>
                <Typography variant={'body1'} textAlign={'right'} sx={{ fontStyle: 'italic' }}>
                  (Oct'16)
                </Typography>
                <Typography variant={'body1'} textAlign={'left'} sx={{ fontStyle: 'italic' }}>
                  (Guided by Prof. S. Sudarshan)
                </Typography>
                <Typography component={'div'} variant={'body2'} textAlign={'left'}>
                  <ul>
                    <li>
                      App in <b>Android Studio</b> for registration of courses with postgreSQL
                      database handled by the server
                    </li>
                    <li>
                      Displaying of courses registered after login and features for adding or
                      removing courses
                    </li>
                  </ul>
                </Typography>
                <Typography variant={'body1'} textAlign={'left'}>
                  For code and documentation&nbsp;
                  <Link
                      href={'https://github.com/Tejesh-Raut/Android-app-for-registration-of-courses-in-Institute'}
                      rel={'noopener'} target={'_blank'}>click here</Link>
                </Typography>
              </Grid>
              <Grid item xs={8} md={2}>
                <img src={AndroidCoursesImage} style={{ width: '100%' }} alt={'Android app image'}/>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
      <Grid item md={12}>
        <Card elevation={3}>
          <CardContent>
            <Grid container spacing={2}>
              <Grid item xs={12} md={7}>
                <Typography variant={'h5'} textAlign={'left'}>
                  Dirt-Bike using Box-2D
                </Typography>
                <Typography variant={'body1'} textAlign={'right'} sx={{ fontStyle: 'italic' }}>
                  (Sep'15 - Nov'15)
                </Typography>
                <Typography variant={'body1'} textAlign={'left'} sx={{ fontStyle: 'italic' }}>
                  (Guided by Prof. Sharat Chandran)
                </Typography>
                <Typography component={'div'} variant={'body2'} textAlign={'left'}>
                  <ul>
                    <li>
                      2-dimensional game of dirt-bike using <b>Box-2D</b> libraries in c++ passing
                      through a series of obstacles
                    </li>
                    <li>The bike can be controlled using arrow keys</li>
                  </ul>
                </Typography>
                <Typography variant={'body1'} textAlign={'left'}>
                  To view the sample video of the game play video on right and for code&nbsp;
                  <Link
                      href={'https://github.com/Tejesh-Raut/Dirt-Bike-Simulation'}
                      rel={'noopener'} target={'_blank'}>click here</Link>
                </Typography>
              </Grid>
              <Grid item xs={12} md={5}>
                <CardMedia component={'video'} image={DirtBikeVideo} controls/>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
      <Grid item md={12}>
        <Card elevation={3}>
          <CardContent>
            <Grid container spacing={2}>
              <Grid item xs={12} md={7}>
                <Typography variant={'h5'} textAlign={'left'}>
                  Agro Dispenser and Indicator
                </Typography>
                <Typography variant={'body1'} textAlign={'right'} sx={{ fontStyle: 'italic' }}>
                  (May'15 - Jun'15)
                </Typography>
                <Typography component={'div'} variant={'body2'} textAlign={'left'}>
                  <ul>
                    <li>
                      Code in <b>VHDL</b> in <b>Xilinx ISE</b> for automation of agro-dispenser and
                      dispenser
                    </li>
                    <li>
                      Displaying of courses registered after login and features for adding or
                      removing courses
                    </li>
                  </ul>
                </Typography>
                <Typography variant={'body1'} textAlign={'left'}>
                  For code and documentation&nbsp;
                  <Link
                      href={'https://tejesh-raut.github.io/'}
                      rel={'noopener'} target={'_blank'}>click here</Link>
                </Typography>
              </Grid>
              <Grid item xs={12} md={5}>
                <img src={AgroDispenserIndicatorImage} style={{ width: '100%' }}
                     alt={'Agro Dispenser Image'}/>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
      <Grid item md={12}>
        <Card elevation={3}>
          <CardContent>
            <Grid container spacing={2}>
              <Grid item xs={12} md={7}>
                <Typography variant={'h5'} textAlign={'left'}>
                  Auto-Reply Webapp
                </Typography>
                <Typography variant={'body1'} textAlign={'right'} sx={{ fontStyle: 'italic' }}>
                  (May'16 - Jul'16)
                </Typography>
                <Typography variant={'body1'} textAlign={'left'} sx={{ fontStyle: 'italic' }}>
                  (Guided by Yugal Mullick at Tech Mahindra)
                </Typography>
                <Typography component={'div'} variant={'body2'} textAlign={'left'}>
                  <ul>
                    <li>
                      Built a webapp for <b>auto-generated replies</b> to queries asked by user to
                      create an impression of live chatting using Servlets, Selenium and Swing
                    </li>
                    <li>Includes web-crawling feature to display fares</li>
                  </ul>
                </Typography>
                <Typography variant={'body1'} textAlign={'left'}>
                  To view the sample video of the game play video on right and for code&nbsp;
                  <Link
                      href={'https://github.com/Tejesh-Raut/Auto-Reply-WebApp'}
                      rel={'noopener'} target={'_blank'}>click here</Link>
                </Typography>
              </Grid>
              <Grid item xs={12} md={5}>
                <CardMedia component={'video'} image={AutoReplyWebappVideo} controls/>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
      <Grid item md={12}>
        <Card elevation={3}>
          <CardContent>
            <Grid container spacing={2}>
              <Grid item xs={12} md={7}>
                <Typography variant={'h5'} textAlign={'left'}>
                  Speech to Speech Translation
                </Typography>
                <Typography variant={'body1'} textAlign={'right'} sx={{ fontStyle: 'italic' }}>
                  (May'16 - Jul'16)
                </Typography>
                <Typography variant={'body1'} textAlign={'left'} sx={{ fontStyle: 'italic' }}>
                  (Guided by Yugal Mullick at Tech Mahindra)
                </Typography>
                <Typography component={'div'} variant={'body2'} textAlign={'left'}>
                  <ul>
                    <li>
                      Application for <b>Speech to Speech translation</b> from English to Hindi
                    </li>
                    <li>Use of Sphinx for speech-recognition, moses for text translation and
                      festival for reading text
                    </li>
                  </ul>
                </Typography>
                <Typography variant={'body1'} textAlign={'left'}>
                  To view the sample video of the game play video on right and for code&nbsp;
                  <Link
                      href={'https://github.com/Tejesh-Raut/English-Speech-to-Hindi-Speech-Translation'}
                      rel={'noopener'} target={'_blank'}>click here</Link>
                </Typography>
              </Grid>
              <Grid item xs={12} md={5}>
                <CardMedia component={'video'} image={SpeechToSpeechTranslationVideo} controls/>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
      <Grid item md={12}>
        <Card elevation={3}>
          <CardContent>
            <Grid container spacing={2}>
              <Grid item xs={12} md={7}>
                <Typography variant={'h5'} textAlign={'left'}>
                  Web-scrapping
                </Typography>
                <Typography variant={'body1'} textAlign={'right'} sx={{ fontStyle: 'italic' }}>
                  (Nov'15 - Dec'15)
                </Typography>
                <Typography variant={'body1'} textAlign={'left'} sx={{ fontStyle: 'italic' }}>
                  (Guided by Nikhil Kulkarni at Darwin Inc.)
                </Typography>
                <Typography component={'div'} variant={'body2'} textAlign={'left'}>
                  <ul>
                    <li>
                      Architect and build the backend framework to integrate supplier APIs, Web
                      portals etc
                    </li>
                    <li>Designed a Web-scraper using Web-driver APIs in <b>Selenium</b> and Webapp
                      using <b>Spring</b> framework
                    </li>
                  </ul>
                </Typography>
                <Typography variant={'body1'} textAlign={'left'}>
                  To view the sample video of the game play video on right.
                </Typography>
              </Grid>
              <Grid item xs={12} md={5}>
                <CardMedia component={'video'} image={WebScrappingVideo} controls/>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
      <Grid item md={12}>
        <Card elevation={3}>
          <CardContent>
            <Grid container spacing={2}>
              <Grid item xs={12} md={7}>
                <Typography variant={'h5'} textAlign={'left'}>
                  Wifi controlled RC car
                </Typography>
                <Typography variant={'body1'} textAlign={'right'} sx={{ fontStyle: 'italic' }}>
                  (May'15 - Jun'15)
                </Typography>
                <Typography component={'div'} variant={'body2'} textAlign={'left'}>
                  <ul>
                    <li>
                      Made a wifi controlled RC car named Third-eye using a Raspberry Pi under
                      Institute Technical Summer Project (ITSP) body
                    </li>
                    <li>
                      The car can be controlled from web-browser from any device connected over the
                      local wifi network and gives live video-streaming
                    </li>
                  </ul>
                </Typography>
                <Typography variant={'body1'} textAlign={'left'}>
                  Its documentation can be seen&nbsp;
                  <Link
                      href={'http://www.stab-iitb.org/itsp/documentation?id=55'}
                      rel={'noopener'} target={'_blank'}>here</Link>
                  &nbsp;and for code&nbsp;
                  <Link
                      href={'https://github.com/Tejesh-Raut/Third_eye'}
                      rel={'noopener'} target={'_blank'}>click here</Link>
                </Typography>
              </Grid>
              <Grid item xs={12} md={5}>
                <img src={WifiControlledRCCarImage} style={{ width: '100%' }}
                     alt={'Wifi RC Car Image'}/>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
      <Grid item md={12}>
        <Card elevation={3}>
          <CardContent>
            <Grid container spacing={2}>
              <Grid item xs={12} md={12}>
                <Typography variant={'h5'} textAlign={'left'}>
                  Branch Change Application
                </Typography>
                <Typography variant={'body1'} textAlign={'right'} sx={{ fontStyle: 'italic' }}>
                  (Oct'15 - Nov'15)
                </Typography>
                <Typography variant={'body1'} textAlign={'left'} sx={{ fontStyle: 'italic' }}>
                  (Guided by Prof. Sharat Chandran)
                </Typography>
                <Typography component={'div'} variant={'body2'} textAlign={'left'}>
                  <ul>
                    <li>
                      Built a webapp using Django-framework for branch change in IITB
                    </li>
                    <li>
                      Provides online interface for selecting choices for many students and then
                      displays the final allotment after applying many constraints
                    </li>
                  </ul>
                </Typography>
                <Typography variant={'body1'} textAlign={'left'}>
                  For documentation and code&nbsp;
                  <Link
                      href={'https://github.com/Tejesh-Raut/Branch-Change-Application'}
                      rel={'noopener'} target={'_blank'}>click here</Link>
                </Typography>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
      <Grid item md={12}>
        <Card elevation={3}>
          <CardContent>
            <Grid container spacing={2}>
              <Grid item xs={12} md={12}>
                <Typography variant={'h5'} textAlign={'left'}>
                  Banking Application
                </Typography>
                <Typography variant={'body1'} textAlign={'right'} sx={{ fontStyle: 'italic' }}>
                  (Oct'14 - Nov'14)
                </Typography>
                <Typography variant={'body1'} textAlign={'left'} sx={{ fontStyle: 'italic' }}>
                  (Guided by Prof. Supratik Chakraborty and Prof. Deepak B Phatak)
                </Typography>
                <Typography component={'div'} variant={'body2'} textAlign={'left'}>
                  <ul>
                    <li>
                      Developed a c++ based application for maintaining data by a banking assistant
                    </li>
                    <li>
                      Graphical user interface with buttons using simplecpp package
                    </li>
                  </ul>
                </Typography>
                <Typography variant={'body1'} textAlign={'left'}>
                  Further description and code can be seen&nbsp;
                  <Link
                      href={'https://github.com/Tejesh-Raut/Banking-Application/'}
                      rel={'noopener'} target={'_blank'}>here</Link>
                </Typography>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
      <Grid item md={12}>
        <Card elevation={3}>
          <CardContent>
            <Grid container spacing={2}>
              <Grid item xs={12} md={12}>
                <Typography variant={'h5'} textAlign={'left'}>
                  Management
                </Typography>
                <Typography variant={'body1'} textAlign={'right'} sx={{ fontStyle: 'italic' }}>
                  (Aug'15 - Sep'15)
                </Typography>
                <Typography variant={'body1'} textAlign={'left'} sx={{ fontStyle: 'italic' }}>
                  (Guided by Prof. Arti Kalro)
                </Typography>
                <Typography component={'div'} variant={'body2'} textAlign={'left'}>
                  <ul>
                    <li>
                      Presentation on the distribution network and strategy of HUL (Hindustan
                      Unilever Limited) company
                    </li>
                    <li>
                      Research on history, strategy and growth plan of Unilever in India
                    </li>
                  </ul>
                </Typography>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  </div>);
};
