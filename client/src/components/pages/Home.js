import React from 'react'
import injectSheet from 'react-jss'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
import { Jumbotron, Button, Form, FormGroup, Label, Input, ListGroup, ListGroupItem } from 'reactstrap'


const styles = {
  mainDiv: {
    height: 800,
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundAttachment: 'fixed',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundImage: 'url("https://static.pexels.com/photos/77078/theme-christmas-77078.jpeg")',
    position: 'relative',
    justifyContent: 'center'
  },
  comingSoon: {
    height: 500,
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundAttachment: 'fixed',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundImage: 'url("https://blog.proto.io/wp-content/uploads/2016/10/best_mobile_app_UI_2016_Guides.gif")',
    position: 'relative',
    justifyContent: 'center'
  },
  comingSoonTitle: {
    fontSize: '3em',
    color: 'white',
    fontFamily: 'Bookman',
    textShadow: '1px 1px 2px black'
  },
  heroTitle: {
    fontSize: '4em',
    color: 'white',
    fontFamily: 'Bookman',
    textShadow: '1px 1px 2px black'
  },
  heroButton: {
    width: '25%'
  },
  heroSubTitle: {
    fontSize: '2em',
    color: 'white',
    fontFamily: 'Bookman',
    textShadow: '1px 1px 2px black'
  },
  iconDiv: {
    display: 'flex',
    flexDirection: 'row',
    marginLeft: '10%',
    marginRight: '10%',
    marginBottom: '100px',
    marginTop: '100px'
  },
  iconImgContainer: {
    textAlign: 'center',
    width: '50%',
    border: 'solid red'
  },
  iconImg: {
    width: '50%'
  },
  futureTitle: {
    textAlign: 'center',
    paddingBottom: '50px',
    paddingTop: '50px',
    background: '#F5F5F5'
  },
  futureBucket: {
    display: 'flex',
    flexDirection: 'row',
    background: '#F5F5F5',
    paddingBottom: '100px'
  },
  futureContent: {
    width: '50%',
    paddingLeft: '5%',
    paddingRight: '5%'
  },
  futurePic: {
    width: '50%'
  },
  futurePicImg: {
    width: '100%'
  },
  parallaxDiv: {
    height: 800,
    display: 'flex',
    alignItems: 'center',
    backgroundAttachment: 'fixed',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundImage: 'url("https://burst.shopifycdn.com/photos/pouring-an-espresso_925x@2x.jpg")',
    clipPath: 'polygon(0 0, 100% 0, 100% 90%, 0 100%)',
    position: 'relative',
    justifyContent: 'center'
  },
  futureTitle2: {
    textAlign: 'center',
    paddingBottom: '50px',
    paddingTop: '50px'
  },
  futureBucket2: {
    display: 'flex',
    flexDirection: 'row',
    paddingBottom: '100px'
  },
  futureContent2: {
    width: '50%',
    textAlign: 'Left',
    paddingLeft: '10px'
  },
  cta: {
    display: 'flex',
    flexDirection: 'row',
    paddingTop: '50px',
    paddingBottom: '50px',
    paddingLeft: '15%',
    paddingRight: '15%',
    background: '#8e44ad',
    color: 'white',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  EditButton: {
    backgroundColor: '#494949',
    color: 'white',
    border: 'solid #34495e 2px',
    padding: 10,
    fontSize: 20,
    borderRadius: 4,
    textAlign: 'center',
    textDecoration: 'none'
  },
  buttonContainer: {
    display: 'flex',
    flexDirection: 'column',
    width: '50%',
    marginBottom: 10,
    justifyContent: 'space-around',
    background: '#ecf0f1'
  },
  EditButton2: {
    backgroundColor: '#494949',
    color: 'white',
    padding: 10,
    fontSize: 20,
    borderRadius: 4,
    textAlign: 'center',
    textDecoration: 'none'
  },
  buttonContainer2: {
    display: 'flex',
    flexDirection: 'column',
    width: '30%',
    justifyContent: 'space-around'
  },
  heroTitleContainer: {
    width: '66.67%',
    paddingLeft: '3%'
  },
  heroGraphicContainer: {
    width: '33.33%'
  },
  heroGraphic: {
    width: '100%'
  },
  futureContainer: {
    display: 'flex',
    flexDirection: 'column',
    background: 'white',
    justifyContent: 'center'
  },
  futureTitle: {
    textAlign: 'center',
    marginTop: '50px'
  },
  futureDivider: {
    width: '50%',
    background: '#bdc3c7',
    height: '2px'
  },
  futureDividerContainer: {
    display: 'flex',
    justifyContent: 'center'
  },
  futureSubTitle: {
    textAlign: 'center',
    width: '35%',
    fontFamily: 'Quicksand,sans-serif',
    color: '#7f8c8d'
  },
  futureSubTitleContainer: {
    display: 'flex',
    justifyContent: 'center'
  },
  futureIconBucket: {
    display: 'flex',
    flexDirection: 'row'
  },
  futureIconBucketLeft: {
    width: '33.33%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: '25px'
  },
  futureIconBucketCenter: {
    width: '33.33%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  futureIconBucketRight: {
    width: '33.33%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: '25px'
  },
  leftBucket: {
    display: 'flex',
    flexDirection: 'row',
    paddingTop: '50px',
    paddingBottom: '50px'
  },
  leftBucketText: {
    display: 'flex',
    alignItems: 'center',
    width: '75%',
    paddingLeft: '5px',
    color: '#7f8c8d',
    paddingRight: '4px'
  },
  leftBucketIcon: {
    width: '25%'
  },
  leftImg: {
    width: '100%'
  },
  futureButton: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '50px',
    marginTop: '25px'
  },
  steps: {
    textAlign: 'center',
    marginTop: '100px',
    marginBottom: '100px'
  },
  introContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  },
  leftColumn: {
    width: '60%',
    paddingLeft: '5%',
    paddingRight: '5%'
  },
  rightColumn: {
    width: '40%'
  },
  introPic: {
    width: '100%'
  },
  explainerContainer: {
    display: 'flex',
    flexDirection: 'row',
    marginLeft: '10%',
    marginRight: '10%'
  },
  explainerLeft: {
    width: '50%',
    textAlign: 'center'
  },
  explainerRight: {
    width: '50%',
    textAlign: 'center'
  },
  opennerTitle: {
    fontSize: '5em'
  },
  opennerSubTitle: {
    fontSize: '2em'
  },
  jumbotronDiv: {
    paddingTop: '10%',
    backgroundImage: 'url("https://static.pexels.com/photos/76931/pexels-photo-76931.jpeg")',
    backgroundAttachment: 'fixed',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover'
  },
  jumboTrans: {
    backgroundColor: 'rgba(250,250,250,0.7)',
    padding: '5%'
  },
  howTo: {
    display: 'flex',
    flexDirection: 'row'
  },
  howToTitle: {
    fontSize: '4em'
  },
  howToSubTitle: {
    fontSize: '1em'
  },
  kids: {
    display: 'flex',
    flexDirection: 'column',
    width: '50%',
    paddingLeft: '5%',
    paddingRight: '5%',
    paddingTop: '2%',
    justifyContent: 'center'
  },
  helpers: {
    display: 'flex',
    flexDirection: 'column',
    width: '50%',
    paddingLeft: '5%',
    paddingRight: '5%',
    paddingTop: '2%',
    justifyContent: 'center'
  },
  jumboButtons: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingTop: '5%'
  },
  jumbotronDiv2: {
    paddingTop: '10%',
    backgroundImage: 'url("https://static.pexels.com/photos/190931/pexels-photo-190931.jpeg")',
    backgroundAttachment: 'fixed',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover'
  },
  disclaimerBizContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center'
  },
  disclaimerBiz: {
    width: '15%'
  },
  disclaimerLogo: {
    width: '100%'
  },
  disclaimer: {
    paddingLeft: '5%',
    paddingRight: '5%'
  }
}

