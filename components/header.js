import React from 'react'
import styled from 'styled-components';
import Link from 'next/link';


const Main = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    background-color: #23262b;
    font-family: 'Dancing Script', cursive;
    a {
        text-decoration: none;
        color: #FFFFFF;
        
    }
    a:hover {
            cursor: pointer;
            color: gray;
        }
    h1 {
        padding: 0 4rem;
    }
`
const List = styled.ul`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 40%;
    list-style-type: none;
    :last-child{
        padding-right: 2rem;
    }
`
const ListItem = styled.li`
    text-decoration: none;
`

const Header = () => {
    return (
        <Main>
        <Link href='/'><h1>Top 11</h1></Link>
        <List>
            <ListItem><Link href="/">Top</Link></ListItem>
            <ListItem><Link href="/browse">Browse</Link></ListItem>
            <ListItem><Link href="/random">Random</Link></ListItem>
            <ListItem><Link href="/why">Why</Link></ListItem>
            <ListItem><Link href="/addTop">Add Top 11</Link></ListItem>
            <ListItem><Link href="/search">Search</Link></ListItem>
        </List>
    </Main>
    )
}

export default Header