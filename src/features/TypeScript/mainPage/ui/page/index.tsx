import React, {FC} from 'react'
import {useStyles} from "./syles";
import {Box, Divider, Paper, Typography} from "@material-ui/core";
import Task from "../molecules/Task";

const MainPage: FC = () => {

    const classes = useStyles()

    return (
        <Paper elevation={6} className={classes.root}>
            <Box p={2}>
                <Typography variant={'h3'} color={'secondary'} align={'center'}>
                    Takeoff-Staff
                </Typography>
                <Typography variant={'h5'} color={'primary'} align={'center'}>
                    Тестовые задания по <b>React</b>
                </Typography>
            </Box>
            <Divider/>
            <Box className={classes.tasksContainer}>
                <Typography variant={'h5'} color={'secondary'}>
                    JavaScript
                </Typography>
                <Box className={classes.tasks}>
                    <Task title={'Задание 1'}
                          text={'Переписать компонент в классовом стиле в функциональный.'}
                          url={'/task-1'}/>
                    <Divider/>
                    <Task title={'Задание 2'}
                          text={'Решить проблему с загрузкой картинок.'}
                          url={'/task-2'}/>
                </Box>
            </Box>
            <Divider/>
            <Box className={classes.tasksContainer}>
                <Typography variant={'h5'} color={'secondary'}>
                    TypeScript
                </Typography>
                <Box className={classes.tasks}>
                    <Task title={'Задание 1'}
                          text={'Переписать компонент в классовом стиле в функциональный.'}
                          url={'/task-1-ts'}/>
                    <Divider/>
                    <Task title={'Задание 2'}
                          text={'Решить проблему с загрузкой картинок.'}
                          url={'/task-2-ts'}/>
                </Box>
            </Box>
            <Divider/>
        </Paper>
    )
}

export default MainPage
