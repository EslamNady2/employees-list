import styled from "styled-components";
import { colors } from "src/configs/theme";

export const PageContainer = styled.div`
    padding: 16px 32px;
`

export const LoaderContainer = styled.div`
   display: flex;
   justify-content: center;
`

export const SectionsDivider = styled.div`
    margin: 16px 0;
    border-bottom: 2px solid ${colors.mainGrey};
`