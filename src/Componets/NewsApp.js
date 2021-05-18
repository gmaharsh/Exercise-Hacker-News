import { Badge, Button } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components'


function NewsApp() {

    const [search, setSearch] = useState("")
    const [data, setData] = useState([])

    function searchNews() {
        if (search == "") {
            alert("Please Type What News you want for")
        } else {
            fetch(`http://hn.algolia.com/api/v1/search?query=${search}&restrictSearchableAttributes=url`)
                .then(res => res.json())
                .then(data => {
                    console.log(data.hits)
                    setData(data.hits)
                    setSearch("")
            })
        }
    }

    const searchTopNews = (news) => {
        fetch(`http://hn.algolia.com/api/v1/search?query=${news}&restrictSearchableAttributes=url`)
                .then(res => res.json())
                .then(data => {
                    console.log(data.hits)
                    setData(data.hits)
                    setSearch("")
        })
    }

    return (
        <News>
            <h1>Hacker News App</h1>
            <NewsSearch>
                <input
                    type="text"
                    placeholder="Search for any news"
                    value= {search}
                    onChange={(e) => setSearch(e.target.value)}
                />
                <Button variant="contained" color="primary" onClick={searchNews}>Search</Button>
            </NewsSearch>
            <TopNews>
                <Badge onClick={() => searchTopNews("top")}>Latest News</Badge>
                <Badge onClick={() => searchTopNews("covid")}>Covid News</Badge>
                <Badge onClick={() => searchTopNews("cryptocurrency")}>Cytrocurrency</Badge>
            </TopNews>
            {data.length > 0 &&
                <NewsData>
                {data.map(d => (
                    <Data>
                        <h4>{d.title}</h4>
                        <Extra>
                            <p>Created On:-{(d.created_at).split("T")[0]}</p>
                            <a href={d.url} target="_blank">Learn More</a>
                        </Extra>
                    </Data>
                ))}
                </NewsData>
            }
            
        </News>
    )
}

export default NewsApp;

const News = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    height:100vh;
`;

const NewsSearch = styled.div`
    display: flex;
    justify-content:space-evenly;
    input{
        flex: 1;
        margin: 0 1em;
        width:25em;
    }
    @media(max-width:700px){
        input{
            width:15em;
        }
    }
    
`

const TopNews = styled.div`
    display:flex;
    justify-content:space-between;
    width:25em;
    margin-top:2em;
    cursor:pointer;
    color:green;
    @media(max-width:700px){
        width:20em;
        justify-content:space-evenly;
    }
`;

const NewsData = styled.div`
    display:flex;
    flex-direction:column;
    margin:1em;
    padding:1rem;
    height:75vh;
    border:1px solid lightgray;
    overflow-y:scroll;
    border-radius:20px;
    // box-shadow:25px 25px 0px 0px #E1EEFF;
`;

const Data = styled.div`
    background:lightgray;
    justify-content:flex-start;
    margin-bottom:1rem;
    padding:0.5rem
`;

const Extra = styled.div`
    display:flex;
    align-items:center;
    justify-content:space-between;
    @media(max-width:700px){
        flex-direction:column;
    }
`