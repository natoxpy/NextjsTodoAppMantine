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
    Button,
} from '@mantine/core';
import { Calendar, ChevronDown, CirclePlus, Menu } from 'tabler-icons-react';
import styles from '../styles/Home.module.css';
import { useState } from 'react';
import { TaskComponent } from './taskComponent';

const useStyles = createStyles((theme) => ({
    tasksContainer: {
        overflowY: 'auto',
        paddingTop: '0.5em',
        width: '100%',
        backgroundColor:
            theme.colorScheme === 'dark'
                ? theme.colors.dark[6]
                : theme.colors.gray[3],
        color:
            theme.colorScheme === 'dark'
                ? theme.colors.gray[3]
                : theme.colors.dark[6],
        height: '90vh',
    },

    menuControl: {
        borderTopLeftRadius: 0,
        borderBottomLeftRadius: 0,
        border: 0,
        borderLeft: `1px solid ${theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white}`,
    },
    small: {
        width: '600px',
    },
}));


interface task {
    text: string;
    completed: boolean;
}

export function TodoApp(props: any) {
    const [userInput, setUserInput] = useState('');
    const [input, setInput] = useState('');
    const [todoList, setTodoList] = useState<Array<task>>([]);

    const { classes, theme } = useStyles();

    return (
        <Container my="sm" className={classes.small}>
            <SimpleGrid
                cols={1}
                spacing="sm"
                breakpoints={[{ maxWidth: 'lg', cols: 1 }]}
            >
                <TextInput
                    size="md"
                    width={10}
                    onChange={(e) => {
                        e.preventDefault();
                        setInput(e.target as any);
                        setUserInput(e.target.value);
                    }}
                    onKeyUp={(e) => {
                        if (e.key == "Enter") {
                            e.preventDefault();
                            if (input && userInput.trim() != '') {
                                (input as any).value = "";
                                setTodoList([{
                                    'text': userInput as never,
                                    'completed': false
                                }, ...todoList]);
                            }
                        }
                    }}
                    rightSection={
                        <ActionIcon
                            size={32}
                            variant="filled"
                            onClick={(e: any) => {
                                e.preventDefault();
                                if (input && userInput.trim() != '') {
                                    (input as any).value = "";
                                    setTodoList([{
                                        'text': userInput as never,
                                        'completed': false
                                    }, ...todoList]);
                                }
                            }}
                        >
                            <CirclePlus size={18} />
                        </ActionIcon>
                    }
                    placeholder="Add task"
                    rightSectionWidth={70}
                    {...props}
                />
                <Container className={classes.tasksContainer}>
                    {todoList.length > 0
                        ? todoList.map((task, idx) => {
                            return (
                                <TaskComponent key={idx} componentTask={task} setTodoList={setTodoList} todoList={todoList} />
                            );
                        })
                        : '[ Enter todo item ]'}
                </Container>
            </SimpleGrid>
        </Container>
    );
}
