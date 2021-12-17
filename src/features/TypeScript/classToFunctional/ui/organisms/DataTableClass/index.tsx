import React from 'react';
import {Box, Button, CircularProgress, Divider, Paper, Typography, withStyles, WithStyles} from "@material-ui/core";
import {styles} from "./styles";
import {fetchData} from "../../../api";
import {IData} from "../../../api/dto";
import {format} from 'date-fns';

type Props = {
    onClose: () => void
} & WithStyles<ReturnType<typeof styles>>

interface State {
    data: IData[]
    lastUpdate?: Date
    loading: boolean
    error: string
}

class DataTableClass extends React.PureComponent<Props, State> {

    constructor(props: Props) {
        super(props)

        this.state = {
            data: [],
            loading: true,
            error: ''
        }

        this.onEscapeKey = this.onEscapeKey.bind(this)
        this.getNewData = this.getNewData.bind(this)
    }

    componentDidMount() {
        this.getNewData()
        document.addEventListener("keydown", this.onEscapeKey)
    }

    componentWillUnmount() {
        document.removeEventListener("keydown", this.onEscapeKey)
    }

    componentDidUpdate(prevProps: Readonly<Props>, prevState: Readonly<State>) {
        if (prevState.data !== this.state.data) {
            this.setState({lastUpdate: new Date()})
        }
    }

    generateTable() {
        return this.state.data.map((item, index) => (
            <div key={index}>
                <div>{item.id}</div>
                <div>{item.name}</div>
                <div>{format(item.createdAt, 'dd.MM.yyyy')}</div>
            </div>
        ))
    }

    onEscapeKey(event: KeyboardEvent) {
        if (event.key === 'Escape') {
            console.log('Закрытие по нажатию клавиши Esc')
            this.props.onClose()
        }
    }

    async getNewData() {
        try {
            this.setState({
                loading: true,
                error: ''
            })

            const data = await fetchData()

            this.setState({
                data,
                loading: false,
            })
        } catch (e) {
            this.setState({
                loading: false,
                error: String(e)
            })
        }
    }

    render() {

        const {classes} = this.props

        const table = this.generateTable()

        return (
            <Paper elevation={6} className={classes.root}>
                <Box color={'primary.main'}>
                    <Typography variant={'h6'} align={'center'}>
                        Таблица с данными
                    </Typography>
                </Box>

                <Box className={classes.tableContainer}>
                    <Divider/>
                    {this.state.error
                        ? <Box color={'error.main'} m={2}>
                            <Typography variant={'h6'} align={'center'}>
                                {this.state.error}
                            </Typography>
                        </Box>
                        : this.state.loading
                            ? <div className={classes.progress}>
                                <CircularProgress color={'secondary'}/>
                            </div>
                            : <div className={classes.table}>
                                {table}
                            </div>}
                    <Divider/>
                </Box>

                {this.state.lastUpdate && <Box color={'text.secondary'} className={classes.lastUpdate}>
                    <Typography variant={'caption'}>
                        Последнее обновление в {format(this.state.lastUpdate, 'HH:mm:ss')}
                    </Typography>
                </Box>}

                <Box className={classes.buttons}>
                    <Button variant={'contained'}
                            color={'primary'}
                            disabled={this.state.loading}
                            onClick={this.getNewData}>
                        Обновить данные
                    </Button>
                    <Button variant={'contained'}
                            color={'secondary'}
                            onClick={this.props.onClose}>
                        Закрыть (Esc)
                    </Button>
                </Box>
            </Paper>
        )
    }
}

export default withStyles(styles)(DataTableClass)
