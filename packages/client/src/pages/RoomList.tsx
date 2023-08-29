import React from "react";
import styled from "@emotion/styled";

import BottomNavigation from "../components/BottomNavigation";
import TopNavigation from "../components/TopNavigation";

const Base = styled.div`
  width: 100%;
  height: 100vh;
  padding: 0 12px;
  box-sizing: border-box;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const RoomListPage: React.FC = () => {
  return (
    <Base>
      <Container>
        <TopNavigation title="채팅" />
        <BottomNavigation />
      </Container>
    </Base>
  );
};

export default RoomListPage;