import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  position: relative;
  padding: 0px 80px;
  max-width: 1440px;
  margin: 0 auto;
  @media screen and (max-width: 768px) {
    padding: 0px 10px;
  }
`;

const Container = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};
export default Container;
