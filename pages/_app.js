import {Provider} from "react-redux";
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";
import RootReducer from "../Store/RootReducer";
import {applyMiddleware, createStore} from "redux";
import {createWrapper} from "next-redux-wrapper";

const store = createStore(RootReducer,{},composeWithDevTools(applyMiddleware(thunk)))

function MyApp({ Component, pageProps }) {
    return (
        <Provider store={store}>
            <Component {...pageProps} />
        </Provider>
    )
}

const makestore = () => store;

const wrapper = createWrapper(makestore);

export default wrapper.withRedux(MyApp);