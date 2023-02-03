import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import ShoppingCartAppImage from '../images/shopping-cart-app.jpg';

export const Projects = () => {
  return (<div className={'projects'}>
    <Typography component={'h4'} variant={'h4'}>Projects</Typography>
    <br/>
    <Grid container spacing={2}>
      {/**Project In Cognizant with MGM Team */}
      <Grid item md={12}>
        <Card elevation={3}>
          <CardContent>
            <Grid container spacing={2}>
              <Grid item xs={12} md={12}>
                <Typography variant={'h5'} textAlign={'left'}>
                 MGM - Member Get Member 
                </Typography>
                <Typography variant={'body1'} textAlign={'right'} sx={{ fontStyle: 'italic' }}>
                  (Jul'22 - Feb'23)
                </Typography>
                <Typography variant={'body1'} textAlign={'left'} sx={{ fontStyle: 'italic' }}>
                  (Joined this team while working in Cognizant)
                </Typography>
                <Typography component={'div'} variant={'body2'} textAlign={'left'}>
                  <ul>
                  <li>
                      Project in <b>Java - Spring Boot </b> with <b>Microservices</b>, <b>React</b> and <b>Postgres Database</b>
                    </li>
                    <li>
                    MGM is American Express Member-Get-Member Programme is all about expanding the well established card portfolio of AMEX by referring to colleagues or friends as new potential customers.
                    </li>
                    <li>
                    worked on prospect journey for configuring How You Earn section for multiple international market.
                    </li>
                    <li>
                    worked on ECMS tool for making enhancement in content editor and dashboard.
                    </li>
                    <li>
                    Resolved technical issues from existing microservices like Eligibility, Content, prospect etc.
                    </li>
                  </ul>
                </Typography>
               
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
      {/**Project In Cognizant with FDM Team */}
      <Grid item md={12}>
        <Card elevation={3}>
          <CardContent>
            <Grid container spacing={2}>
              <Grid item xs={12} md={12}>
                <Typography variant={'h5'} textAlign={'left'}>
                 FDM -  Financial Data Management System 
                </Typography>
                <Typography variant={'body1'} textAlign={'right'} sx={{ fontStyle: 'italic' }}>
                  (Aug'21 - Jun'22)
                </Typography>
                <Typography variant={'body1'} textAlign={'left'} sx={{ fontStyle: 'italic' }}>
                  (developed as team while working in Cognizant)
                </Typography>
                <Typography component={'div'} variant={'body2'} textAlign={'left'}>
                  <ul>
                  <li>
                      Project in <b>Java - vertx</b> with <b>React</b> and <b>Postgres Database</b>
                    </li>
                    <li>
                     Worked on Data Quality Rules Authoring Tool which is part of FDM and used for checking data quality.
                    </li>
                    <li>
                    worked on DQ Rule Registration screen from scratch to define Data Quality Rules.
                    </li>
                    <li>
                    worked on Admin dashboard & added couple of features like defining list of values & release maintenance which will further used on DQ Rules.
                    </li>
                    <li>
                    worked on PREPARER, APPROVER and VIEWER screens in order to manage requests based on user Roles.
                    </li>
                    <li>
                    worked on API to generate DQ Rules JSON with MVEL expression. Handled multiple scenarios to generate JSON data in a specific pattern using recursive approach.
                    </li>
                  </ul>
                </Typography>
               
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
      {/**Project In NSEIT **/}
      <Grid item md={12}>
        <Card elevation={3}>
          <CardContent>
            <Grid container spacing={2}>
              <Grid item xs={12} md={12}>
                <Typography variant={'h5'} textAlign={'left'}>
                 PALM -  Platform Access Lifecyle Management System 
                </Typography>
                <Typography variant={'body1'} textAlign={'right'} sx={{ fontStyle: 'italic' }}>
                  (Jul'19 - Jun'21)
                </Typography>
                <Typography variant={'body1'} textAlign={'left'} sx={{ fontStyle: 'italic' }}>
                  (developed as team while working in NSEIT Ltd.)
                </Typography>
                <Typography component={'div'} variant={'body2'} textAlign={'left'}>
                  <ul>
                  <li>
                      Project in <b>Java - Spring Boot</b> with <b>Angular 8</b> and <b>Postgres Database</b>
                    </li>
                    <li>
                    This application is about to analyze the existing application's roles and rights configurations and then providing propper suggestions to improve it. Also manage all properties and information related to that application which can be used in future for audit purpose.
                    </li>
                    <li>
                    Involved in development various indivisual modules such as <b>Onboarding</b> , <b> Reconciliation </b> , <b> Recertification </b> and <b>Admin</b> etc.
                    </li>
                    <li>
                    Developed multiple REST Apis for the above modules & Involved in designing database.
                    </li>
                    <li>
                    Worked on fixing issues.
                    </li>
                  </ul>
                </Typography>
               
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
      {/***Project In S2 Infotech**/}
      <Grid item md={12}>
        <Card elevation={3}>
          <CardContent>
            <Grid container spacing={2}>
              <Grid item xs={12} md={12}>
                <Typography variant={'h5'} textAlign={'left'}>
                 MahaULB
                </Typography>
                <Typography variant={'body1'} textAlign={'right'} sx={{ fontStyle: 'italic' }}>
                  (Jul'18 - Jun'19)
                </Typography>
                <Typography variant={'body1'} textAlign={'left'} sx={{ fontStyle: 'italic' }}>
                  (developed as team while working in S2 Infotech International Ltd.)
                </Typography>
                <Typography component={'div'} variant={'body2'} textAlign={'left'}>
                  <ul>
                  <li>
                      Project in <b>Java - Spring Boot</b> with <b> JSP </b> and <b>Postgres Database</b>
                    </li>
                    <li>
                    This is a Maharashtra government project which makes all citizen services online in a ULB level places
                    </li>
                    <li>
                    This application provides services Like Property Tax, Water Tax, Employee Management, Health Management etc.
                    </li>
                    <li>
                    Worked on enhancements of Health Management Module for Hospital Registration,Sonography Registration Center etc.
                    </li>
                    <li>
                    Worked on fixing issues and code refactoring for Propert Tax module.
                    </li>
                  </ul>
                </Typography>
               
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
      {/***Project In Genesys**/}
      <Grid item md={12}>
        <Card elevation={3}>
          <CardContent>
            <Grid container spacing={2}>
              <Grid item xs={12} md={12}>
                <Typography variant={'h5'} textAlign={'left'}>
                ERMS - Enhanced Revenue Mobilization System
                </Typography>
                <Typography variant={'body1'} textAlign={'right'} sx={{ fontStyle: 'italic' }}>
                  (March'17 - Jul'18)
                </Typography>
                <Typography variant={'body1'} textAlign={'left'} sx={{ fontStyle: 'italic' }}>
                  (developed as team while working in Genesys International Corporation Ltd.)
                </Typography>
                <Typography component={'div'} variant={'body2'} textAlign={'left'}>
                  <ul>
                  <li>
                      Project in <b>Java - Spring MVC</b> with <b>Maven</b>, <b>Angular Js</b> and <b>Postgres Database</b>
                    </li>
                    <li>
                    worked on Tax Rule Manager API for defining rules of revenue collections
                    </li>
                    <li>
                    worked on License Manager API for registration of license.
                    </li>
                    <li>
                    worked on Map for loading GIS data from GeoServer using Openlayers JavaScript Library.
                    </li>
                  </ul>
                </Typography>
               
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
      {/** Collaborative App **/}
      <Grid item md={12}>
        <Card elevation={3}>
          <CardContent>
            <Grid container spacing={2}>
              <Grid item xs={12} md={12}>
                <Typography variant={'h5'} textAlign={'left'}>
                  A Social Networking Web Application
                </Typography>
                <Typography variant={'body1'} textAlign={'right'} sx={{ fontStyle: 'italic' }}>
                  (Sep'16 - Jan'17)
                </Typography>
                <Typography variant={'body1'} textAlign={'left'} sx={{ fontStyle: 'italic' }}>
                  (Guided by Prof. Payal, Prof. Ajay)
                </Typography>
                <Typography component={'div'} variant={'body2'} textAlign={'left'}>
                  <ul>
                    <li>
                      Project in <b>Java Spring MVC 4, Angular JS, Hibernate and Oracle Database</b>&nbsp;
                    </li>
                    <li>
                    A powerfull social network web application. This application includes features such as fully customizable user profiles, ability to connect with others as a friend, writing blogs, creating events, ability to post & seach Jobs, abitlity to chat with friends etc.
                    </li>
                   
                  </ul>
                </Typography>
                <Typography variant={'body1'} textAlign={'left'}>
                  For code&nbsp;
                  <Link href={'https://github.com/ibrahim89/WebCollaboration'}
                        rel={'noopener'} target={'_blank'}>click here</Link>
                </Typography>
              </Grid>
             
            </Grid>
          </CardContent>
        </Card>
      </Grid>
       {/**Shopping Cart App**/}
       <Grid item md={12}>
        <Card elevation={3}>
          <CardContent>
            <Grid container spacing={2}>
              <Grid item xs={12} md={12}>
                <Typography variant={'h5'} textAlign={'left'}>Shopping Cart Web Application</Typography>
                <Typography variant={'body1'} textAlign={'right'} sx={{ fontStyle: 'italic' }}>
                  (Jul'16 - Oct'16)
                </Typography>
                <Typography variant={'body1'} textAlign={'left'} sx={{ fontStyle: 'italic' }}>
                  (Guided by Prof. Payal )
                </Typography>
                <Typography component={'div'} variant={'body2'} textAlign={'left'}>
                  <ul>
                    <li>
                      Project in <b>Java - Spring MVC</b> with <b>Maven</b> and <b>H2 Database</b>
                    </li>
                    <li>
                    This project is an online shopping cart application created to sell or
                    purchase furniture online
                    </li>
                    <li>Admin can create,update and delete product product,category & sub-category
                    </li>
                    <li>Customer can view product catalog, buy the product and confirm the order for the products</li>
                    <li>Authentication & authroization provided based on user role using spring security</li>
                   
                  </ul>
                </Typography>
                <Typography variant={'body1'} textAlign={'left'}>
                  For code&nbsp;
                  <Link href={'https://github.com/ibrahim89/Ecommerce-Shopping-Cart'}
                        rel={'noopener'} target={'_blank'}>click here</Link>
                </Typography>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>

      </Grid>
        </div>);
};
