import {Box, Button, Divider, Paper, Typography} from "@material-ui/core";
import React, {FC, useState} from 'react'
import DataTableClass from "../organisms/DataTableClass";
import {useStyles} from "./styles";
import DataTableFunctional from "../organisms/DataTableFunctional";

const ClassToFunctional: FC = () => {

    const classes = useStyles()

    const [open, setOpen] = useState(false)
    const handleOpen = () => setOpen(true)
    const handleClose = () => setOpen(false)

    const tables = (
        <div className={classes.testContainer}>
            <DataTableClass onClose={handleClose}/>
            <DataTableFunctional onClose={handleClose}/>
        </div>
    )

    const button = (
        <div className={classes.buttonContainer}>
            <Button variant={'contained'} color={'primary'} onClick={handleOpen}>
                Открыть таблицы
            </Button>
        </div>
    )

    return (
        <Paper elevation={6} className={classes.root}>
            <Box className={classes.taskContainer}>
                <Typography variant={'h4'} color={'secondary'}>
                    TypeScript
                </Typography>
                <Typography variant={'h6'} color={'primary'}>
                    Задание 1
                </Typography>
                <Typography variant={'body2'}>
                    Переписать компонент в классовом стиле в функциональный.
                </Typography>
                <Typography variant={'body1'} color={'secondary'}>
                    src/features/TypeScript/classToFunctional
                </Typography>
            </Box>
            <Divider/>
            {open ? tables : button}
        </Paper>
    )
}

export default ClassToFunctional
