import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Title from '../components/Title';
import Example from './Example';
import "./Reservation.css";
import { dataUpdate } from '../modules/reserve';
import RoomContainer from '../containers/RoomContainer';
import axios from 'axios';
import { API_URL } from '../config/apiurl';
import { Route, Routes } from 'react-router-dom';
import ReservationSign from './ReservationSign';

const Reservation = () => {
    const [ isShow, setIsShow ] = useState(false);
    //체크인, 체크아웃 스토어에서 받아오기
    const rv_date = useSelector(state=>state.reserve.rv_date);
    const dispatch = useDispatch();
    const [reserveRoom, setReserveRoom] = useState([]);
    // const [ reservData, setReservData ] = useState({
    //     rv_date: {
    //         rv_checkin: "",
    //         rv_checkout: ""
    //     },
    //     rv_adult: "",
    //     rv_child: ""
    // })
    const hideDateDiv = (start,end) => {
        if(start && end){
            dispatch(dataUpdate({
                name: "rv_date",
                value: {
                    checkin: start,
                    checkout: end
                }
            }))
                setIsShow(false);
                // console.log(reservData);
        }else {
            return;
        }
   
    }
    const onChange = (e) => {
        const {name, value} =  e.target;
        dispatch(dataUpdate({
            name: name,
            value: value
        }))
    }
    //해당날짜에 예약이 되어있는 객실번호 불러오기
    const searchRoom = (start, end) => {
        axios.get(`${API_URL}/searchRoom?start=${start}$end=${end}`)
        .then(res=>{
            console.log(res.data)
            setReserveRoom(res.data)
        })
        .catch(e=>{
            console.log(e)
        })
    }
    return (
        <div className='inner'>
            <Title title="Reversation" />
            <Routes>
                <Route  path="/*" element={ <div>
                    <div className='reservation'>
                        <ul className='reservsearch'>
                            <li>
                                <div>
                                    <span>Check In</span>
                                    <input name='rv_checkin'
                                    onClick={()=>setIsShow(!isShow)}
                                    value={rv_date.checkin}
                                    />
                                </div>
                                <div>
                                    <span>Check Out</span>
                                    <input name='rv_checkout'
                                    onClick={()=>setIsShow(!isShow)}
                                    value={rv_date.checkout}
                                    />
                                </div>
                                <div className='checkdate'>
                                    {isShow && <Example hideDateDiv={hideDateDiv} />}
                                </div>
                            </li>
                            <li>
                                <div>
                                    <span>Adults</span>
                                    <select name='rv_adults' onChange={onChange}>
                                        <option value={1}>1</option>
                                        <option value={2}>2</option>
                                        <option value={3}>3</option>
                                        <option value={4}>4</option>
                                    </select>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <span>Children</span>
                                    <select name='rv_children' onChange={onChange}>
                                        <option value={1}>1</option>
                                        <option value={2}>2</option>
                                        <option value={3}>3</option>
                                        <option value={4}>4</option>
                                    </select>
                                </div>
                            </li>
                            <li onClick={()=>searchRoom(rv_date.checkin, rv_date.checkout)}>
                                <div>
                                    검색
                                </div>
                            </li>
                        </ul>
                    </div>
                    <RoomContainer isreserv={true} reserveRoom={reserveRoom}/>
                </div> } />
                <Route path="/register" element={<ReservationSign/>}/>
                <Route path="/abc" element={<div>abc페이지 입니다.</div>}/>
            </Routes>
        </div>
    );
};

export default Reservation;