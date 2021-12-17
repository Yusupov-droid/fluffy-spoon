import React from 'react'
import {useStyles} from "./styles";
import {Box, Button, Paper, Typography} from "@material-ui/core";
import {useHistory} from "react-router";

const Task = ({title, text, url}) => {

    const classes = useStyles()
    const history = useHistory()

    const handleButton = () => {
        history.push(url)
    }

    return (
        <Paper elevation={6} className={classes.root}>
            <Box>
                <Typography variant={'h6'} color={'primary'}>
                    {title}
                </Typography>
                <Typography>
                    {text}
                </Typography>
            </Box>
            <Box className={classes.buttonContainer}>
                <Button variant={'contained'} color={'primary'} onClick={handleButton}>
                    Перейти
                </Button>
            </Box>
        </Paper>
    )
}

export default Task
