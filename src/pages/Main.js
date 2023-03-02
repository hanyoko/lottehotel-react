import React from 'react';
import VisualSlider from './VisualSlider';
import Promotion from './Promotion';
import SpecialContainer from '../containers/SpecialContainer';

const Main = () => {
    // const [special, setSpecial] = useState([
    //     {
    //         id: 1,
    //         title: "트니 어드벤쳐 패키지",
    //         desc: "객실 & 조식 & 트니트니 어드벤처 & 키즈잼 자유놀이 & 보팅",
    //         img: "images/banner1.png"
    //     },
    //     {
    //         id: 1,
    //         title: "마이다스 키즈잼 패키지",
    //         desc: "객실 1박 & 조식 2인 & 키즈잼 자유놀이 2시간 & 키즈 상품 & 보팅",
    //         img: "images/banner2.jpg"
    //     },
    //     {
    //         id: 1,
    //         title: "굿모닝 마이다스 패키지",
    //         desc: "객실 1박 & 조식 2인 & 보팅",
    //         img: "images/banner3.jpg"
    //     }
    // ])
    return (
        <div>
            <VisualSlider />
            <SpecialContainer isMain={true} limits={3}/>
            <Promotion />
        </div>
    );
};

export default Main;