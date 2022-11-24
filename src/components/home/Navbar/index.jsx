import Link from 'next/link';
import { useSession, signIn } from 'next-auth/react';
import { ArrowRightOnRectangleIcon } from '@heroicons/react/24/outline';
import AvatarMenu from '../../common/AvatarMenu';

export default function Navbar() {
  const { data: session, status } = useSession();

  return (
    <header className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8'>
      <nav className='text-white flex justify-between  items-center'>
        <Link
          className='text-white transition-colors duration-300 hover:text-green-400'
          href='/'>
          <span className='sr-only'>Bugees</span>
          <svg
            className='h-6 w-auto sm:h-8 md:h-9'
            fill='currentColor'
            width='119'
            height='38'
            viewBox='0 0 119 38'
            xmlns='http://www.w3.org/2000/svg'>
            <path
              fillRule='evenodd'
              clipRule='evenodd'
              d='M74.3445 4.28505C73.6496 3.57693 72.8902 2.96893 72.0855 2.44831L72.094 2.37904C72.0787 2.37779 72.0631 2.37618 72.0473 2.37447L72.0238 2.37184L72.0236 2.37182L72.0234 2.3718C72.0001 2.36919 71.9768 2.36658 71.9543 2.36474C69.2284 0.647927 66.0238 -0.0424264 63.2035 0.00200723C61.0896 0.0376518 59.1836 0.476861 57.8117 1.2437C57.1289 1.62423 56.5739 2.09169 56.207 2.65176C55.8434 3.2091 55.681 3.86622 55.7921 4.54852C55.8464 4.87601 56.0567 5.13356 56.309 5.335C56.561 5.53612 56.8718 5.69813 57.2316 5.84827C57.7807 6.0854 58.4448 6.29821 59.1564 6.52623L59.1565 6.52628L59.2782 6.56527C59.3899 6.60111 59.5028 6.63738 59.6164 6.67421C59.6835 6.69599 59.751 6.71797 59.8187 6.74019C61.6373 7.3376 63.5921 8.11097 64.6007 9.38612L64.5828 9.33075C64.4937 8.99869 64.5544 8.66475 64.7099 8.35304C64.2453 7.91061 63.6975 7.54422 63.1127 7.22662C63.3185 6.73123 63.5454 6.28202 63.8086 5.87606C64.5617 6.20421 65.3052 6.57216 66.0423 6.97687C66.2791 6.81615 66.5374 6.65867 66.8139 6.50746C65.9794 6.03447 65.1384 5.61052 64.2879 5.23251C64.745 4.69003 65.2899 4.2495 65.935 3.91101C67.0416 4.4015 68.1203 4.94393 69.1342 5.55028C69.3059 5.49642 69.4868 5.4457 69.6646 5.39803C69.8333 5.35335 70.0019 5.30867 70.1673 5.27317C69.1325 4.60836 68.0419 4.02289 66.9142 3.49234C67.497 3.30062 68.1558 3.1678 68.8957 3.10097C69.8563 3.71732 70.7596 4.39029 71.478 5.0265C71.8412 4.97846 72.1902 4.94442 72.5259 4.9296C71.9044 4.30735 71.1055 3.66529 70.2244 3.04957C70.6836 3.05292 71.1704 3.07766 71.6852 3.12348C72.4336 3.60836 73.1416 4.17576 73.7889 4.8335C73.8118 4.8568 73.8346 4.88009 73.8567 4.90338L73.8782 4.92625L73.8874 4.93626L73.9049 4.95585L73.9194 4.9726C74.4102 5.03603 74.8434 5.15023 75.1969 5.32486C75.2166 5.33495 75.236 5.34529 75.2553 5.35586C75.2717 5.36489 75.288 5.37408 75.3041 5.38339C75.0009 4.99471 74.6771 4.62641 74.3433 4.28627L74.3445 4.28505ZM75.9468 6.53873C75.8043 6.38726 75.6229 6.26187 75.4224 6.16148C75.0985 6.00028 74.7127 5.89412 74.2779 5.83022C74.0937 5.78672 73.8918 5.75474 73.668 5.7321C72.6703 5.63334 71.3064 5.76208 69.8698 6.15134C68.4289 6.53872 67.1884 7.11179 66.37 7.70048C66.1885 7.83096 66.0284 7.96469 65.8897 8.08937C65.548 8.36585 65.2673 8.65508 65.0691 8.95418C64.9019 9.21057 64.7865 9.48884 64.769 9.77404L56.0912 12.1126H52.6028C52.4745 12.0804 52.2234 12.0375 51.8493 11.9839C51.4859 11.9303 51.085 11.8821 50.6468 11.8392C50.2086 11.7963 49.8238 11.7749 49.4925 11.7749C47.9213 11.7749 46.5852 12.0161 45.4843 12.4985C44.3941 12.9808 43.5604 13.683 42.9833 14.6048C42.4168 15.516 42.1335 16.6254 42.1335 17.9332C42.1335 19.1552 42.4061 20.2164 42.9512 21.1169C43.507 22.0173 44.2552 22.6712 45.1958 23.0785C44.4476 23.518 43.8757 23.9683 43.4803 24.4292C43.0848 24.8794 42.8871 25.4475 42.8871 26.1336C42.8871 26.6803 43.0741 27.2002 43.4482 27.6933C43.8223 28.1756 44.2605 28.524 44.7629 28.7384C43.4589 29.0493 42.4702 29.5692 41.7969 30.2981C41.1235 31.027 40.7868 31.9328 40.7868 33.0155C40.7868 34.5912 41.4441 35.8132 42.7588 36.6815C44.0842 37.5605 45.9974 38 48.4985 38C51.7691 38 54.2755 37.4212 56.0177 36.2635C57.7706 35.1058 58.6471 33.4764 58.6471 31.3754C58.6471 29.7353 58.1287 28.4919 57.0919 27.645C56.0658 26.7982 54.5695 26.3748 52.6028 26.3748H49.5566C48.9581 26.3748 48.4557 26.3372 48.0496 26.2622C47.6541 26.1765 47.3548 26.0585 47.1517 25.9085C46.9593 25.7477 46.8631 25.5494 46.8631 25.3135C46.8631 25.0777 46.9273 24.8526 47.0555 24.6382C47.1838 24.4238 47.3708 24.2202 47.6167 24.0272C48.119 24.0808 48.6534 24.1237 49.2199 24.1558C51.6034 24.1558 53.4632 23.6199 54.7993 22.5479C56.146 21.4653 56.8194 19.9592 56.8194 18.0297C56.8194 17.5259 56.7552 17.0489 56.627 16.5986C56.4987 16.1484 56.3063 15.725 56.0498 15.3284L58.8555 14.6048V12.1723L64.9711 10.5243C65.1313 10.7618 65.3685 10.9477 65.6397 11.0818C66.0358 11.2813 66.5274 11.3988 67.0929 11.4554C67.6931 11.5123 68.3784 11.499 69.1157 11.4125C69.1683 11.6589 69.2533 11.8933 69.3663 12.1115C68.7313 12.2856 68.1359 12.5271 67.5804 12.8361C66.4229 13.4702 65.4955 14.3973 64.7983 15.6173C64.8187 15.5776 64.8394 15.5382 64.8605 15.4991L64.882 15.4596L64.9016 15.4239V13.1548C64.9016 12.9364 64.8151 12.727 64.6611 12.5726C64.5072 12.4183 64.2984 12.3315 64.0807 12.3315C63.863 12.3315 63.6542 12.4183 63.5003 12.5726C63.3463 12.727 63.2598 12.9364 63.2598 13.1548V15.4599C63.2597 16.2079 63.5304 17.0038 63.9791 17.6101C63.7621 18.396 63.6255 19.2626 63.5695 20.21C63.5604 20.3633 63.5535 20.5188 63.5486 20.6763H61.2001C60.9824 20.6763 60.7736 20.763 60.6197 20.9174C60.4657 21.0718 60.3792 21.2812 60.3792 21.4996C60.3792 21.7179 60.4657 21.9273 60.6197 22.0817C60.7736 22.2361 60.9824 22.3228 61.2001 22.3228H63.5789V22.3227C63.695 23.9102 64.0722 25.2609 64.7106 26.3748C64.8384 26.5948 64.9739 26.8056 65.117 27.0074C64.7169 27.201 64.3568 27.4755 64.0614 27.8176C63.5443 28.4163 63.2597 29.182 63.2598 29.9742V32.444C63.2598 32.6623 63.3463 32.8717 63.5003 33.0261C63.6542 33.1805 63.863 33.2672 64.0807 33.2672C64.2984 33.2672 64.5072 33.1805 64.6611 33.0261C64.8151 32.8717 64.9016 32.6623 64.9016 32.444V29.9742C64.9013 29.5471 65.0666 29.1365 65.3625 28.8293C65.6203 28.5616 65.9597 28.3906 66.3244 28.3415C66.815 28.7656 67.362 29.123 67.9652 29.4137C69.3547 30.0783 70.9472 30.4106 72.7429 30.4106C74.1217 30.4106 75.2921 30.3088 76.254 30.1051C77.2193 29.903 78.1424 29.5848 79.0235 29.1504C79.1665 29.3989 79.2434 29.6827 79.2433 29.9742V32.444C79.2433 32.6623 79.3298 32.8717 79.4837 33.0261C79.6377 33.1805 79.8465 33.2672 80.0642 33.2672C80.2819 33.2672 80.4907 33.1805 80.6446 33.0261C80.7985 32.8717 80.885 32.6623 80.885 32.444V29.9742C80.8852 29.182 80.6006 28.4163 80.0835 27.8176C79.7919 27.48 79.4375 27.2083 79.0437 27.0152V25.3457C78.039 25.8174 77.061 26.1711 76.1097 26.4069C75.1585 26.6428 74.111 26.7607 72.9673 26.7607C71.5885 26.7607 70.509 26.3694 69.7288 25.5869C68.9592 24.7937 68.5477 23.7056 68.4943 22.3228H80.0537H82.4325C82.6502 22.3228 82.859 22.2361 83.013 22.0817C83.1669 21.9273 83.2534 21.7179 83.2534 21.4996C83.2534 21.2812 83.1669 21.0718 83.013 20.9174C82.859 20.763 82.6502 20.6763 82.4325 20.6763H80.0537V19.9431C80.0537 19.1565 79.9876 18.4243 79.8555 17.7464C80.3648 17.1269 80.6766 16.2689 80.6764 15.466V13.1609C80.6764 12.9426 80.5899 12.7332 80.436 12.5788C80.282 12.4244 80.0732 12.3377 79.8555 12.3377C79.6378 12.3377 79.4291 12.4244 79.2751 12.5788C79.1212 12.7332 79.0347 12.9426 79.0347 13.1609V15.43C78.3851 14.2557 77.4743 13.3589 76.3021 12.7396C75.7128 12.423 75.0677 12.1843 74.367 12.0236C74.5432 11.6493 74.6348 11.2399 74.6343 10.8249V9.54164C74.7347 9.47662 74.8313 9.41081 74.924 9.34433C75.3821 9.01386 75.7495 8.66334 75.9957 8.29253C76.2388 7.91862 76.367 7.49379 76.2564 7.07934C76.2009 6.87241 76.0928 6.69299 75.9468 6.53873ZM71.2332 11.8016C71.4907 11.7838 71.7534 11.7749 72.0214 11.7749C72.1769 11.7749 72.3303 11.7777 72.4817 11.7834C72.5439 11.7417 72.6023 11.6938 72.656 11.6399C72.8715 11.4238 72.9926 11.1306 72.9926 10.8249V10.3927C72.4322 10.6269 71.8201 10.8357 71.1713 11.0093C71.0243 11.0492 70.8781 11.0866 70.7329 11.1215C70.7845 11.3159 70.8865 11.4952 71.0308 11.6399C71.0925 11.7018 71.1605 11.7559 71.2332 11.8016ZM70.6948 10.3296C70.7411 10.3181 70.7876 10.3064 70.8342 10.2944C70.8791 10.2829 70.9241 10.2711 70.9692 10.259C71.7045 10.0593 72.3898 9.81189 72.9926 9.53906V9.50773C72.9926 9.28939 73.0791 9.07999 73.233 8.9256C73.387 8.77121 73.5958 8.68448 73.8135 8.68448C73.9831 8.68448 74.1473 8.73712 74.2843 8.83338C74.3469 8.79141 74.4074 8.74931 74.4656 8.70712C74.8751 8.41247 75.176 8.11542 75.3456 7.86273C75.511 7.60817 75.5427 7.42464 75.5032 7.28105C75.4866 7.21219 75.4453 7.13731 75.3785 7.06928C75.3093 6.99755 75.2129 6.92836 75.0758 6.85671C74.8031 6.72414 74.3961 6.62058 73.8927 6.56963C72.8946 6.47118 71.5304 6.60022 70.0926 6.9907C68.6548 7.37504 67.4112 7.95115 66.5959 8.5368C66.1867 8.83115 65.8846 9.12941 65.7174 9.37966C65.5502 9.63605 65.5211 9.82298 65.5598 9.96135C65.5984 10.1059 65.7136 10.2479 65.9878 10.3851C66.259 10.5192 66.6681 10.6267 67.1664 10.6767C67.7061 10.7305 68.3502 10.7168 69.0541 10.6326V9.50773C69.0541 9.28939 69.1406 9.07999 69.2945 8.9256C69.4485 8.77121 69.6572 8.68448 69.875 8.68448C70.0927 8.68448 70.3015 8.77121 70.4554 8.9256C70.6093 9.07999 70.6958 9.28939 70.6958 9.50773L70.6948 10.3296ZM70.1571 2.26974C69.7888 2.26804 69.4336 2.27779 69.0938 2.3027C68.4713 1.9127 67.8348 1.54867 67.2123 1.23169C68.209 1.47157 69.2017 1.81266 70.1571 2.26974ZM67.8325 2.45803C67.1325 2.58899 66.4946 2.78641 65.9204 3.04876C64.8625 2.58933 63.7828 2.18189 62.7028 1.80512C63.2742 1.509 63.9371 1.24428 64.7067 1.01417C65.616 1.3098 66.7285 1.83103 67.8325 2.45803ZM63.026 0.786027C62.5441 0.99389 62.1078 1.22359 61.7143 1.47204C61.3115 1.33997 60.9118 1.211 60.5172 1.08729C61.2843 0.91636 62.1325 0.815728 63.026 0.786027ZM65.0509 3.52966C64.4697 3.90855 63.9735 4.37402 63.5439 4.91978C62.4889 4.48799 61.4272 4.12364 60.3467 3.81437C60.5231 3.55499 60.7239 3.30194 60.9583 3.06449C61.2112 2.80879 61.4976 2.56255 61.8268 2.33507C62.9069 2.69342 63.9897 3.09169 65.0509 3.52966ZM60.9267 2.03643C60.7388 2.19141 60.5632 2.35262 60.4028 2.51702C60.0697 2.858 59.7946 3.22091 59.5621 3.60257C58.6829 3.37467 57.7917 3.18411 56.8982 3.02206C57.172 2.62692 57.6137 2.24815 58.1936 1.92356C58.4796 1.76354 58.7983 1.61819 59.1447 1.48871C59.7347 1.66307 60.3286 1.84759 60.9267 2.03643ZM63.086 5.57271C62.832 5.97567 62.6113 6.41265 62.4179 6.8836C61.6406 6.53072 60.826 6.25118 60.0602 5.99657C59.8893 5.93998 59.7215 5.88649 59.5567 5.83609C59.6399 5.3704 59.7688 4.93269 59.9587 4.52001C61.0149 4.81068 62.0553 5.15952 63.086 5.57271ZM59.2016 4.31763C59.027 4.72737 58.8982 5.1528 58.8122 5.59085C58.3301 5.43361 57.8938 5.28594 57.5371 5.13277C57.2139 4.9952 56.954 4.85415 56.7908 4.72491C56.6275 4.59567 56.5733 4.49706 56.5635 4.41905C56.5246 4.18772 56.5282 3.96868 56.5708 3.75855C57.4559 3.91194 58.3315 4.09287 59.2016 4.31763ZM0 6.58132H7.29481C10.4158 6.58132 12.7779 7.02082 14.3812 7.89982C15.9845 8.77881 16.7861 10.3224 16.7861 12.5306C16.7861 13.4203 16.6418 14.2243 16.3532 14.9425C16.0753 15.6607 15.6691 16.2503 15.1347 16.7112C14.6003 17.1721 13.9483 17.4723 13.1788 17.6116V17.7724C13.959 17.9332 14.6644 18.2119 15.2951 18.6085C15.9257 18.9944 16.428 19.5626 16.8021 20.3129C17.1869 21.0526 17.3793 22.0388 17.3793 23.2715C17.3793 24.6972 17.0319 25.9192 16.3372 26.9375C15.6424 27.9559 14.6484 28.7384 13.3551 29.2851C12.0725 29.8211 10.5441 30.0891 8.7698 30.0891H0V6.58132ZM4.97009 15.8912H7.85595C9.29888 15.8912 10.2982 15.666 10.854 15.2158C11.4098 14.7549 11.6877 14.0796 11.6877 13.1899C11.6877 12.2894 11.3564 11.6463 10.6937 11.2604C10.0417 10.8637 9.00495 10.6654 7.5834 10.6654H4.97009V15.8912ZM4.97009 19.8466V25.9728H8.20867C9.70504 25.9728 10.7472 25.6834 11.335 25.1045C11.9229 24.5257 12.2168 23.7485 12.2168 22.773C12.2168 22.1942 12.0885 21.685 11.832 21.2455C11.5755 20.806 11.1426 20.463 10.5334 20.2165C9.93484 19.9699 9.10649 19.8466 8.04834 19.8466H4.97009ZM38.1254 30.0891V12.1126H33.2355V20.5702C33.2355 21.8458 33.1179 22.9285 32.8828 23.8182C32.6583 24.6972 32.2628 25.3671 31.6964 25.8281C31.1299 26.2783 30.3496 26.5034 29.3556 26.5034C28.3509 26.5034 27.6187 26.1765 27.1591 25.5226C26.6995 24.8687 26.4697 23.8986 26.4697 22.6122V12.1126H21.5798V23.8343C21.5798 25.3779 21.8417 26.632 22.3654 27.5968C22.8998 28.5615 23.6427 29.2744 24.5939 29.7353C25.5452 30.1855 26.6621 30.4106 27.9447 30.4106C28.6929 30.4106 29.4144 30.3195 30.1091 30.1373C30.8039 29.9551 31.4398 29.671 32.017 29.2851C32.5942 28.8992 33.0751 28.4007 33.4599 27.7897H33.7165L34.3738 30.0891H38.1254ZM48.7069 34.8003C49.8719 34.8003 50.8713 34.6877 51.705 34.4626C52.5494 34.2482 53.196 33.9373 53.6449 33.53C54.0938 33.1334 54.3183 32.6564 54.3183 32.0989C54.3183 31.6487 54.1847 31.2896 53.9175 31.0216C53.6609 30.7644 53.2655 30.5821 52.7311 30.475C52.2073 30.3678 51.534 30.3142 50.711 30.3142H48.1778C47.5793 30.3142 47.0395 30.4106 46.5585 30.6036C46.0882 30.7965 45.7141 31.0645 45.4362 31.4075C45.1583 31.7613 45.0194 32.1686 45.0194 32.6296C45.0194 33.3049 45.34 33.8355 45.9814 34.2214C46.6333 34.6073 47.5419 34.8003 48.7069 34.8003ZM49.4925 21.1651C50.4117 21.1651 51.085 20.8811 51.5126 20.3129C51.9401 19.7448 52.1539 18.973 52.1539 17.9975C52.1539 16.9149 51.9294 16.1055 51.4805 15.5696C51.0423 15.0229 50.3796 14.7495 49.4925 14.7495C48.5947 14.7495 47.9213 15.0229 47.4724 15.5696C47.0235 16.1055 46.799 16.9149 46.799 17.9975C46.799 18.973 47.0181 19.7448 47.4563 20.3129C47.9053 20.8811 48.584 21.1651 49.4925 21.1651ZM98.3693 12.7396C97.1722 12.0965 95.7453 11.7749 94.0886 11.7749C92.3999 11.7749 90.9195 12.1286 89.6476 12.8361C88.3757 13.5329 87.3817 14.5834 86.6656 15.9876C85.9601 17.3812 85.6074 19.1284 85.6074 21.2294C85.6074 23.2983 85.9975 25.0134 86.7778 26.3748C87.5687 27.7361 88.6536 28.7491 90.0324 29.4137C91.4219 30.0783 93.0144 30.4106 94.8101 30.4106C96.1889 30.4106 97.3593 30.3088 98.3212 30.1051C99.2939 29.9015 100.224 29.5799 101.111 29.1404V25.3457C100.106 25.8174 99.1282 26.1711 98.1769 26.4069C97.2257 26.6428 96.1782 26.7607 95.0345 26.7607C93.6557 26.7607 92.5762 26.3694 91.796 25.5869C91.0264 24.7937 90.6149 23.7056 90.5615 22.3228H102.121V19.9431C102.121 18.1958 101.795 16.7166 101.143 15.5053C100.491 14.294 99.5664 13.3721 98.3693 12.7396ZM91.7479 16.1806C92.3785 15.5696 93.1694 15.2641 94.1207 15.2641C94.8903 15.2641 95.5209 15.4302 96.0125 15.7625C96.5149 16.0948 96.889 16.545 97.1348 17.1132C97.3913 17.6813 97.5249 18.3298 97.5356 19.0588H90.6737C90.7699 17.751 91.1279 16.7916 91.7479 16.1806ZM119 24.7508C119 25.9728 118.711 27.0072 118.134 27.8541C117.568 28.6902 116.718 29.328 115.585 29.7675C114.452 30.1962 113.041 30.4106 111.352 30.4106C110.102 30.4106 109.028 30.3302 108.13 30.1695C107.243 30.0087 106.345 29.7407 105.436 29.3655V25.3135C106.409 25.753 107.451 26.1175 108.563 26.4069C109.685 26.6856 110.668 26.825 111.513 26.825C112.464 26.825 113.143 26.6856 113.549 26.4069C113.966 26.1175 114.174 25.7423 114.174 25.2814C114.174 24.9812 114.089 24.7133 113.918 24.4774C113.757 24.2309 113.405 23.9575 112.86 23.6574C112.314 23.3465 111.459 22.9445 110.294 22.4515C109.172 21.9798 108.247 21.5028 107.521 21.0204C106.805 20.538 106.27 19.9699 105.917 19.316C105.575 18.6514 105.404 17.8099 105.404 16.7916C105.404 15.1301 106.046 13.8813 107.328 13.0451C108.622 12.1983 110.348 11.7749 112.507 11.7749C113.618 11.7749 114.677 11.8874 115.681 12.1126C116.697 12.3377 117.739 12.6968 118.808 13.1899L117.333 16.7273C116.445 16.3414 115.606 16.0251 114.815 15.7786C114.035 15.5321 113.239 15.4088 112.427 15.4088C111.711 15.4088 111.171 15.5053 110.807 15.6982C110.444 15.8912 110.262 16.1859 110.262 16.5826C110.262 16.872 110.353 17.1293 110.535 17.3544C110.727 17.5795 111.091 17.8314 111.625 18.1101C112.17 18.3781 112.966 18.7264 114.014 19.1552C115.029 19.5733 115.911 20.0128 116.659 20.4737C117.407 20.9239 117.985 21.4867 118.391 22.162C118.797 22.8266 119 23.6895 119 24.7508ZM69.6807 16.1806C70.3113 15.5696 71.1022 15.2641 72.0535 15.2641C72.823 15.2641 73.4537 15.4302 73.9453 15.7625C74.4477 16.0948 74.8218 16.545 75.0676 17.1132C75.3241 17.6813 75.4577 18.3298 75.4684 19.0588H68.6065C68.7027 17.751 69.0607 16.7916 69.6807 16.1806Z'
            />
          </svg>
        </Link>
        <div className='flex justify-between items-center gap-0 sm:gap-1'>
          {status === 'authenticated' ? (
            <>
              <Link
                className='text-neutral-300 py-2 px-2 text-sm sm:text-base group hover:text-neutral-100 transition-colors duration-300'
                href='/dashboard'>
                Dashboard
              </Link>
              <AvatarMenu />
            </>
          ) : (
            <>
              <button
                className='text-neutral-300 text-sm sm:text-base py-2 px-4 rounded inline-flex items-center group hover:text-neutral-100 transition-colors duration-300 gap-2'
                onClick={() => signIn()}>
                <ArrowRightOnRectangleIcon className='w-6 h-6' />
                Sign In
              </button>
            </>
          )}
        </div>
      </nav>
    </header>
  );
}
