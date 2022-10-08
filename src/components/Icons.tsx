import clsx from 'clsx';
import type { FC } from 'react';

export const SpotifyIcon: FC<{ className?: string }> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    className={clsx(props.className, 'fill-[#1DB954]')}
  >
    <g>
      <path
        fillRule="nonzero"
        d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.55 2 12 2zm3.75 14.65c-2.35-1.45-5.3-1.75-8.8-.95-.35.1-.65-.15-.75-.45-.1-.35.15-.65.45-.75 3.8-.85 7.1-.5 9.7 1.1.35.15.4.55.25.85-.2.3-.55.4-.85.2zm1-2.7c-2.7-1.65-6.8-2.15-9.95-1.15-.4.1-.85-.1-.95-.5-.1-.4.1-.85.5-.95 3.65-1.1 8.15-.55 11.25 1.35.3.15.45.65.2 1s-.7.5-1.05.25zM6.3 9.75c-.5.15-1-.15-1.15-.6-.15-.5.15-1 .6-1.15 3.55-1.05 9.4-.85 13.1 1.35.45.25.6.85.35 1.3-.25.35-.85.5-1.3.25C14.7 9 9.35 8.8 6.3 9.75z"
      ></path>
    </g>
  </svg>
);

export const CrownIcon: FC<{ className?: string }> = (props) => (
  <svg
    className={clsx(props.className, 'fill-[#FFD700]')}
    viewBox="0 0 700 516"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M0.0490015 43.707C0.038134 43.6924 0.0162178 43.6924 0.00535267 43.707C0.00187668 43.7117 0 43.7174 0 43.7232V466.074H0.0033729C0.315775 493.229 22.29 515.184 49.47 515.497V515.499H1.194C1.20834 515.5 1.22274 515.5 1.2372 515.5H677C677.064 515.5 677.128 515.5 677.192 515.499H650.53V515.497C677.71 515.184 699.684 493.229 699.996 466.074H700V492.678C700 492.619 700 492.559 700 492.5L700 43.7234C700 43.7175 699.998 43.7119 699.995 43.7072C699.99 43.7011 699.984 43.6975 699.977 43.6965C699.968 43.695 699.957 43.6985 699.951 43.7072L555.623 238.286C546.088 251.14 526.666 250.569 517.904 237.176L369.865 10.9077C360.786 -2.96922 340.451 -2.96922 331.372 10.9077L182.805 237.984C174.044 251.374 154.628 251.949 145.09 239.101L0.0490015 43.707Z" />
  </svg>
);