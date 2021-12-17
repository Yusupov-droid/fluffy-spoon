import React from 'react';
import {AppBar, Button, Container, CssBaseline, Toolbar} from "@material-ui/core";
import {useStyles} from "./styles";
import {Route, Switch, useHistory} from "react-router";
import MainPage from "./features/JavaScript/mainPage/ui/page";
import ClassToFunctional from './features/JavaScript/classToFunctional/ui/page';
import ImageLoadingProblem from './features/JavaScript/imageLoadingProblem/ui/page';
import ClassToFunctionalTS from './features/TypeScript/classToFunctional/ui/page';
import ImageLoadingProblemTS from './features/TypeScript/imageLoadingProblem/ui/page';

const App = () => {

    const classes = useStyles()
    const history = useHistory()

    const handleMainPageButton = () => {
        history.push('/')
    }

    return (
        <main className={classes.root}>
            <CssBaseline/>
            <AppBar position="static">
                <Toolbar>
                    <Button className={classes.mainButton} color={'inherit'} onClick={handleMainPageButton}>
                        Главная
                    </Button>
                </Toolbar>
            </AppBar>
            <Container fixed maxWidth={'md'} className={classes.container}>
                <Switch>
                    <Route exact path="/">
                        <MainPage/>
                    </Route>
                    <Route path="/task-1">
                        <ClassToFunctional/>
                    </Route>
                    <Route path="/task-2">
                        <ImageLoadingProblem/>
                    </Route>
                    <Route path="/task-1-ts">
                        <ClassToFunctionalTS/>
                    </Route>
                    <Route path="/task-2-ts">
                        <ImageLoadingProblemTS/>
                    </Route>
                </Switch>
            </Container>
        </main>
    );
}

export default App;
