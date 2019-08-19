const logMiddleware = () => next => action => {
    console.log(`before the reducer has run.`);
    next(action);
    console.log(`after the reducer has run.`);
}

export default logMiddleware;