import styled from 'styled-components';
 
export const Table = styled.table`
    background: var(--gray);
    border-radius: 6px;
    min-width: 500px;
    min-height: 500px;

    td {
      border: 1px solid var(--pink);
      cursor: pointer;
       
      &:hover {
        border-color: var(--purple);
      }
    } 
`; 

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  button {
    color: #fff;
    padding: 10px 20px;
    border-radius: 5px;
    background-color: var(--pink);
    transition: 0.2s all ease-in-out;
    font-size: 16px;
    font-weight: 300;
    letter-spacing: 1px;
    cursor: pointer;
    border: none;

    &:hover {
      background: var(--purple);
    }
  }
`