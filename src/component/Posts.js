import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {fetchPostAction} from '../action/fetchPostAction';
import {useSelector} from 'react-redux';

function Posts(props) {

    const dispatch = useDispatch();
    useEffect(() =>{
        dispatch(fetchPostAction());

    }, [])
    return (
        <div>
            
        </div>
    );
}


export default Posts;