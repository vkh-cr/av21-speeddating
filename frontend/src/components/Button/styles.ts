import styled from 'styled-components';

export const Container = styled.div`
	box-shadow:inset 0px 1px 0px 0px #651E7E;
	background:linear-gradient(to bottom, #651E7E 5%, #1E337E 100%);
	background-color:#651E7E;
	border-radius:6px;
	border:1px solid #651E7E;
	display:inline-block;
	cursor:pointer;
	color:#ffffff;
	font-size:15px;
	width: calc(100% - 50px);
	text-align: center;
	padding:12px 24px;
	text-transform: uppercase;
	text-shadow:0px 1px 0px #528009;
	margin: 5px 0;
  
  &&:hover {
    background:linear-gradient(to bottom, #651E7E 5%, #1E337E 100%);
    background-color:#77a809;
  }

  &&:active {
    position:relative;
    top:1px;
  }
`;


