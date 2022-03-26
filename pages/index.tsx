import React from 'react';
import {
    ActionIcon,
    ColorScheme,
    ColorSchemeProvider,
    Container,
    Grid,
    MantineProvider,
    SimpleGrid,
    TextInput,
    useMantineTheme,
    createStyles,
} from '@mantine/core';
import { CirclePlus } from 'tabler-icons-react';
import styles from '../styles/Home.module.css';
import { useState } from 'react';
import { TodoApp } from './todoapp/TodoApp';

const Home = (props: any) => {
    const theme = useMantineTheme();
    return (
        <MantineProvider theme={{ colorScheme: 'dark' }}>
            <TodoApp></TodoApp>
        </MantineProvider>
    );
};

export default Home;
