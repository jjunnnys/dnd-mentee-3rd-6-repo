import React from 'react';
import PropTypes from 'prop-types';
import { pallete } from '../pallete';

const MyPageIcon = ({ pathname }) => {
  return (
    <svg width="36" height="35" viewBox="0 0 36 35" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M10.9753 6.78985L10.2575 6.09368L10.9753 6.78985ZM11.1198 6.48745L10.1259 6.3775L11.1198 6.48745ZM20.7843 4.17694L21.3729 4.98535L20.7843 4.17694ZM24.8802 6.48745L23.8863 6.59741L24.8802 6.48745ZM25.0247 6.78985L24.3068 7.48601L25.0247 6.78985ZM15.2157 4.17694L15.8043 3.36852L15.2157 4.17694ZM15.8043 3.36852L12.9468 1.28798L11.7696 2.90481L14.6271 4.98535L15.8043 3.36852ZM18 3C17.1065 3 16.2387 3.0988 15.4117 3.28489L15.8508 5.2361C16.5334 5.0825 17.2539 5 18 5V3ZM20.5883 3.28489C19.7613 3.0988 18.8935 3 18 3V5C18.7461 5 19.4666 5.0825 20.1492 5.2361L20.5883 3.28489ZM23.0532 1.28798L20.1957 3.36852L21.3729 4.98535L24.2304 2.90481L23.0532 1.28798ZM25.8741 6.3775L25.427 2.33567L23.4391 2.55558L23.8863 6.59741L25.8741 6.3775ZM28 11.4434C28 9.38978 27.1353 7.52983 25.7425 6.09368L24.3068 7.48601C25.386 8.59892 26 9.97518 26 11.4434H28ZM18 19.8868C23.3368 19.8868 28 16.2759 28 11.4434H26C26 14.8327 22.6044 17.8868 18 17.8868V19.8868ZM8 11.4434C8 16.2759 12.6633 19.8868 18 19.8868V17.8868C13.3956 17.8868 10 14.8327 10 11.4434H8ZM10.2575 6.09368C8.86474 7.52983 8 9.38978 8 11.4434H10C10 9.97518 10.614 8.59892 11.6932 7.48601L10.2575 6.09368ZM10.573 2.33567L10.1259 6.3775L12.1137 6.59741L12.5609 2.55558L10.573 2.33567ZM11.6932 7.48601C11.9195 7.2527 12.0755 6.94355 12.1137 6.59741L10.1259 6.3775C10.1389 6.25956 10.191 6.16218 10.2575 6.09368L11.6932 7.48601ZM24.2304 2.90481C23.92 3.13079 23.4813 2.93717 23.4391 2.55558L25.427 2.33567C25.3004 1.19091 23.9843 0.610045 23.0532 1.28798L24.2304 2.90481ZM20.1492 5.2361C20.5625 5.32912 21.011 5.24886 21.3729 4.98535L20.1957 3.36852C20.3185 3.2791 20.4634 3.2568 20.5883 3.28489L20.1492 5.2361ZM12.9468 1.28798C12.0157 0.610045 10.6996 1.19091 10.573 2.33567L12.5609 2.55558C12.5187 2.93717 12.08 3.13079 11.7696 2.90481L12.9468 1.28798ZM23.8863 6.59741C23.9245 6.94355 24.0805 7.2527 24.3068 7.48601L25.7425 6.09368C25.809 6.16217 25.8611 6.25956 25.8741 6.3775L23.8863 6.59741ZM14.6271 4.98535C14.989 5.24886 15.4375 5.32912 15.8508 5.2361L15.4117 3.28489C15.5366 3.2568 15.6815 3.2791 15.8043 3.36852L14.6271 4.98535Z"
        fill={pathname === '/mypage' ? pallete.orange : pallete.gray[4]}
      />
      <path
        d="M15.3 13.2866C16.2527 13.4772 18.1582 13.2866 18.1582 11"
        stroke={pathname === '/mypage' ? pallete.orange : pallete.gray[4]}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M21 13.2866C20.0472 13.4771 18.1417 13.2866 18.1417 11"
        stroke={pathname === '/mypage' ? pallete.orange : pallete.gray[4]}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle
        cx="15"
        cy="9"
        r="1"
        fill={pathname === '/mypage' ? pallete.orange : pallete.gray[4]}
      />
      <circle
        cx="21"
        cy="9"
        r="1"
        fill={pathname === '/mypage' ? pallete.orange : pallete.gray[4]}
      />
      <path
        d="M1.57356 28.752H3.32556V32.16H1.57356V28.752ZM0.757563 32.816H4.14156V28.096H0.757563V32.816ZM7.22956 30.216H6.10156V27.392H5.27756V34.624H6.10156V30.896H7.22956V30.216ZM12.9809 27.384V34.632H13.8129V27.384H12.9809ZM9.96494 27.92C8.89294 27.92 8.10894 28.912 8.10894 30.464C8.10894 32.032 8.89294 33.016 9.96494 33.016C11.0449 33.016 11.8289 32.032 11.8289 30.464C11.8289 28.912 11.0449 27.92 9.96494 27.92ZM9.96494 28.664C10.5969 28.664 11.0369 29.344 11.0369 30.464C11.0369 31.6 10.5969 32.28 9.96494 32.28C9.34094 32.28 8.90094 31.6 8.90094 30.464C8.90094 29.344 9.34094 28.664 9.96494 28.664ZM16.5643 28.928H17.2923V32.168C17.0443 32.184 16.8043 32.192 16.5643 32.2V28.928ZM18.0443 28.928H18.5803V28.264H15.2923V28.928H15.8123V32.216C15.5723 32.216 15.3483 32.216 15.1483 32.216L15.2443 32.896C16.1563 32.896 17.6443 32.864 18.7723 32.64L18.7163 32.04C18.5083 32.072 18.2763 32.096 18.0443 32.12V28.928ZM19.2363 30.088H18.3803V30.816H19.2363V34.256H20.0123V27.552H19.2363V30.088ZM20.6523 27.392V34.616H21.4443V27.392H20.6523ZM27.6997 27.384V34.632H28.5317V27.384H27.6997ZM24.6837 27.92C23.6117 27.92 22.8277 28.912 22.8277 30.464C22.8277 32.032 23.6117 33.016 24.6837 33.016C25.7637 33.016 26.5477 32.032 26.5477 30.464C26.5477 28.912 25.7637 27.92 24.6837 27.92ZM24.6837 28.664C25.3157 28.664 25.7557 29.344 25.7557 30.464C25.7557 31.6 25.3157 32.28 24.6837 32.28C24.0597 32.28 23.6197 31.6 23.6197 30.464C23.6197 29.344 24.0597 28.664 24.6837 28.664ZM32.6111 28.792H34.2191V28.112H30.1711V28.792H31.7791V29.48C31.7791 30.72 31.0351 32.064 29.9151 32.584L30.3871 33.24C31.2351 32.832 31.8831 31.976 32.2031 30.968C32.5391 31.904 33.1871 32.688 34.0271 33.056L34.4831 32.408C33.3551 31.928 32.6111 30.68 32.6111 29.48V28.792ZM35.0591 27.392V34.616H35.8911V27.392H35.0591Z"
        fill={pathname === '/mypage' ? pallete.orange : pallete.gray[4]}
      />
    </svg>
  );
};

MyPageIcon.prototype = {
  pathname: PropTypes.string.isRequired,
};

export default MyPageIcon;