import React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { useTranslation } from 'next-i18next';
import useStyles from './error-style';

function Error(props) {
  const { classes } = useStyles();
  const { errCode, text } = props;
  const { t } = useTranslation('common');

  return (
    <div className={classes.errorWrap}>
      <Container maxWidth="lg">
        <Grid container>
          <Grid item sm={5} xs={12}>
            <div className={classes.flex}>
              <div className={classes.deco}>
                <Typography variant="h1">
                  {errCode}
                </Typography>
              </div>
            </div>
          </Grid>
          <Grid item sm={7} xs={12}>
            <div className={classes.text}>
              <Typography variant="h4">{text}</Typography>
              <Typography>
                {t('404_subtitle')}
              </Typography>
              <Button variant="outlined" color="primary" href="/" className={classes.button}>
                {t('back')}
              </Button>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

Error.propTypes = {
  errCode: PropTypes.string,
  text: PropTypes.string,
};

Error.defaultProps = {
  errCode: '404',
  text: '',
};

export default Error;
