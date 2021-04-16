import React from 'react';
import { SvgXml } from 'react-native-svg';


const logo = `
<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.01514 0H5.01514V1H6.01514V0Z" fill="black"/>
<path d="M8.01514 0H7.01514V1H8.01514V0Z" fill="black"/>
<path d="M13.5 0H9.0145V1H13.5C14.3284 1 15 1.67156 15 2.5V13.5C15 14.3284 14.3284 15 13.5 15H2.5C1.67156 15 1 14.3284 1 13.5V2.5C1 1.67156 1.67156 1 2.5 1H4.0145V0H2.5C1.11997 0.00165625 0.00165625 1.11997 0 2.5V13.5C0.00165625 14.88 1.11997 15.9983 2.5 16H13.5C14.88 15.9983 15.9983 14.88 16 13.5V2.5C15.9983 1.11997 14.88 0.00165625 13.5 0Z" fill="black"/>
<path d="M6.01514 0H5.01514V1H6.01514V0Z" fill="black"/>
<path d="M8.01514 0H7.01514V1H8.01514V0Z" fill="black"/>
<path d="M13.5 0H9.0145V1H13.5C14.3284 1 15 1.67156 15 2.5V13.5C15 14.3284 14.3284 15 13.5 15H2.5C1.67156 15 1 14.3284 1 13.5V2.5C1 1.67156 1.67156 1 2.5 1H4.0145V0H2.5C1.11997 0.00165625 0.00165625 1.11997 0 2.5V13.5C0.00165625 14.88 1.11997 15.9983 2.5 16H13.5C14.88 15.9983 15.9983 14.88 16 13.5V2.5C15.9983 1.11997 14.88 0.00165625 13.5 0Z" fill="black"/>
<path d="M6.01514 0H5.01514V1H6.01514V0Z" fill="black"/>
<path d="M8.01514 0H7.01514V1H8.01514V0Z" fill="black"/>
<path d="M13.5 0H9.0145V1H13.5C14.3284 1 15 1.67156 15 2.5V13.5C15 14.3284 14.3284 15 13.5 15H2.5C1.67156 15 1 14.3284 1 13.5V2.5C1 1.67156 1.67156 1 2.5 1H4.0145V0H2.5C1.11997 0.00165625 0.00165625 1.11997 0 2.5V13.5C0.00165625 14.88 1.11997 15.9983 2.5 16H13.5C14.88 15.9983 15.9983 14.88 16 13.5V2.5C15.9983 1.11997 14.88 0.00165625 13.5 0Z" fill="black"/>
<g clip-path="url(#clip0)">
<path d="M12.6904 1.99839L6.55143 8.13734C6.38597 8.3028 6.11767 8.3028 5.95221 8.13734L3.30957 5.4947L1.22144 7.58278L5.20775 11.5691C5.48466 11.846 5.86023 12.0016 6.25182 12.0016C6.64338 12.0016 7.01901 11.846 7.29586 11.5691L14.7785 4.08647L12.6904 1.99839Z" fill="#A5EB78"/>
<g opacity="0.1">
<path opacity="0.1" d="M14.0879 3.39599L6.18848 11.2954C5.96992 11.5139 5.69512 11.6629 5.39819 11.7294C5.64609 11.905 5.94387 12.0016 6.25173 12.0016C6.64329 12.0016 7.01891 11.846 7.29577 11.5691L14.7784 4.08648L14.0879 3.39599Z" fill="black"/>
</g>
<path d="M6.25163 12.2231C5.79808 12.2231 5.37165 12.0464 5.05091 11.7257L1.06462 7.73939C0.978134 7.6529 0.978134 7.51265 1.06462 7.42619L3.15276 5.33806C3.23927 5.25157 3.37949 5.25157 3.46598 5.33806L4.24987 6.12192C4.33636 6.20841 4.33636 6.34866 4.24987 6.43512C4.16333 6.52161 4.02311 6.52158 3.93665 6.43512L3.30938 5.80785L1.53447 7.58276L5.36419 11.4125C5.60123 11.6495 5.9164 11.7801 6.25166 11.7801C6.58689 11.7801 6.90203 11.6495 7.13913 11.4125L12.2511 6.3005C12.3376 6.21401 12.4778 6.21399 12.5643 6.3005C12.6508 6.38699 12.6508 6.52724 12.5643 6.6137L7.45233 11.7257C7.13156 12.0464 6.70513 12.2231 6.25163 12.2231Z" fill="black"/>
<path d="M6.25194 8.48293C6.07959 8.48293 5.91758 8.41583 5.79573 8.29396L4.5634 7.06163C4.47691 6.97514 4.47691 6.83489 4.5634 6.74843C4.64992 6.66194 4.79014 6.66194 4.87662 6.74843L6.10896 7.98076C6.14713 8.01893 6.19793 8.03996 6.25194 8.03996C6.30594 8.03996 6.35675 8.01893 6.39494 7.98073L12.5338 1.8418C12.6204 1.75531 12.7606 1.75531 12.8471 1.8418L14.9352 3.92994C14.9767 3.97145 15.0001 4.0278 15.0001 4.08654C15.0001 4.14527 14.9767 4.20163 14.9352 4.24313L13.191 5.98731C13.1045 6.0738 12.9643 6.07378 12.8778 5.98731C12.7913 5.90083 12.7913 5.76058 12.8778 5.67412L14.4654 4.08654L12.6905 2.31165L6.70814 8.29396C6.58627 8.4158 6.42423 8.48293 6.25194 8.48293Z" fill="black"/>
</g>
<defs>
<clipPath id="clip0">
<rect width="14" height="14" fill="white" transform="translate(1)"/>
</clipPath>
</defs>
</svg>

`

const CheckBoxIcon = ({width, height}) =>{
    return(
        <SvgXml xml={logo} width = {width} height = {height}/>
    )
}

export default CheckBoxIcon