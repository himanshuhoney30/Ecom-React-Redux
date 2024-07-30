import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { addtocart } from '../Features/CartSlice';
import {
    MDBCard,
    MDBCardImage,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBRow,
    MDBCol,
    MDBBtn,
    MDBContainer
} from 'mdb-react-ui-kit';

export default function Cards() {
    const items = useSelector((state) => state.allCart.items)
    const dispatch = useDispatch()

    return (
        <MDBContainer>
            <MDBRow >
                {items
                .map((item , index) => (
                    <MDBCol key={index} size="md-4 mt-4 mb-4 col-lg-3 col-sm-6">
                        <MDBCard>
                            <MDBCardImage src={item.image} alt='...' position='top' style={{height:"20rem"}}/>
                            <MDBCardBody>
                                <MDBCardTitle>{item.model}</MDBCardTitle>
                                <MDBCardText>
                                    This is a longer card with supporting text below as a natural lead-in to additional content.
                                    This content is a little bit longer.
                                </MDBCardText>
                                <MDBBtn class="btn btn-primary" onClick={()=>dispatch(addtocart(item))}>Add to cart</MDBBtn>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                ))}
            </MDBRow>
        </MDBContainer>
    );
}
