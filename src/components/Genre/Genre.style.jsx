import styled from 'styled-components'

export const StyledGenre = styled.div `

div h2, p, li {
    color: #fff;
}
li{
    color: #84858E;
    padding: 0.3rem;
    font-size: 0.8rem;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    cursor: pointer;
    transition: .4s; 
    max-width: 100%;
    flex-wrap: wrap;
}

ul {
    display: flex;
    list-style-type: none;    
    max-width: 100%;
    flex-wrap: wrap;
}

a {
    text-decoration: none;
    color: #84858E;
    max-width: 100%;
}

a:hover {
    color: #188BD6;
}



`