import React from 'react'
import { useSelector } from 'react-redux';
import { selectNews } from '../features/newsSlice';
import styled from 'styled-components'


function GetHistory() {

    const newsList = useSelector(selectNews)
    console.log(newsList)
    return (
        <History>
            <h1>Previously Searched News</h1>
            <p>If you click on any of the item, You could see news on search page</p>
            <PreviousNews>
                {newsList && newsList.map(news => (
                    <News>
                        <h4>{news.name}</h4>
                        <p>{news.time}</p>
                    </News>
                ))}
            </PreviousNews>
        </History>
    )
}

export default GetHistory;

const History = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    margin-top:1rem;
`;

const PreviousNews = styled.div`
    display: flex;
    flex-direction:column;
    margin-top:1rem;
`;

const News = styled.div`
    background:lightgray;
    padding:1rem;
    width:17em;
    margin-bottom:1rem;
    border-radius:1rem;
    display:flex;
    justify-content:space-between;
    align-items:center;
`;