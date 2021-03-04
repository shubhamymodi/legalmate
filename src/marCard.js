import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { AiOutlineTeam } from 'react-icons/ai';
import { BiRupee } from "react-icons/bi";
import { FcRating } from "react-icons/fc";
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import corporate from "./corporate";
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Third from "./third";
import Menu from "./navbar";
// import ReactTooltip from 'react-tooltip';

import { withStyles } from '@material-ui/core/styles';

import Tooltip from '@material-ui/core/Tooltip';

// ------------------------------------------------------------------------
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';


import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';

import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import Box from '@material-ui/core/Box';
import Rating from '@material-ui/lab/Rating';

const styles = (theme) => ({
    root: {
      margin: 0,
      padding: theme.spacing(2),
    },
    closeButton: {
      position: 'absolute',
      right: theme.spacing(1),
      top: theme.spacing(1),
      color: theme.palette.grey[500],
    },
  });
  
  const DialogTitle = withStyles(styles)((props) => {
    const { children, classes, onClose, ...other } = props;
    return (
      <MuiDialogTitle disableTypography className={classes.root} {...other}>
        <Typography variant="h6">{children}</Typography>
        {onClose ? (
          <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
            <CloseIcon />
          </IconButton>
        ) : null}
      </MuiDialogTitle>
    );
  });
  
  const DialogContent = withStyles((theme) => ({
    root: {
      padding: theme.spacing(2),
    },
  }))(MuiDialogContent);
  
  const DialogActions = withStyles((theme) => ({
    root: {
      margin: 0,
      padding: theme.spacing(1),
    },
  }))(MuiDialogActions);
  
  function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`full-width-tabpanel-${index}`}
        aria-labelledby={`full-width-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
  };
  
  function a11yProps(index) {
    return {
      id: `full-width-tab-${index}`,
      'aria-controls': `full-width-tabpanel-${index}`,
    };
  }
  
  const useStyles3 = makeStyles((theme) => ({
    root: {
      backgroundColor: theme.palette.background.paper,
      width: "90%",
      marginLeft:'auto',
      marginRight:"auto"
    },
  }));

//   -------------------------------------------------------------------
const useStylesBootstrap = makeStyles((theme) => ({
    arrow: {
        color: theme.palette.common.black,
    },
    tooltip: {
        backgroundColor: theme.palette.common.black,
    },
}));

function BootstrapTooltip(props) {
    const classes = useStylesBootstrap();

    return <Tooltip arrow classes={classes} {...props} />;
}

const useStyles2 = makeStyles((theme) => ({
    button: {
        display: 'block',
        marginTop: theme.spacing(2),
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    customWidth: {
        maxWidth: 500,
    },
    noMaxWidth: {
        maxWidth: 'none',
    },
    customHeight: {
        maxHeight: 100,
    },
    noMaxHeight: {
        maxWidth: 'none`'
    }
}));

// function ControlledOpenSelect() {
//     const classes = useStyles2();
//     const [number, setNumber] = React.useState('0');
//     const [open, setOpen] = React.useState(false);

//     const handleChange = (event) => {
//         setNumber(event.target.value);
//     };

//     const handleClose = () => {
//         setOpen(false);
//     };

//     const handleOpen = () => {
//         setOpen(true);
//     };

//     return (
//         <div>
//             <FormControl className={classes.formControl}>
//                 <InputLabel id="demo-controlled-open-select-label">Domain</InputLabel>
//                 <Select
//                     labelId="demo-controlled-open-select-label"
//                     id="demo-controlled-open-select"
//                     open={open}
//                     onClose={handleClose}
//                     onOpen={handleOpen}
//                     value={number}
//                     onChange={handleChange}
//                 >
//                     <MenuItem value="">
//                         <em>All</em>
//                     </MenuItem>
//                     <MenuItem value={1}>Developement</MenuItem>
//                     <MenuItem value={2}>Design</MenuItem>
//                     <MenuItem value={3}>Marketing</MenuItem>
//                     <MenuItem value={4}>Business</MenuItem>
//                     <MenuItem value={5}>Music</MenuItem>
//                 </Select>
//             </FormControl>
//         </div>
//     );
// }


function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}

                Developed with ❤️ By Les Pirates
            {' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const useStyles = makeStyles((theme) => ({
    icon: {
        marginRight: theme.spacing(2),
    },
    heroContent: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(8, 0, 6),
    },
    heroButtons: {
        marginTop: theme.spacing(4),
    },
    cardGrid: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
    },
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    cardMedia: {
        paddingTop: '56.25%', // 16:9
    },
    cardContent: {
        flexGrow: 1,
    },
    footer: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(6),
    },
}));

