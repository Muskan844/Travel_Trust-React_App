// import Des1 from "../assets/chelsea-gates-0653_wY0nRc-unsplash.jpg";
import Des2 from "../assets/moosa-haleem-758Km8MAcyI-unsplash.jpg";
import Des3 from "../assets/braxton-apana-z_z6aYYrdvw-unsplash.jpg";
import Des4 from "../assets/maksym-harbar--15TZyzbZSU-unsplash.jpg";
import "./DestinationStyles.css"; 
import { Component } from "react";
class DestinationData extends Component {
    render() { 
        return (
            <div className={this.props.clName}>
            <div className="des-text">
              <h2>{this.props.heading}</h2>
              <p>{this.props.text}</p>
            </div >
            <div className="image">
            <img alt="img" src={this.props.img1} />
            <img alt="img" src={this.props.img2} />
            </div>
          </div>    
        );
    }
}

export default DestinationData;