import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import Grid from 'material-ui/Grid';
import Link from 'docs/src/modules/components/Link';

const styleSheet = theme => ({
  root: {
    overflow: 'auto',
  },
  layout: {
    padding: theme.spacing.unit * 6,
  },
  list: {
    margin: 0,
    paddingLeft: 0,
    listStyle: 'none',
  },
  listItem: {
    paddingTop: theme.spacing.unit / 2,
    paddingBottom: theme.spacing.unit / 2,
  },
});

function AppFooter(props) {
  const { classes } = props;

  return (
    <footer className={classes.root}>
      <div className={classes.layout}>
        <Typography type="title" gutterBottom>
          Quick Links
        </Typography>
        <Typography type="subheading" component="div">
          <Grid container spacing={0}>
            <Grid item xs={12} sm={6}>
              <ul className={classes.list}>
                <li className={classes.listItem}>
                  <Link href="/about/intro">About</Link>
                </li>
                <li className={classes.listItem}>
                  <Link href="/about/experience">Experience</Link>
                </li>
                <li className={classes.listItem}>
                  <Link href="/about/ask-me-anything">Ask Me Anything</Link>
                </li>
              </ul>
            </Grid>
            <Grid item xs={12} sm={6}>
              <ul className={classes.list}>
                <li className={classes.listItem}>
                  <Link href="https://github.com/noahjacobs" target="__blank">GitHub</Link>
                </li>
                <li className={classes.listItem}>
                  <Link href="https://bear.ai" target="__blank">
                    Bear AI
                  </Link>
                </li>
              </ul>
            </Grid>
            
          </Grid>
        </Typography>
      </div>
    </footer>
  );
}

AppFooter.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styleSheet)(AppFooter);
