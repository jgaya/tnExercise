import React from "react"
import { Outlet } from 'react-router-dom';
import styled from "styled-components";

const Wrapper = styled.div`
width: 100%;
display: flex;
flex-direction: column;
`;
const ContentWrapper = styled.div`

display: flex;
flex-direction: column;
padding:20px;
`;
const Header = styled.div`
width: 100%;
display: flex;
flex-direction: row;
height: 100px;
justify-content: center;
vertical-align: center; 
`;

const Title = styled.div`
align-self: center;
font-size: 18px;
font-weight: bold;
`;

export default function layout () {
    return (
        <Wrapper>
            <Header>
                <Title>Tn Exercise</Title>
            </Header>
            <ContentWrapper>
              <Outlet/>
            </ContentWrapper>   
        </Wrapper>
    );

}