import {
    ActionIcon,
    Text,
    Button,
    createStyles,
    Group,
    Menu,
    Paper,
} from '@mantine/core';
import React from 'react';
import { useState } from 'react';
import { Bookmark, Calendar, ChevronDown, Trash } from 'tabler-icons-react';

const useStyles = createStyles((theme) => ({
    button: {
        borderTopRightRadius: 0,
        borderBottomRightRadius: 0,
    },
    main: {
        marginTop: '1em',
    },
    menuControl: {
        borderTopLeftRadius: 0,
        borderBottomLeftRadius: 0,
        border: 0,
        marginRight: '10px',
        borderLeft: `1px solid ${theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white}`,
    },
}));

interface task {
    text: String,
    completed: boolean
}

interface args {
    componentTask: task;
    todoList: task[],
    setTodoList: any
}



export function TaskComponent({ componentTask, todoList, setTodoList }: args) {
    const { classes, theme } = useStyles();
    const menuIconColor =
        theme.colors[theme.primaryColor][theme.colorScheme === 'dark' ? 5 : 6];

    let btntext = componentTask.completed ? 'Uncomplete' : 'Completed';

    return (
        <div className={classes.main}>
            <Group noWrap spacing={0}>
                <Button className={classes.button} onClick={(e: any) => {
                    e.preventDefault();
                    componentTask.completed = componentTask.completed ? false : true;
                    if (componentTask.completed) {
                        setTodoList(todoList.filter(task => todoList.indexOf(task) != todoList.indexOf(componentTask)).concat(componentTask));
                    } else {
                        setTodoList([componentTask].concat(todoList.filter(task => todoList.indexOf(task) != todoList.indexOf(componentTask))));
                    }
                }}>
                    {btntext}
                </Button>
                <Menu
                    control={
                        <ActionIcon
                            variant="filled"
                            color={theme.primaryColor}
                            size={36}
                            className={classes.menuControl}
                        >
                            <ChevronDown size={16} />
                        </ActionIcon>
                    }
                    transition="pop"
                    placement="end"
                >
                    <Menu.Item icon={<Trash size={16} color={menuIconColor} />} onClick={(e: any) => {
                        e.preventDefault();
                        setTodoList(todoList.filter(task => todoList.indexOf(task) != todoList.indexOf(componentTask)));
                    }}>
                        Delete
                    </Menu.Item>
                </Menu>
                <Paper
                    radius="md"
                    withBorder
                    p="xs"
                    sx={(theme) => ({
                        backgroundColor:
                            theme.colorScheme === 'dark'
                                ? theme.colors.dark[7]
                                : theme.white,
                    })}
                >
                    <Text
                        align="center"
                        sx={(theme) => ({
                            color:
                                theme.colorScheme === 'dark'
                                    ? theme.colors.white
                                    : theme.colors.dark[8],
                            fontWeight: '500',
                        })}
                        size="sm"
                    >
                        {componentTask.text}
                    </Text>
                </Paper>
            </Group>
        </div>
    );
}
