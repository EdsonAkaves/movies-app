import styled from "styled-components";

export const StyledContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 10px;
    height: 100vh;
`

export const StyledContent = styled.div`
    gap: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    box-shadow: 0 1px 2px #0003;
    background-color: #252836;
    max-width: 350px;
    padding: 20px;
    border-radius: 5px;
`

export const StyledLabel = styled.label`
    font-size: 18px;
    font-weight: 600;
    color: #fff;
`
export const StyledLabelSignin = styled.label`
    font-size: 16px;
    color: #84858E;
`

export const StyledLabelError = styled.label`
    font-size: 14px;
    color: red;
`

export const StyledStrong = styled.strong`
    cursor: pointer;

    a {
        text-decoration: none;
        color: #84858E;
        &:hover {
        color: #188BD6;
    }
    }
`

