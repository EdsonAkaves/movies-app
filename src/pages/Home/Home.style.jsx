import styled from 'styled-components';

export const StyledContainer = styled.div`
  background-color: #1F1D2B;
`;

export const StyledMoviesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;

  div {
    width: 30%;
    color: #fff;
    border-radius: 1rem;
    margin-bottom: 2.5rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: #252836;
    padding: 1rem;

    img,
    p,
    h2 {
      margin-bottom: 1rem;
    }

    a {
      border: 2px solid #fff;
      border-radius: 4px;
      color: #fff;
      padding: 1rem 0.5rem;
      align-items: center;
      transition: 0.4s;
      text-align: center;
      font-weight: bold;

      &:hover {
        background-color: #fff;
        color: #000;
      }
    }
  }
`;
