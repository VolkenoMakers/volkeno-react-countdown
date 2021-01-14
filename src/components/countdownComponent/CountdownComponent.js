import React, {Component} from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
import './CountdownComponent.css'

export default class CountdownComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,

        };
    }

    componentWillMount() {
      this.getTimeUntil(this.props.deadline);
    }

    componentDidMount() {
        setInterval(() => this.getTimeUntil(this.props.deadline), 1000);
    }

    leading0(num) {
        return num < 10 ? '0' + num : num;
    }
    
    getTimeUntil(deadline) {
        const time = Date.parse(deadline) - Date.parse(new Date());

        if(time < 0) {
            this.setState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

        } else {
            const seconds = Math.floor((time/1000)%60);
            const minutes = Math.floor((time/1000/60)%60);
            const hours = Math.floor((time/(1000*60*60))%24);
            const days = Math.floor(time/(1000*60*60*24));

            this.setState({ days, hours, minutes, seconds });
        }
        
    }

    render() {
      return(
        <div className={`component-countdown-component ${this.props.className}`}>
          <Container className="cd-container">
            <Row className="cd-row">
              <Col md="12" className="countdown-col">
                <Col md="3" className="cd_item cd-days"> 
                  <div className="cd-item-number cd-days" style={{width: `${this.props.boxWidth}px`, height: `${this.props.boxHeight}px`, lineHeight: `${this.props.textLineHeight}px`, fontSize: `${this.props.textFontSize}px`, fontWeight: `${this.props.textFontWeight}` }}> {this.leading0(this.state.days)} </div> 
                  <span className="cd-item-label">{ this.props.dayTextLabel }</span>
                </Col>
                <Col md="3" className="cd_item cd-hours">
                    <div className="cd-item-number cd-hours" style={{width: `${this.props.boxWidth}px`, height: `${this.props.boxHeight}px`, lineHeight: `${this.props.textLineHeight}px`, fontSize: `${this.props.textFontSize}px`, fontWeight: `${this.props.textFontWeight}`}}> {this.leading0(this.state.hours)}  </div>
                    <span className="cd-item-label">{ this.props.hourTextLabel }</span>
                </Col>
                <Col md="3" className="cd_item cd-minutes">
                    <div className="cd-item-number cd-minutes" style={{width: `${this.props.boxWidth}px`, height: `${this.props.boxHeight}px`, lineHeight: `${this.props.textLineHeight}px`, fontSize: `${this.props.textFontSize}px`, fontWeight: `${this.props.textFontWeight}`}}>{this.leading0(this.state.minutes)} </div>
                    <span className="cd-item-label">{ this.props.minuteTextLabel }</span>
                </Col>
                <Col md="3" className="cd_item cd-seconds">
                    <div className="cd-item-number cd-secondes" style={{width: `${this.props.boxWidth}px`, height: `${this.props.boxHeight}px`, lineHeight: `${this.props.textLineHeight}px`, fontSize: `${this.props.textFontSize}px`, fontWeight: `${this.props.textFontWeight}`}}>{this.leading0(this.state.seconds)} </div>
                    <span className="cd-item-label">{ this.props.secondTextLabel }</span>
                </Col>
              </Col>
            </Row>
          </Container>
        </div>
      );
    }
}
