import styled from 'styled-components'

export const ChallengeBoxContainer = styled.section`

    background:${(props) => props.theme.color.white};
    border-radius: 5px;
    box-shadow: 0 0 60px rgba(0 , 0 , 0 , 0.05);
    height: 100%;
    padding:1.5rem 2rem;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
 ` 

 export const ChallengeBoxActive = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
 ` 

 export const ChallengeBoxNotActive = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    font-size:1.5rem;
    font-weight: 700;
    justify-content: center;
    line-height: 1.4;
` 

export const ChallengeBoxTitle = styled.h1`
    color: #5965e0;
    border-bottom: 1px solid ${(props) => props.theme.color.gray};
    font-size:1.25rem;
    font-weight: 600;
    padding: 0 2rem 1.5rem;
` 

export const ChallengeBoxMain = styled.div`
    align-items: center;
    display: flex;
    flex:1;
    flex-direction: column;
    justify-content: center;
` 

export const ChallengeBoxSubtitle = styled.h2`
    color:${(props) => props.theme.color.title};
    font-size:2rem;
    font-weight: 600;
    margin: 1.5rem 0 1rem;
` 

export const ChallengeBoxText = styled.p`
    line-height: 1.5;
` 

export const ChallengeBoxButtons = styled.div`
    display:grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
` 