const propTypes = {
  classes: PropTypes.object.isRequired
}

const enhancer = injectSheet(styles)

const Home = (props) => {
  return (
    <div>
      <div className={props.classes.mainDiv}>
        <div className={props.classes.heroTitleContainer}>
          <h1 className={props.classes.heroTitle}> Operation Xmas Jammies </h1>
          <h3 className={props.classes.heroSubTitle}>Spreading Christmas Cheer One Pair of Jammies at a Time</h3>
        </div>
        <div className={props.classes.heroGraphicContainer}>
          <img className={props.classes.heroGraphic} src='http://icons.iconarchive.com/icons/psdblast/flat-christmas/512/christmas-tree-icon.png' />
        </div>
      </div>
      <div className={props.classes.openner}>
        <div className={props.classes.steps}>
          <h1 className={props.classes.opennerTitle}> A Virtual Giving Tree </h1>
          <p className={props.classes.opennerSubTitle}> Supporting Kids with PKS this Holiday Season </p>
          <div>
            <img className={props.classes.opennerImage} src='http://icons.iconarchive.com/icons/psdblast/flat-christmas/512/christmas-tree-icon.png' />
          </div>
        </div>
      </div>
      <Jumbotron className={props.classes.jumbotronDiv}>
        <div className={props.classes.jumboTrans}>
          <h1 className='display-3'>Pallister Killian Mosaic Syndrome</h1>
          <p className='lead'>A rare chromosomal disorder caused by the presence of at least four
            copies of the short arm of chromosome 12 instead of the normal two.</p>
          <hr className='my-2' />
          <p>For more information about this condition please visit this great resource </p>
          <a href={'http://www.pkskids.net/fundraising.php'} target='_blank' >
            <Button color='primary'>PKS Kids</Button>
          </a>
        </div>
      </Jumbotron>
      <div className={props.classes.openner}>
        <div className={props.classes.steps}>
          <h1 className={props.classes.howToTitle}> How to Get Involved </h1>
          <p className={props.classes.howToSubTitle}> It could not be easier to spread some Holiday Cheer </p>
          <div className={props.classes.howTo}>
            <div className={props.classes.kids}>
              <h1> Applying for a Gift </h1>
              <p> If you have a loved one affected by PKS and would like to submit a gift request
                to the Virtual Giving Tree just follow these simple steps: </p>
              <h4> Step 1: Create a - Gift Request - Aaccount </h4>
              <p> This Account will allow you access to the next step</p>
              <h4> Step 2: Create a Gift </h4>
              <p> You will only have access to this feature if you create a
                  - Gift Request - account first from Step 1.  Hint: You will NOT see the Create Gift
                  feature anywhere on the site until you create a -Gift Request - account. </p>
              <p> _ </p>
              <Button outline color="danger">Create Gift Request Account</Button>
            </div>
            <div className={props.classes.helpers}>
              <h1> Fulfilling a Gift </h1>
              <p> Feel like spreading some Holiday Cheer this holiday season?  It could not be
                easier to fulfill a gift request for a wonderful child this holiday season </p>
              <h4> Step 1: Create a - Gift Fulfiller - account </h4>
              <p>This account will allow you to fulfill a gift for a wonderful child this holiday season</p>
              <h4> Step 2: Fulfill as many gifts as you want! </h4>
              <p> You do not have to stop at one.  Put as many gifts as you would like in your Cart.
                Just remember, when you Checkout that gift comes off the Virtual Giving Tree.  </p>
              <p> _ </p>
              <Button outline color="success">Create Gift Fulfiller Account</Button>
            </div>
          </div>
        </div>
      </div>
      <Jumbotron className={props.classes.jumbotronDiv2}>
        <div className={props.classes.jumboTrans}>
          <h1 className='display-3'>What are you waiting for? </h1>
          <p className='lead'>Spread some holiday cheer this season to an amazing child!</p>
          <hr className='my-2' />
          <p>Get started by creating the appropriate account </p>
          <div className={props.classes.jumboButtons}>
            <Link to={'/AllGifts'}>
              <Button color='danger'>Create Gift Request Account</Button>
            </Link>
            <Link to={'/AllGifts'}>
              <Button color='success'>Create Gift Fulfiller Account</Button>
            </Link>
          </div>
        </div>
      </Jumbotron>
      <div className={props.classes.disclaimer}>
        <h4>This website does not accept any funds.</h4>
        <p>All gift requests created on the site are to be for Jammies/Pajamas/PJs.  The fulfiller of the gifts
        will be responsible for purchasing the Jammies per the relevant details on the Gitf Request, and shipping
        said Jammies to the person who made the Gift Request. The mailing address and last name of the person who made
         the Gift Request will only be provided upon Fulfillment of the Gift.
        This information will be emailed to the Gift Fulfiller only after the Gift Fulfiller has created an account
        on the site, and provides the required information.  None of the information gathered will be shared with outside
        organizations.  By creating a Gift Request account and/or a Gift Fulfiller account you agree to signup for our
        email newletter which you can opt out at anytime.  </p>
        <h4> Happy holidays! </h4>
        <p> This site was created by volunteers looking for an oppportunity to spread some holiday cheer!  The costs
      associated with developing, hosting, and maintaining the site/webApp were funded by the following amazing businesses:</p>
        <div className={props.classes.disclaimerBizContainer}>
          <div className={props.classes.disclaimerBiz}>
            <a href={'http://www.mcmeelins.com//'} target='_blank' >
              <img className={props.classes.disclaimerLogo} src='http://i1.wp.com/www.mcmeelins.com/wp-content/uploads/2015/05/McWoodMThive.png?w=1140' />
            </a>
          </div>
          <div className={props.classes.disclaimerBiz}>
            <a href={'http://www.kosmojo.com/'} target='_blank' >
              <img className={props.classes.disclaimerLogo} src='http://www.kosmojo.com/wp-content/uploads/2015/01/headerKosmojo-logo.png' />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

Home.propTypes = propTypes

export default enhancer(Home)
