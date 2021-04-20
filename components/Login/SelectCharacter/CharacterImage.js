import React from 'react';
import { SvgXml } from 'react-native-svg';
import characters from '../../../assets/login/characters/CharactersSVG'

const CharacterImage = ({width, height, logo, index}) =>{


    return(
            <SvgXml xml={logo} width = {70} height = {170}/>
    )
}


export default CharacterImage