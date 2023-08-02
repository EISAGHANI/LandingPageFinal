import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import { Parallax } from 'react-parallax';
import { useTranslation } from 'next-i18next';
import imgAPI from '~/public/images/imgAPI';
import { useText } from '~/theme/common';
import useStyles from './benefit-style';
import emailIconRed from '~/public/images/Email-red-outline.svg';
import palette from '../../theme/palette';

function Benefit() {
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
          bgImageAlt="benefit"
          strength={0}
        >
          <div className={classes.parallaxProps} />
        </Parallax>
      </div>
      <Container fixed={isDesktop}>
      <div className={classes.wrapper}>
        <Grid container direction="column" justifyContent="center" alignItems="center" rowSpacing={6}>
          <Grid item>
            <Typography className={text.subtitle} sx={{ color: palette.branding.palette.primary.main }}> DEIN VIRTUELLER-MENTALTRAINER.</Typography>
            <Typography className={text.subtitle} sx={{ color: palette.branding.palette.primary.main }}> Von Uberall an jedem Ort.</Typography>
          </Grid>
          <Grid item>
            <Typography className={text.subtitle2} sx={{ color: palette.branding.palette.secondary.main }}> DEIN VIRTUELLER-MENTALTRAINER.</Typography>
            <Typography className={text.subtitle2} sx={{ color: palette.branding.palette.secondary.main }}> JETZT KOSTENLOS ANMELDEN</Typography>
            <Typography className={text.subtitle2} sx={{ color: palette.branding.palette.secondary.main }}> UND 20% RABATT SICHERN!</Typography>
          </Grid>
          <Grid item sx={{backgroundImage: `url(${emailIconRed})`, backgroundRepeat: 'no-repeat', backgroundSize: 'contain', width: '25%', margin: '5px' }} />
          <Grid item>
            <Typography className={text.pragraph} sx={{ color: palette.branding.palette.primary.main }}> But First Me - Weil du es wert bist.</Typography>
            <Typography className={text.pragraph} sx={{ color: palette.branding.palette.primary.main }}> Starke deine Psyche und sichere dir 20% Rabatt auf</Typography>
            <Typography className={text.pragraph} sx={{ color: palette.branding.palette.primary.main }}> Premium-Mitgliedschaft im ersten Monat!</Typography>
          </Grid>
        </Grid>
      </div>
      </Container>
    </div>
  );
}

export default Benefit;
