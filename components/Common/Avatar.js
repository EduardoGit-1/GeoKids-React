import React from 'react';
import { SvgXml } from 'react-native-svg';


const Avatar = ({width, height, logo}) =>{


    return(
            <SvgXml xml={logo} width = {width} height = {height}/>
    )
}


export default Avatar