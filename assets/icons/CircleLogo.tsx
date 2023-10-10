import {useRef, useState} from 'react';
import Animated from 'react-native-reanimated';
import {Svg, Path} from 'react-native-svg';

// const d = [
//   'M85.8992 29.1823C88.2511 31.1084 82.8874 31.0544 84.5224 29.4892C84.9198 29.1089 85.5668 28.9099 85.8992 29.1823ZM87.5811 39.0066C89.6494 41.009 85.796 40.2692 85.895 38.9482C86.1014 38.8395 85.9941 38.9274 86.1457 38.5633C86.7525 38.5045 87.5284 38.9557 87.5811 39.0066ZM50.0713 2.54515C47.1134 1.76812 51.6553 -1.16508 53.6877 2.10192C52.8153 3.95674 51.2281 2.84912 50.0713 2.54515ZM42.4601 2.06258C45.4485 5.5174 40.2009 3.34632 39.0499 3.36285C39.3045 1.57415 41.4488 0.892781 42.4601 2.06258ZM31.4035 4.73378C35.1281 4.14778 31.1076 7.80008 29.9028 6.55817C29.9737 6.23607 29.9674 6.43047 29.7424 5.95068C30.2037 5.22557 31.3081 4.7487 31.4035 4.73378ZM23.4399 9.15682C25.7924 11.0829 20.4286 11.0289 22.0636 9.46357C22.461 9.08339 23.1076 8.88431 23.4399 9.15682ZM17.1827 15.1348C19.2512 17.1368 15.3976 16.3971 15.4968 15.0756C15.7031 14.9673 15.5958 15.0552 15.7471 14.6916C16.3541 14.6322 17.13 15.0833 17.1827 15.1348ZM11.8413 21.8214C13.1045 24.3513 10.3237 22.2071 9.64222 22.0271C10.0509 21.0141 11.414 20.9657 11.8413 21.8214ZM6.91488 27.2944C7.75732 30.4565 3.31659 26.8619 5.58908 26.6388C6.14145 26.5845 6.79587 26.847 6.91488 27.2944ZM1.99532 35.1209C4.34778 37.0474 -1.01595 36.9935 0.618932 35.4281C1.01647 35.0475 1.66343 34.8489 1.99532 35.1209ZM61.9721 3.77097C63.9017 8.1219 56.6779 4.07157 59.9094 3.16552C60.6948 2.94537 61.6994 3.15601 61.9721 3.77097ZM69.2982 8.33707C71.6502 10.2634 66.2865 10.2096 67.9214 8.64382C68.3189 8.26364 68.9659 8.065 69.2982 8.33707ZM77.0773 15.0381C78.3405 17.568 75.5596 15.4239 74.8783 15.2438C75.287 14.2308 76.6496 14.1824 77.0773 15.0381ZM83.2795 22.9837C84.1217 26.1463 79.6812 22.5516 81.9533 22.3285C82.5056 22.2743 83.1605 22.5367 83.2795 22.9837Z',
// ];

const AnimatedPath = Animated.createAnimatedComponent(Path);

const CircleLogo = () => {
  const [length, setLength] = useState(0);
  const pathRef = useRef(null);

  console.log(length);
  return (
    <Svg
      width="89"
      height="41"
      viewBox="0 0 89 41"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <AnimatedPath
        onLayout={() => setLength(pathRef.current?.getTotalLength())}
        ref={pathRef}
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M85.8992 29.1823C88.2511 31.1084 82.8874 31.0544 84.5224 29.4892C84.9198 29.1089 85.5668 28.9099 85.8992 29.1823ZM87.5811 39.0066C89.6494 41.009 85.796 40.2692 85.895 38.9482C86.1014 38.8395 85.9941 38.9274 86.1457 38.5633C86.7525 38.5045 87.5284 38.9557 87.5811 39.0066ZM50.0713 2.54515C47.1134 1.76812 51.6553 -1.16508 53.6877 2.10192C52.8153 3.95674 51.2281 2.84912 50.0713 2.54515ZM42.4601 2.06258C45.4485 5.5174 40.2009 3.34632 39.0499 3.36285C39.3045 1.57415 41.4488 0.892781 42.4601 2.06258ZM31.4035 4.73378C35.1281 4.14778 31.1076 7.80008 29.9028 6.55817C29.9737 6.23607 29.9674 6.43047 29.7424 5.95068C30.2037 5.22557 31.3081 4.7487 31.4035 4.73378ZM23.4399 9.15682C25.7924 11.0829 20.4286 11.0289 22.0636 9.46357C22.461 9.08339 23.1076 8.88431 23.4399 9.15682ZM17.1827 15.1348C19.2512 17.1368 15.3976 16.3971 15.4968 15.0756C15.7031 14.9673 15.5958 15.0552 15.7471 14.6916C16.3541 14.6322 17.13 15.0833 17.1827 15.1348ZM11.8413 21.8214C13.1045 24.3513 10.3237 22.2071 9.64222 22.0271C10.0509 21.0141 11.414 20.9657 11.8413 21.8214ZM6.91488 27.2944C7.75732 30.4565 3.31659 26.8619 5.58908 26.6388C6.14145 26.5845 6.79587 26.847 6.91488 27.2944ZM1.99532 35.1209C4.34778 37.0474 -1.01595 36.9935 0.618932 35.4281C1.01647 35.0475 1.66343 34.8489 1.99532 35.1209ZM61.9721 3.77097C63.9017 8.1219 56.6779 4.07157 59.9094 3.16552C60.6948 2.94537 61.6994 3.15601 61.9721 3.77097ZM69.2982 8.33707C71.6502 10.2634 66.2865 10.2096 67.9214 8.64382C68.3189 8.26364 68.9659 8.065 69.2982 8.33707ZM77.0773 15.0381C78.3405 17.568 75.5596 15.4239 74.8783 15.2438C75.287 14.2308 76.6496 14.1824 77.0773 15.0381ZM83.2795 22.9837C84.1217 26.1463 79.6812 22.5516 81.9533 22.3285C82.5056 22.2743 83.1605 22.5367 83.2795 22.9837Z"
        fill="#FFD859"
        strokeDasharray={2}
      />
    </Svg>
  );
};

export default CircleLogo;
