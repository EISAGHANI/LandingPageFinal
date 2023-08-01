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

function NewSlide4() {
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
          bgImageAlt="NewSlide4"
          strength={0}
        >
          <div className={classes.parallaxProps} />
        </Parallax>
      </div>
      {/* <Container fixed={isDesktop}> */}
        <div className={classes.wrapper}>
          <Grid container direction="row" justifyContent="space-evenly" alignItems="flex-end" rowSpacing={8}>
            <Grid item>
              <Typography className={text.paragraph} sx={{ margin: 5}}> DEIN VIRTUELLER-MENTALTRAINER.Von Uberall an jedem Ort. DEIN VIRTUELLER-MENTALTRAINER.</Typography>
              <Typography className={text.paragraph} sx={{ margin: 5}}> JETZT KOSTENLOS ANMELDEN UND 20% RABATT SICHERN!  But First Me - Weil du es wert bist.</Typography>
              <Typography className={text.paragraph} sx={{ margin: 5}}> Starke deine Psyche und sichere dir 20% Rabatt auf</Typography>
              <Typography className={text.paragraph} sx={{ margin: 5}}> Premium-Mitgliedschaft im ersten Monat!</Typography>
              <Typography className={text.paragraph} sx={{ margin: 5}}> Premium-Mitgliedschaft im ersten Monat!</Typography>
            </Grid>
            
          </Grid>
          <Grid container direction="row" justifyContent="flex-start" alignItems="flex-end" rowSpacing={12} sx={{ margin: 5}}>
            <Grid item sx={{backgroundImage: `url(${emailIconRed})`, backgroundRepeat: 'no-repeat', backgroundSize: 'contain', width: '25%', margin: '5px' }} />
          </Grid>
        </div>
      {/* </Container> */}
    </div>
  );
}

export default NewSlide4;






