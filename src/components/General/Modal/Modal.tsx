import styled from "styled-components";

export const Modal = styled.div`
position: fixed;
top: 0%;
bottom: 0;
left: 0;
right: 0;
z-index: 100;
background-color: white;
animation: .3s example;
padding: 1rem;
box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;

& header {
flex-direction: row;
align-items: center;
gap: 1rem;
margin-bottom: 1rem;
color: ${({ theme: { colors } }) => colors.text};
}


& header button {
  border: none;
  font-size: 22px;
  color: ${({ theme: { colors } }) => colors.text};
  cursor: pointer;
}

& .wrapper-noti {
   margin-top: 1rem;
 gap: 1rem;
 overflow-y: auto;
}


& .switch {
  display: flex;
  
}
& .switch button {
  width: fit-content;
  border: none;
}
@keyframes example {
from {transform: scale(0.5);}
to {transform: scale(1);}
}

@media screen and (min-width: 770px) {
& {
 position: absolute;
 top: 28px;
 bottom: inherit;
 left: inherit;
 min-width: 350px;
 max-height: 500px;
 border-radius: 1rem;
}

& .wrapper-noti {

 min-height: 400px;
max-height: 700px;
}
}
`;
