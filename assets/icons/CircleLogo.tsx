import {useEffect, useState} from 'react';
import {Svg, Path} from 'react-native-svg';

const CircleLogo = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCount(prev => prev + 1);
    }, 400);
    if (count === 15) {
      clearInterval(timer);
    }
    return () => {
      clearInterval(timer);
    };
  }, [count]);
  return (
    <Svg
      width="88"
      height="40"
      viewBox="0 0 88 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      {count >= 1 && (
        <Path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M1.6921 34.5296C4.04456 36.4561 -1.31917 36.4021 0.315709 34.8368C0.713245 34.4562 1.36021 34.2575 1.6921 34.5296Z"
          fill="#FFD859"
        />
      )}
      {count >= 15 && (
        <Path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M87.2779 38.4153C89.3463 40.4177 85.4929 39.678 85.5918 38.3569C85.7983 38.2482 85.691 38.3362 85.8426 37.9721C86.4493 37.9133 87.2253 38.3644 87.2779 38.4153Z"
          fill="#FFD859"
        />
      )}
      {count >= 14 && (
        <Path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M85.596 28.5909C87.9479 30.517 82.5842 30.463 84.2192 28.8978C84.6166 28.5175 85.2636 28.3185 85.596 28.5909Z"
          fill="#FFD859"
        />
      )}
      {count >= 13 && (
        <Path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M82.9763 22.3925C83.8185 25.555 79.378 21.9604 81.6501 21.7373C82.2024 21.683 82.8573 21.9454 82.9763 22.3925Z"
          fill="#FFD859"
        />
      )}
      {count >= 12 && (
        <Path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M76.774 14.4468C78.0373 16.9767 75.2564 14.8325 74.5751 14.6524C74.9837 13.6394 76.3464 13.591 76.774 14.4468Z"
          fill="#FFD859"
        />
      )}
      {count >= 11 && (
        <Path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M68.995 7.74582C71.3471 9.67217 65.9833 9.61834 67.6182 8.05257C68.0157 7.67239 68.6627 7.47374 68.995 7.74582Z"
          fill="#FFD859"
        />
      )}
      {count >= 10 && (
        <Path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M61.6689 3.17965C63.5985 7.53058 56.3748 3.48026 59.6062 2.57421C60.3916 2.35406 61.3962 2.5647 61.6689 3.17965Z"
          fill="#FFD859"
        />
      )}
      {count >= 9 && (
        <Path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M49.7681 1.95384C46.8102 1.17681 51.3521 -1.75638 53.3845 1.51062C52.5121 3.36544 50.9249 2.25781 49.7681 1.95384Z"
          fill="#FFD859"
        />
      )}
      {count >= 8 && (
        <Path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M42.1568 1.47132C45.1453 4.92614 39.8976 2.75506 38.7467 2.77159C39.0012 0.98289 41.1455 0.301521 42.1568 1.47132Z"
          fill="#FFD859"
        />
      )}
      {count >= 7 && (
        <Path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M42.1568 1.47132C45.1453 4.92614 39.8976 2.75506 38.7467 2.77159C39.0012 0.98289 41.1455 0.301521 42.1568 1.47132Z"
          fill="#FFD859"
        />
      )}
      {count >= 6 && (
        <Path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M31.1003 4.14243C34.8249 3.55643 30.8043 7.20873 29.5996 5.96682C29.6705 5.64472 29.6642 5.83912 29.4392 5.35933C29.9005 4.63422 31.0049 4.15735 31.1003 4.14243Z"
          fill="#FFD859"
        />
      )}
      {count >= 5 && (
        <Path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M23.1367 8.56547C25.4892 10.4915 20.1254 10.4376 21.7605 8.87222C22.1579 8.49204 22.8044 8.29295 23.1367 8.56547Z"
          fill="#FFD859"
        />
      )}
      {count >= 4 && (
        <Path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M16.8794 14.5434C18.948 16.5454 15.0944 15.8057 15.1935 14.4842C15.3998 14.376 15.2925 14.4639 15.4438 14.1002C16.0509 14.0408 16.8268 14.492 16.8794 14.5434Z"
          fill="#FFD859"
        />
      )}
      {count >= 3 && (
        <Path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M11.5381 21.2301C12.8013 23.76 10.0205 21.6158 9.33899 21.4358C9.74764 20.4228 11.1107 20.3743 11.5381 21.2301Z"
          fill="#FFD859"
        />
      )}
      {count >= 2 && (
        <Path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M6.61169 26.7031C7.45414 29.8652 3.0134 26.2705 5.28589 26.0475C5.83826 25.9932 6.49268 26.2556 6.61169 26.7031Z"
          fill="#FFD859"
        />
      )}
    </Svg>
  );
};

export default CircleLogo;
