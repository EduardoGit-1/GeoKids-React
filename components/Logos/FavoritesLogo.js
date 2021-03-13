import React from 'react';
import { SvgXml } from 'react-native-svg';


const logo = `<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0)">
<path d="M0.5 11.0049C0.5 6.31047 4.30562 2.50497 8.99994 2.50497C11.0821 2.50497 12.9879 3.25466 14.4649 4.49804C15.3528 5.24535 16.647 5.24535 17.5348 4.49804C19.0119 3.25466 20.9178 2.50497 22.9998 2.50497C27.6943 2.50497 31.4998 6.31047 31.4998 11.0049V10.7549C31.4998 18.9981 21.4749 26.4329 17.5495 29.0281C16.6094 29.6497 15.3903 29.6497 14.4502 29.0281C10.5249 26.4328 0.5 18.9982 0.5 10.7548" fill="#FF6464"/>
<path d="M4.94515 10.1889C4.94465 10.2295 4.94359 10.27 4.94359 10.3108C4.94359 10.27 4.94465 10.2295 4.94515 10.1889C4.9444 10.1347 4.94359 10.0804 4.94359 10.0261C4.94359 10.0803 4.9444 10.1347 4.94515 10.1889C4.98409 7.03579 6.53003 4.24604 8.89634 2.50629C4.28553 2.56147 0.558465 6.28741 0.501465 10.898C0.616277 19.084 10.5477 26.4479 14.4503 29.028C15.3905 29.6496 16.6096 29.6496 17.5497 29.028C17.6666 28.9507 17.7892 28.869 17.9165 28.7832C12.7232 24.892 5.05272 17.8573 4.94515 10.1889Z" fill="#D2555A"/>
<path d="M32 10.7549C32 10.7316 31.9979 10.7089 31.9947 10.6864C31.9944 10.6838 31.9946 10.6809 31.9941 10.6782C31.8216 5.86626 27.8533 2.00482 23 2.00482C20.8851 2.00482 18.8299 2.75438 17.2129 4.11545C16.5102 4.70701 15.4899 4.70707 14.7871 4.11551C13.1702 2.75445 11.115 2.00488 9.00006 2.00488C4.14675 2.00488 0.178375 5.86626 0.0059375 10.6783C0.0055 10.6809 0.0056875 10.6838 0.0053125 10.6865C0.002125 10.7089 0 10.7316 0 10.7549V11.0049C0 11.026 0.00175 11.0466 0.00425 11.067C0.0045625 11.0693 0.0044375 11.0718 0.00475 11.0741C0.249625 19.3545 9.9665 26.6632 14.1746 29.4453C14.7291 29.8119 15.3644 29.9951 16.0001 29.9951C16.6355 29.9951 17.2711 29.8118 17.8255 29.4453C22.0335 26.6632 31.7504 19.3545 31.9953 11.0741C31.9956 11.0718 31.9955 11.0693 31.9958 11.067C31.9983 11.0466 32.0001 11.026 32.0001 11.0049V10.7549H32ZM17.2739 28.6109C16.5001 29.1226 15.4999 29.1226 14.7262 28.6109C12.8924 27.3986 9.36825 24.8845 6.369 21.6685C2.85662 17.9023 1.05163 14.2804 1.0015 10.8998C1.0015 10.8969 1.0015 10.8939 1.0015 10.891C1.00144 10.8861 1.00144 10.8812 1.00137 10.8763C1.07037 6.52426 4.632 3.0052 9.00012 3.0052C10.8798 3.0052 12.7063 3.67132 14.1431 4.88082C15.2191 5.78651 16.7811 5.78651 17.8571 4.88082C19.2939 3.67132 21.1204 3.00526 23 3.00526C27.3683 3.00526 30.93 6.5247 30.9988 10.8769C30.9987 10.8818 30.9986 10.8861 30.9986 10.8911C30.9985 10.8944 30.9986 10.8978 30.9986 10.901C30.9481 14.2813 29.1431 17.9028 25.6311 21.6686C22.6318 24.8845 19.1076 27.3985 17.2739 28.6109ZM12.6798 5.62613C12.5871 5.78651 12.419 5.87626 12.2462 5.87626C12.1613 5.87626 12.0754 5.85463 11.9966 5.80913C11.086 5.28332 10.0498 5.00545 9 5.00545C8.72375 5.00545 8.49994 4.78157 8.49994 4.50538C8.49994 4.2292 8.72381 4.00532 9 4.00532C10.2251 4.00532 11.4342 4.32963 12.4967 4.94313C12.7359 5.08113 12.8179 5.38701 12.6798 5.62613ZM27.5684 6.8822C27.4414 6.8822 27.3143 6.83413 27.2168 6.73782C26.7178 6.24451 26.1461 5.84688 25.5177 5.55601C25.2671 5.44001 25.158 5.14276 25.274 4.89213C25.3899 4.64145 25.6872 4.5322 25.9379 4.64838C26.6715 4.98795 27.3384 5.45163 27.9199 6.02651C28.1163 6.2207 28.1181 6.53726 27.9239 6.7337C27.8263 6.8327 27.6973 6.8822 27.5684 6.8822ZM29.998 10.8884C29.9981 10.8941 29.9981 10.8996 29.998 10.9053C29.9694 12.555 29.4644 14.3072 28.4969 16.1129C28.4068 16.2812 28.2341 16.377 28.0557 16.377C27.976 16.377 27.8952 16.3579 27.8199 16.3176C27.5764 16.1873 27.4849 15.8841 27.6152 15.6406C28.5052 13.9794 28.9704 12.3832 28.9977 10.8963C28.9808 9.93476 28.7451 9.02207 28.2973 8.18345C28.1671 7.93982 28.2592 7.63688 28.5028 7.50676C28.7464 7.3767 29.0494 7.46863 29.1795 7.71232C29.6969 8.68101 29.98 9.77932 29.998 10.8884Z" fill="black"/>
</g>
<defs>
<clipPath id="clip0">
<rect width="32" height="32" fill="white"/>
</clipPath>
</defs>
</svg>
`


const FavoritesLogo = ({width, height}) =>{
    return(
        <SvgXml xml={logo} width = {width} height = {height}/>
    )
}

export default FavoritesLogo