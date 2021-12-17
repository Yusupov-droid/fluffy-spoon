import {FC, useEffect, useState} from 'react';
import {Box, Button, CircularProgress, Divider, Paper, Typography} from "@material-ui/core";
import {useStyles} from "./styles";
import {fetchData} from "../../../api";
import {format} from 'date-fns';
import {IData} from '../../../api/dto';

interface Props {
    onClose: () => void
}

interface State {
    data: IData[]
    lastUpdate?: Date
    loading: boolean
    error: string
}

const DataTableFunctional: FC<Props> = ({onClose}) => {

    const [state, setState] = useState<State>({
        data: [],
        error: '',
        loading: true,
    })


    const getNewData = async () => {
        try {
            setState({
                ...state,
                error: '',
                loading: true,
            })

            const data = await fetchData()

            setState({
                ...state,
                data,
                error: '',
                loading: false,
            })

        } catch (error) {
            setState({
                ...state,
                loading: false,
                error: String(error)
            })
        }
    }

    const onEscapeKey = (event: KeyboardEvent) => {
        if (event.key === 'Escape') {
            console.log('Закрытие по нажатию клавиши Esc')
            onClose()
        }
    }

    useEffect(() => {
        getNewData()
        document.addEventListener("keydown", onEscapeKey);
        return () => {
            document.removeEventListener("keydown", onEscapeKey);
        }
    }, [])

    useEffect(() => {
        setState({...state, lastUpdate: new Date()})
    }, [state.data])


    const generateTable = () => {
        return state.data.map((item, index) => (
            <div key={index}>
                <div>{item.id}</div>
                <div>{item.name}</div>
                <div>{format(item.createdAt, 'dd.MM.yyyy')}</div>
            </div>
        ))
    }

    const classes = useStyles()
    const table = generateTable()

    return (
        <Paper elevation={6} className={classes.root}>
            <Box color={'primary.main'}>
                <Typography variant={'h6'} align={'center'}>
                    Таблица с данными
                </Typography>
            </Box>

            <Box className={classes.tableContainer}>
                <Divider/>
                {state.error
                    ? <Box color={'error.main'} m={2}>
                        <Typography variant={'h6'} align={'center'}>
                            {state.error}
                        </Typography>
                    </Box>
                    : state.loading
                        ? <div className={classes.progress}>
                            <CircularProgress color={'secondary'}/>
                        </div>
                        : <div className={classes.table}>
                            {table}
                        </div>}
                <Divider/>
            </Box>

            {state.lastUpdate && <Box color={'text.secondary'} className={classes.lastUpdate}>
                <Typography variant={'caption'}>
                    Последнее обновление в {format(state.lastUpdate, 'HH:mm:ss')}
                </Typography>
            </Box>}

            <Box className={classes.buttons}>
                <Button variant={'contained'}
                        color={'primary'}
                        disabled={state.loading}
                        onClick={getNewData}>
                    Обновить данные
                </Button>
                <Button variant={'contained'}
                        color={'secondary'}
                        onClick={onClose}>
                    Закрыть (Esc)
                </Button>
            </Box>
        </Paper>
    )
}

export default DataTableFunctional


