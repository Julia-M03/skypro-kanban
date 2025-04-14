import styled from "styled-components"

export const SCalendar = styled.div`
  width: 182px;
  margin-bottom: 20px;
@media screen and (max-width: 495px) {
  width: 100%;
}
@media screen and (max-width: 660px) {
  max-width: 340px;
  width: 100%;
  display: none;
  margin-bottom: 7px;
}
`;

export const DataText = styled.p`
  margin-bottom: 14px;
  padding: 0 7px;
  color: #000;
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
    @media screen and (max-width: 660px) {
      padding: 0;
    }
`;

export const CalendarBlock = styled.div`
  display: block;
`;

export const CalendarNav = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 14px;
  padding: 0 7px;
  @media screen and (max-width: 660px) {
    padding: 0;
  }
`;

export const CalendarMonth = styled.div`
  color: #94A6BE;
  font-size: 14px;
  line-height: 25px;
  font-weight: 600;
`;

export const NavActions = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const NavAction = styled.div`
  width: 18px;
  height: 25px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  svg {
  fill: #94A6BE;
}
`;

export const CalendarContent = styled.div`
    margin-bottom: 12px;
`;

export const CalendarDays = styled.div`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-between;
  margin: 7px 0;
  padding: 0 7px;
`;

export const CalendarPeriod = styled.div`
   padding: 0 7px;
   @media screen and (max-width: 660px) {
    padding: 0;
   }
`;

export const CalendarTerm = styled.p`
  color: #94A6BE;
  font-size: 10px;
  line-height: 1;
  span {
  color: #000000;
  }
  @media screen and (max-width: 660px) {
  font-size: 14px;
 }
`;