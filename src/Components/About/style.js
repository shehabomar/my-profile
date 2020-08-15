import styled from 'styled-components';
export const AboutSection=styled.div`
    height: 500px;
    background: url('images/about-bg.jpg');
    background-size: cover;
    background-position: center;
    background-attachment: fixed
`
export const AboutInfo =styled.h2`
    padding-top: 50px;
    width: 50%;
    float: right;
`

export const InfoTitle=styled.h2`
    font-weight: bold;
    font-size: 50px;
    margin:5px 0;
`
export const Span=styled.span`
    font-weight: normal
`
export const InfoDir=styled.h4 `
    font-size: 40px;
    color: #eb5424;
    margin-bottom: 10px
`

export const InfoDesc=styled.p `
    color: rgba(000,000,000,0.5);
    font-weight:normal;
    font-size:20px;
    margin-bottom: 15px;
    line-height: 1
`
export const Anchor=styled.a `
    text-decoration: none
`