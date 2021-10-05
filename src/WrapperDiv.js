import styled from 'styled-components';
const WrapperDiv = styled.div`
text-align: center;
color: white;
padding-top: 0.5rem;
padding-bottom: 0.5rem;
border: 2px solid black;
background-color: ${props => props.score%2===0 ? 'orange' : 'blue'};
`
export default WrapperDiv;