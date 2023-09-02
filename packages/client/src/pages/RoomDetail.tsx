import styled from "@emotion/styled";
import { Global, css } from "@emotion/react";

const globalStyles = css`
  body {
    background-color: #abc1d1;
  }
`;

const Base = styled.div`
  position: relative;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 64px;
  align-items: center;
  padding: 0 24px;
`;

const RoomDetailPage: React.FC = () => {
  return (
    <Base>
      <Global styles={globalStyles} />
      <Container>
        {/* <MessageList/> */}
      </Container>
      {/* <inputChat/> */}
    </Base>
  );
};

export default RoomDetailPage;