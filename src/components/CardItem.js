import React from 'react';
import noImg from '../Images/noImg.jpg'
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
  MDBRipple
} from 'mdb-react-ui-kit';

export default function CardItem(props) {
  return (
    <div className='mt-3' style={{width: '23rem'}}>
        <MDBCard>
        <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay d-flex justify-content-center'>
            <MDBCardImage src={props.imgUrl === null ? noImg : props.imgUrl} fluid alt='' style={{height:'14rem', position:'absolute', top:'0' , zIndex:'100'}} />
            <MDBCardImage src={noImg} fluid alt='' style={{height:'14rem', position:'relative'}} />
            <a>
            <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
            </a>
        </MDBRipple>
        <MDBCardBody>
            <MDBCardTitle>{props.title}</MDBCardTitle>
            <MDBCardText>
            {props.desc}
            </MDBCardText>
            <MDBBtn href={props.newsApi} target="_blank" color='dark' >Read More</MDBBtn>
        </MDBCardBody>
        </MDBCard>
    </div>
  );
}