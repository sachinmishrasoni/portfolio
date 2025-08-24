import { Route, Routes } from 'react-router-dom';

const AdminRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<div>Admin</div>} />
        </Routes>
    )
}

export default AdminRoutes;
