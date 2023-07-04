import React from 'react';
import { Box, Heading } from '@chakra-ui/react';

const Header: React.FC = () => {
    return (
        <Box bg="green" h="60px" p="10px" display="flex" alignItems="center">
            <Heading color="white" size="xl">Mile Calendar</Heading>
        </Box>
    );
};

export default Header;
