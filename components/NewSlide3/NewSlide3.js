import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import { Parallax } from 'react-parallax';
import { useTranslation } from 'next-i18next';
import { Icon } from '@mui/material';
import imgAPI from '~/public/images/imgAPI';
import { useText , useTextAlign} from '~/theme/common';
import useStyles from './benefit-style';
import emailIconRed from '~/public/images/Email-red-outline.svg';
import backgroundTextImage from '~/public/slide3/backgroundTextImage.svg';

function NewSlide3() {
  const { classes } = useStyles();
  const { classes: text } = useText();
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));
  const isTablet = useMediaQuery(theme.breakpoints.down('lg'));
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const { t } = useTranslation('common');

  return (
    <div className={classes.root}>
      <div className={classes.parallaxWrap}>
        <Parallax
          bgImage={imgAPI.fashion[5]}
          bgImageAlt="NewSlide3"
          strength={0}
        >
          <div className={classes.parallaxProps} />
        </Parallax>
      </div>
      {/* <Container fixed={isDesktop}> */}
        <div className={classes.wrapper}>
          <Grid container direction="row" justifyContent="space-around" alignItems="stretch" rowSpacing={8}>
            <Grid item >
              <Typography className={text.subtitle2} > DEIN VIRTUELLER-MENTALTRAINER.</Typography>
              <Typography className={text.subtitle2}> Von Uberall an jedem Ort.</Typography>
            </Grid>
            <Grid item sx={{backgroundImage: `url(${backgroundTextImage})`, backgroundRepeat: 'no-repeat', backgroundSize: 'contain', width: '100%', height: '60vh' }} />
          </Grid>
        </div>
      {/* </Container> */}
    </div>
  );
}

export default NewSlide3;






