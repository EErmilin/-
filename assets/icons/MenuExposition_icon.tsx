
import { FC } from 'react';
import Svg, { Path } from 'react-native-svg';

const MenuExposition_icon: FC = (_, props) => {
    return (

        <Svg
            xmlns="http://www.w3.org/2000/svg"
            width={30}
            height={30}
            fill="none"
            {...props}>
            <Path d="M5.605 3.44177C5.605 4.81171 5.55276 5.95001 5.61781 7.08159C5.7052 8.60184 5.84437 10.1217 6.03123 11.6331C6.32194 13.9843 8.03803 15.49 10.4486 15.3673C13.0878 15.2329 14.4005 14.0732 14.7894 11.5275C14.9427 10.5245 14.7959 9.44003 14.5953 8.43048C14.4491 7.6945 13.8626 7.12898 13.0242 7.12477C12.2897 7.12109 11.6696 7.79586 11.5913 8.76982C11.5057 9.83541 11.5718 10.9132 11.5718 12.0955H9.05678C9.28364 11.6895 9.60079 11.3122 9.70353 10.8835C9.80283 10.4692 9.83371 9.88267 9.60891 9.59534C9.42567 9.36113 8.80464 9.36378 8.40672 9.43152C7.9673 9.50634 7.5609 9.77501 7.03278 10.0063C7.09587 8.96429 7.15225 8.03301 7.21413 7.01124C7.77188 7.30915 8.22563 7.61916 8.72624 7.79819C9.15115 7.95014 9.65289 8.07666 9.9042 7.43933C10.144 6.8311 9.92931 6.3932 9.41273 6.1166C8.95851 5.87337 8.45343 5.72519 8.09748 5.58494C8.6476 4.93144 9.21805 4.2538 9.86113 3.48989C10.0463 3.95765 10.1519 4.34897 10.347 4.68898C10.659 5.23284 11.0336 5.78397 11.7963 5.4668C12.5267 5.16306 12.4407 4.57701 12.2008 3.98513C12.0489 3.61029 11.8726 3.24534 11.6826 2.82102H14.5226C14.2753 3.40883 14.006 3.8894 13.8826 4.40485C13.8139 4.69188 13.8792 5.15358 14.0729 5.3346C14.7018 5.92236 15.4178 6.41691 16.1399 6.97812C16.7183 6.26511 17.4333 5.59286 17.8779 4.77382C18.2804 4.03217 17.5183 3.57338 17.0357 3.13038C16.8516 2.96141 16.5756 2.89269 16.171 2.69503C17.0729 2.14739 17.8595 1.6698 18.7813 1.11008C18.8274 1.79563 18.8238 2.25948 18.8976 2.71063C18.9962 3.31305 19.3032 3.84018 19.9964 3.66437C20.68 3.491 20.7574 2.92599 20.4948 2.32083C20.3106 1.89663 20.1116 1.47889 19.8925 1H22.6263C22.4513 1.50505 22.2795 1.99676 22.1105 2.48941C21.9254 3.02902 22.0994 3.52593 22.6323 3.57142C22.9369 3.59742 23.4426 3.20371 23.573 2.88314C23.7731 2.39123 23.7277 1.79951 23.8022 1.10373C24.6631 1.55082 25.467 1.96837 26.4409 2.47417C25.9995 2.75632 25.7182 2.93619 25.4369 3.11596C24.913 3.45068 24.3991 3.92145 24.6898 4.5266C24.8514 4.86317 25.4993 5.02437 25.9594 5.14048C26.3094 5.22883 26.7089 5.12165 27.2081 5.09495C26.7874 5.9285 26.4012 6.69388 25.9826 7.52326C25.3298 7.02705 24.7224 6.50439 24.0571 6.07045C21.5883 4.46019 19.43 5.32553 18.1089 7.44726C16.5064 10.0208 16.0044 12.8461 17.2545 15.737C17.711 16.7926 18.5571 17.6541 19.7367 17.9409C22.2088 18.5419 23.5528 16.5128 23.2562 14.5504C23.0827 13.402 22.3594 13.1833 21.4512 13.9115C21.1069 14.1876 20.7352 14.4295 20.3614 14.6974C20.09 14.0946 19.7164 13.2652 19.3205 12.3861C19.8829 12.3861 20.4038 12.47 20.8797 12.3598C21.2683 12.2699 21.7792 12.0219 21.9104 11.7079C22.0312 11.4187 21.7749 10.9174 21.5818 10.566C21.3648 10.1709 21.0325 9.83908 20.6509 9.35303C21.6214 9.09854 22.4524 8.8806 23.4146 8.62827C23.3459 9.18861 23.1979 9.62703 23.2691 10.0264C23.3431 10.4412 23.5466 10.9212 23.8563 11.1691C24.0161 11.297 24.5943 11.065 24.8684 10.8494C25.2928 10.5155 25.6187 10.0564 25.9889 9.64763C26.4398 10.4504 26.901 11.2714 27.3777 12.1199C26.7315 12.2104 26.1846 12.2966 25.6351 12.3614C24.9677 12.4401 24.7186 12.8254 24.8211 13.4569C24.8771 13.8021 24.94 14.1549 25.0665 14.4782C25.3719 15.2584 25.822 15.4488 26.5914 15.0683C27.5312 14.6036 28.4384 14.073 29.4508 13.5211C29.6239 14.327 29.797 15.133 30 16.0787C29.5006 16.0148 29.1305 15.9032 28.7756 15.9395C28.396 15.9784 27.9968 16.1024 27.6769 16.3025C27.5584 16.3765 27.5426 16.9215 27.6508 16.9928C27.9567 17.1946 28.3437 17.3206 28.7125 17.3668C29.0783 17.4126 29.4608 17.3248 29.9497 17.2867C29.7449 18.199 29.5564 19.0385 29.3445 19.982C28.7819 19.5634 28.2875 19.1611 27.7573 18.8133C27.4193 18.5915 27.0442 18.3973 26.6584 18.2827C25.3536 17.8951 24.8039 18.3916 25.0255 19.719C25.0447 19.8339 25.089 19.9443 25.1155 20.0582C25.5072 21.7392 25.8081 21.9178 27.4828 21.4634C27.6767 21.4108 27.8723 21.3643 28.1871 21.2845C28.072 21.8035 27.9725 22.2472 27.8753 22.6914C27.7817 23.1192 27.6904 23.5476 27.5699 24.1069C27.1769 23.8684 26.8448 23.6611 26.5071 23.4637C26.2593 23.3188 25.981 23.0447 25.7573 23.081C25.38 23.1422 25.0353 23.4039 24.6769 23.5813C24.8475 23.9132 24.935 24.3943 25.2062 24.5452C25.7296 24.8363 26.3567 24.9409 26.9917 25.1387C26.4812 25.9071 25.9755 26.6681 25.4594 27.4449C24.683 26.9461 24.9555 25.5841 23.7168 25.556C22.3472 25.525 22.732 26.8849 22.0586 27.5652C21.5737 26.759 21.1131 25.9931 20.5872 25.1186C23.1463 24.1271 23.6648 22.1469 23.2998 19.4523C21.4848 21.5678 19.2388 22.624 16.8654 23.5474C16.9933 24.0007 17.1084 24.4126 17.2259 24.8238C17.3429 25.2333 17.6746 25.739 17.5404 26.0327C17.1576 26.8705 16.717 27.7767 16.0402 28.3508C15.616 28.7107 14.7248 28.5202 13.789 28.5978C14.2646 27.9282 14.5691 27.4507 14.9225 27.0126C15.617 26.1515 15.5183 25.2346 15.1255 24.3132C15.0413 24.1158 14.7669 23.8899 14.5638 23.8729C13.899 23.8173 13.2266 23.852 12.3408 23.852C13.7005 25.9053 12.2669 27.1278 11.0441 28.2192C10.5315 28.6767 9.47457 28.5246 8.66509 28.6496L8.56897 28.4302C9.21507 27.6353 9.82962 26.8114 10.5208 26.0577C10.8572 25.6909 10.8919 25.3912 10.8443 24.9039C10.6975 23.3987 9.7985 22.6231 8.60862 21.8237C7.61358 21.1553 6.89362 20.041 6.14787 19.0517C5.71577 18.4786 5.44136 17.7763 5.15128 17.1081C3.92884 14.2922 3.59263 11.3015 3.45655 8.27498C3.44374 7.99017 3.45486 7.70429 3.45486 7.25333C2.51955 7.8598 1.71511 8.3814 0.829558 8.9556C0.523207 8.21103 0.282643 7.62628 0 6.93932C1.77979 5.82869 3.56949 4.71198 5.605 3.44177ZM15.1104 15.4606C12.5675 17.4025 9.84762 17.7873 6.86239 16.2622C8.61066 21.3916 14.2902 24.2838 19.9221 19.8789C17.3933 19.3922 16.0126 17.6903 15.1104 15.4606Z" fill="#6A89A8" />
        </Svg>
    );
};

export default MenuExposition_icon;
