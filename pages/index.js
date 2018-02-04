import React, { Component } from 'react';
import PropTypes from 'prop-types';
import compose from 'recompose/compose';
import Head from 'next/head';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import withRoot from 'docs/src/modules/components/withRoot';
import AppFooter from 'docs/src/modules/components/AppFooter';
import Link from 'docs/src/modules/components/Link';
import Particles from 'react-particles-js';

const styles = theme => ({
  root: {
    flex: '1 0 100%',
  },
  hero: {
    minHeight: '100vh', // Makes the hero full height until we get some more content.
    flex: '0 0 auto',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.primary[500] : theme.palette.primary[800],
    color: theme.palette.getContrastText(theme.palette.primary[500]),
  },
  content: {
    paddingTop: theme.spacing.unit * 8,
    paddingBottom: theme.spacing.unit * 8,
    [theme.breakpoints.up('sm')]: {
      paddingTop: theme.spacing.unit * 16,
      paddingBottom: theme.spacing.unit * 16,
    },
  },
  text: {
    paddingLeft: theme.spacing.unit * 4,
    paddingRight: theme.spacing.unit * 4,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headline: {
    maxWidth: 1000,
    textAlign: 'center',
  },
  button: {
    marginTop: theme.spacing.unit * 3,
  },
  logo: {
    margin: '20px 0',
    width: '100%',
    height: '40vw',
    maxHeight: 230,
  },
});

function PageHome(props) {
  const classes = props.classes;

  return (
    <div className={classes.root}>
      <Head>
        <title>Noah Jacobs</title>
      </Head>
      <div className={classes.hero}>
        <div className={classes.content}>
          <Particles
          params={{
              particles: {
                  number: {
                      value: 50
                  },
                  move: {
                    enable: true,
                    speed: 1,
                    attract: {
                      enable: false,
                      rotateX: 600,
                      rotateY: 1200
                    }
                  }
              }
          }}
          style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%"
          }} />
          <div className={classes.text}>
            <Typography type="display2" component="h1" color="inherit" gutterBottom>
              {"Hi, I'm Noah!"}
            </Typography>
            <Typography type="headline" component="h2" color="inherit" className={classes.headline}>
              {"I like making things and meeting new people. \
              Currently working on General AI and Machine Intelligence. \
              I have more details below, if you're into that sort of thing."}
            </Typography>
            <Button
              component={Link}
              className={classes.button}
              raised
              prefetch
              href="/about/intro"
              variant="button"
            >
              {'Explore Work'}
            </Button>
          </div>
        </div>
      </div>
      <AppFooter />
    </div>
  );
}

PageHome.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default compose(withRoot, withStyles(styles))(PageHome);
