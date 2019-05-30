import React, { Component } from 'react'
import Logo from '../assets/logoSoma.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../styles/footer.css';

const imagesPath = {
        mx: 'https://cdn.icon-icons.com/icons2/1531/PNG/512/3253493-flag-mexico-icon_106775.png',
        us: 'https://cdn.countryflags.com/thumbs/united-states-of-america/flag-round-250.png'
      }
      
class Footer extends Component {
    
     
        state = {
          open: true,
        }
        toggleImage = () => {
          this.setState(state => ({ open: !state.open }))
          this.props.handelChangeIdioma()
        }
        getImageName = () => this.state.open ? 'mx' : 'us'
      
      
    render() { 
        const imageName = this.getImageName();
        return ( 
            <div className="footerContainer">
            <section className="langContainer">
            <img style={{width: '45px'}} onChange={this.props.handelChangeIdioma} src={imagesPath[imageName]} onClick={this.toggleImage} />
                {/* <select onChange={props.handelChangeIdioma} style={{border:"solid 1px"}}>
                    <option value="Esp"><img src={props.data.footer.bandera} alt=""/></option>
                    <option value="Eng">{props.data.footer.bandera}</option>
                </select> */}
            </section>
            <div className="infoGroup">
                <section className="rightsContainer">
                    <p>{this.props.data.footer.derechos}</p>
                </section>
                <section className="designContainer">
                    <p>{this.props.data.footer.desarrollo}</p>
                    <img src={Logo} alt="logo soma" />
                </section>
            </div>

            <section className="linkedinContainer">
                <a href="" target="_blank"><FontAwesomeIcon className="linkedin" icon={['fab', 'linkedin-in']} /></a>
            </section>
        </div>
         );
    }
}
 
export default Footer;

