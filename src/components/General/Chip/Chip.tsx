import styled from "styled-components";

const Chip = styled.div<{ $bg: string; $color: string; $bordercolor?: string }>`
  background-color: ${(props) => props.$bg};
  color: ${(props) => props.$color};
  border:1px solid ${(props) => props.$bordercolor};
  width: fit-content;
  border-radius: 5px;
  padding: 0.3rem 0.5rem;
  font-size: .757rem;
  cursor: pointer;

  &:hover {
    background-color: #253d4e33;
  }
`;

export default Chip;
