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
  steps: {
    textAlign: 'center',
    marginTop: '100px',
    marginBottom: '100px'
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
