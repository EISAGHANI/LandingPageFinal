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

function NewSlide5() {
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
          bgImageAlt="NewSlide5"
          strength={0}
        >
          <div className={classes.parallaxProps} />
        </Parallax>
      </div>
      {/* <Container fixed={isDesktop}> */}
        <div className={classes.wrapper}>
          <Grid container direction="column" justifyContent="flex-start" alignItems="center" rowSpacing={8}>
            <Grid item>
              <Typography className={text.subtitle2} > DEIN VIRTUELLER-MENTALTRAINER.</Typography>
              <Typography className={text.subtitle2}> Von Uberall an jedem Ort.</Typography>
            </Grid>
            <Grid item>
              <Typography className={text.subtitle2} > DEIN VIRTUELLER-MENTALTRAINER.</Typography>
              <Typography className={text.subtitle2} > JETZT KOSTENLOS ANMELDEN</Typography>
              <Typography className={text.subtitle2} > UND 20% RABATT SICHERN!</Typography>
            </Grid>
            <Grid item sx={{backgroundImage: `url(${emailIconRed})`, backgroundRepeat: 'no-repeat', backgroundSize: 'contain', width: '25%', margin: '5px' }} />
            <Grid item>
              <Typography className={text.subtitle2}> But First Me - Weil du es wert bist.</Typography>
              <Typography className={text.subtitle2}> Starke deine Psyche und sichere dir 20% Rabatt auf</Typography>
              <Typography className={text.subtitle2}> Premium-Mitgliedschaft im ersten Monat!</Typography>
            </Grid>
          </Grid>
        </div>
      {/* </Container> */}
    </div>
  );
}

export default NewSlide5;