export default function DevCardila() {
    const classes = useStyles();
    const [i,setI] = React.useState(1);

   
    console.log(corporate);

    const classStyle = useStyles3();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);
  
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
   
    
  };
  const handleClose = () => {
    setOpen(false);
  };
    
    return (
        <>
        <Menu/>
        <br/>
            {/* <ControlledOpenSelect /> */}
            <main>
                <Container className={classes.cardGrid} maxWidth="md">
                    {/* End hero unit */}
                    <Grid container spacing={4}>
                        {corporate.map((card) => (
                            
                            <>
                            
                             
                            <Grid item key={card} xs={12} sm={6} md={4}>
                                    <Card className={classes.card}>
                                        <CardMedia
                                            
                                            className={classes.cardMedia}
                                            image={card.Image}
                                            title={card.Category}
                                           
                                            
                                        />
                                        <CardContent className={classes.cardContent}>
                                            {/* <BootstrapTooltip title={card.Description} placement="right">
                                                <Button>{card.Name}</Button>
                                            </BootstrapTooltip> */}
                                            <Typography style={{ marginTop: "2%", marginBottom: "5%" }}>
                                                <span style={{ fontStyle: "bold" }}><span style={{  fontWeight:"bold",marginTop: "20%",  }}>{card.Courseprovider}</span></span>
                                            </Typography>

                                            <Button variant="contained"  size="small" style={{marginLeft:'auto',marginRight:"auto",backgroundColor:"#F56464",color:"#fff",marginBottom:"15px"}}>
                                               Corporate Law
                                                {/* {card.Image} */}
                                            </Button>

                                            <Button variant="contained" onClick={() => setI(card.Number)} onClick={handleClickOpen} color="primary" size="large" style={{marginLeft:'auto',marginRight:"auto",marginBottom:"10px"}}>
                                                Contact Now
                                                {/* {card.Image} */}
                                            </Button> <br/>
{/* ----------------------------------------------------------------------------------------------------- */}
                                            <Dialog style={{overflow:"hidden"}} onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          Lawyer Profile
        </DialogTitle>
        <DialogContent dividers>
          <div className="row">
          <img className="column" style={{borderRadius:"50%",width:"200px",height:"200px",marginLeft:"auto",marginRight:"auto",display:"block"}} src="https://cdn.blrankings.com/best-lawyers/lawyer-images/peter-d-anderson-39650?t=2021021118203803" alt="dp"/>
              <div  className="column">
              <span style={{fontWeight:"bold"}}>Name:</span> <span >{corporate[i].Courseprovider}</span><br/>
              <span style={{fontWeight:"bold"}}>Age:</span> <span >{corporate[i].Age}</span><br/>
              <span style={{fontWeight:"bold"}}>Location:</span> <span >900 Elm Street,<br/> 10th Floor
Manchester, NH 03101</span><br/>
<span style={{fontWeight:"bold"}}>Website:</span> <a href="http://www.mclane.com">{corporate[i].Website}</a><br/>
<span style={{fontWeight:"bold"}}>Contact:</span> <a href="mailto:peter@gmail.com">{corporate[i].Email}</a><br/>
<span style={{fontWeight:"bold"}}>Phone number:</span> <span >(0161) xxx xxxx</span><br/>
          <Button variant="contained"  size="small" style={{display:"block",textAlign:"center",marginLeft:'auto',marginRight:"auto",backgroundColor:"#F56464",color:"#fff",marginBottom:"15px"}}>
                                               Corporate Law
                                                {/* {card.Image} */}
                                            </Button>
                                            </div>
          </div>
          <div style={{fontWeight:"bold"}}>Lawyer's Bio:</div>
          <Typography>Peter's practice primarily focuses on criminal law. Prior to joining McLane Middleton, he worked as a trial attorney at the United States Department of Justice in Washington, D.C.  Peter's practice includes significant family law and domestic relations cases.  He also handles a diverse civil practice, including commercial and personal injury cases. In addition, he works with the Tax Department in the litigation of civil and criminal tax matters.</Typography>
          
          <div style={{fontWeight:"bold",textAlign:"center"}}>Client Ratings</div>
 <Box style={{marginLeft:"auto",marginRight:"auto",textAlign:"center"}} component="fieldset" mb={3} borderColor="transparent">
         <Rating defaultValue={corporate[i].Rating} precision={0.5} name="read-only" readOnly />
  </Box>
  {/* -------------------------------------------------------------------------  */}
          <div className={classStyle.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label="Education" {...a11yProps(0)} />
          <Tab label="Career" {...a11yProps(1)} />
          <Tab label="Languages" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
        University of Connecticut, B.A,, graduated 1980
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          <div style={{fontWeight:"bold",display:"flex"}}>Total Cases :</div>
          <span> {corporate[i].Enrollment}</span>

          <div style={{fontWeight:"bold",display:"flex"}}>Cases won:</div>
          <span> 930</span>
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
        <div style={{fontWeight:"bold",display:"flex"}}>Languages Known :</div>
        <Typography>English</Typography>
        <Typography>German</Typography>
        <Typography></Typography>
        </TabPanel>
      </SwipeableViews>
    </div>
{/* ------------------------------------------------------------------------- */}
 
      
        </DialogContent>
        <DialogActions>
          <Button href="/pricing" autoFocus onClick={handleClose} color="primary">
            Want us to help you?
          </Button>
        </DialogActions>
      </Dialog>
{/* 
------------------------------------------------------------------------------------------- */}

                                            
                                            
                                            <Button variant="outlined" color="secondary" style={{ marginLeft: "2%", marginRight: "0%" }}>
                                                ${card.Price}k
                                            </Button>
                                            <Button variant="outlined" color="secondary" style={{ marginLeft: "1%", marginRight: "0%" }}>
                                                <AiOutlineTeam /> {card.Enrollment}
                                         </Button>
                                            <Button variant="outlined" color="secondary" style={{ marginLeft: "1%" }}>
                                                <FcRating />  <span> <span>{card.Rating}</span></span>
                                            </Button>
                                        </CardContent>
                                    </Card>
                                </Grid>
                            
                            </>
                        ))}
                    </Grid>
                </Container>
                <Third/>
                {/* <Copyright /> */}
            </main>
        </>

    )
}