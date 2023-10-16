import styled from 'styled-components'


export const StyledNavbar = styled.nav `
    

    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
    background-color: #252836;

    h2 a {
        display: flex;
        align-items: center;
        gap: 0.5rem
    } 

    form {
    display: flex;
    gap: 0.5rem;
    }

    form button {
    background-color: #188BD6;
    border: 2px solid #188BD6;
    border-radius: 4px;
    color: #fff;
    padding: 0.3rem;
    font-size: 1.3rem;
    display: flex;
    align-items: center;
    cursor: pointer;
    transition: .4s;    
    }

    form button:hover {
    background-color: transparent;
    }



`
