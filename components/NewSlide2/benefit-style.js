import { makeStyles } from 'tss-react/mui';
import decoBenefit from '~/public/images/Slide2.png';
import decoList from '~/public/images/Slide2.png';

const benefitStyles = makeStyles({ uniqId: 'benefit' })(theme => ({
  root: {
    position: 'relative',
    background: theme.palette.common.black,
  },
 
  wrapper: {
    position: 'relative',
    minHeight: '80vh'
    // paddingTop: theme.spacing(10),
    // marginBottom: theme.spacing(70),
    // marginTop: theme.spacing(0),
    // width: '100%',
    // [theme.breakpoints.up('lg')]: {
    //   paddingLeft: theme.spacing(8),
    //   paddingRight: theme.spacing(8)
    // },
    // [theme.breakpoints.up('sm')]: {
    //   paddingLeft: theme.spacing(4),
    //   paddingRight: theme.spacing(4)
    // }
  },
  desc: {
    // padding: 0,
    color: theme.palette.common.white,
    '& h4': {
      fontWeight: theme.typography.fontWeightMedium
    },
    minHeight: '100px', // Set an appropriate minimum height value here
    margin: 0 // Remove the gap by setting margin to 0
  },
  list: {
    display: 'block',
    margin: theme.spacing(3, 0, 5),
    listStyle: 'none',
    paddingLeft: 0,
    fontSize: 18,
    [theme.breakpoints.down('sm')]: {
      fontSize: 16,
    },
    '& li': {
      paddingLeft: theme.spacing(4),
      lineHeight: '38px',
      background: `url(${decoList}) no-repeat 0 10px`
    }
  },
  img: {
    margin: theme.spacing(3, 0, 0, 0),
    overflow: 'hidden',
    bottom: -40,
    position: 'relative',
    '& img': {
      maxWidth: '100%',
      display: 'block'
    }
  },
  deco: {
    position: 'absolute',
    top: 40,
    right: 80,
  },
  parallaxWrap: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
  },
  parallaxProps: {
    background: `url(${decoBenefit}) no-repeat center`,
    backgroundSize: 'cover',
    height: 580,
    width: '100%',
  },
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default benefitStyles;
