import {
    BrowserRouter,
    Routes,
    Route
} from 'react-router-dom'

export function App () {
    return (
        <BrowserRouter basename={CONTEXT_ROOT}>
            <Routes>
                <Route path="/" element={<p>Hello World</p>} />
            </Routes>
        </BrowserRouter>
    )
}
