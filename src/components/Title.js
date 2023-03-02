import React from 'react';
const titleStyle = {
    padding: "60px 0",
    textAlign: "center",
    fontSize: "24px"
}
const Title = ({title}) => {
    return (
        <div>
            <div style={titleStyle}>
                <h2>{title}</h2>
            </div>
        </div>
    );
};

export default Title;