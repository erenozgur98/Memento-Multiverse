import React from 'react'
import {
    Box,
    Link,
    Flex,
    Text
} from 'rebass';
import '../styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Header() {
    return (
        <div>
            <Flex
                px={5}
                color='white'
                bg='black'
                alignItems='center'>
                <Text p={4} fontWeight='bold' fontSize="30px" color="#eee">Memento Multiverse</Text>
                <Box mx='auto' />
                <Link className="navLink" variant='nav' href='/home'>
                    <FontAwesomeIcon icon="home" />
                    {' '}
                    Shop
                </Link>
                <Link className="navLink" variant='nav' href='/login'>
                    <FontAwesomeIcon className="icons" icon="shopping-cart" />
                    {' '}
                    Cart
                </Link>
                <Link className="navLink" variant='nav' href='/login'>
                    <FontAwesomeIcon icon="sign-in-alt" />
                    {' '}
                    Login
                </Link>
            </Flex>
        </div>
    )
}

export default Header;