import { Svg, Path } from 'react-native-svg';

const Stop = () => {

    return (
        <Svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="none"
          viewBox="0 0 32 32">
          <Path
            fill="#6A89A8"
            d="M23,8H9C8.4,8,8,8.4,8,9v14c0,0.6,0.4,1,1,1h14c0.6,0,1-0.4,1-1V9C24,8.4,23.6,8,23,8z"
            fill-rule="evenodd"
            clip-rule="evenodd"
          />
        </Svg>
      );
    };

export default Stop;