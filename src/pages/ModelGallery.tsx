import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Navbar from '../components/common/Navbar/Navbar';
import '../styles/Contact-ModelGallery.css';
import { getAllModelRequest } from '../Redux/slice/Slice';
import { RootState, AppDispatch } from '../Redux/store';

const ModelGallery: React.FC = () => {
    const dispatch: AppDispatch = useDispatch();
    // const models = useSelector((state: RootState) => state.addItem.slice);
    const loading = useSelector((state: RootState) => state.addItem.loading);
    const error = useSelector((state: RootState) => state.addItem.error);

    useEffect(() => {
        dispatch(getAllModelRequest());
    }, [dispatch]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div className="p-4">
            <div className='ml-10 mr-10'>
                <Navbar />
            </div>
            <header className="flex w-full justify-center items-center space-x-4">
                <div>
                    <h1 className="text-9xl font-bodoni-moda">V2</h1>
                </div>
                <div>
                    <div className='text-left'>
                        <h1 className="text-5xl font-bodoni-moda">VOGUE & VIBE</h1>
                        <h2 className="text-5xl font-bold text-red-500 font-inria-serif ">MODEL</h2>
                        <hr className="border-red-500 w-44" style={{ borderTopWidth: '3px' }} />
                    </div>
                </div>
            </header>
            <footer className="text-center mt-20 mb-10">
                <p className='color'>All Rights Reserved © V2 Vogue & Vibe 2024-25</p>
            </footer>
        </div>
    );
}

export default ModelGallery;
