import { SpecialService } from '@/types/reference';
const SpecialServiceData: SpecialService[] = [
  {
    type: 'PUBLIC_SELECTION',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 81 60" fill="none">
        <g clipPath="url(#clip0_3291_49)">
          <path
            d="M49.8029 9.14458C49.8029 12.8888 47.5311 16.1076 44.278 17.5221C43.4934 17.863 42.6517 18.0991 41.7712 18.2123C41.3785 18.263 40.9776 18.2892 40.5708 18.2892C40.1641 18.2892 39.7632 18.263 39.3701 18.2123C38.464 18.0961 37.5992 17.8495 36.795 17.4922C33.5787 16.0625 31.3387 12.8626 31.3387 9.14458C31.3387 4.09438 35.4719 0 40.5708 0C45.6694 0 49.8029 4.09438 49.8029 9.14458Z"
            fill="#212529"
          />
          <path
            d="M64.9467 20.9073C68.9151 20.9073 72.1321 17.7208 72.1321 13.7901C72.1321 9.85935 68.9151 6.67285 64.9467 6.67285C60.9783 6.67285 57.7614 9.85935 57.7614 13.7901C57.7614 17.7208 60.9783 20.9073 64.9467 20.9073Z"
            fill="#212529"
          />
          <path
            d="M80.1775 31.499V41.6302H74.8952V32.6204C74.8952 31.888 74.2957 31.2941 73.5563 31.2941C72.8169 31.2941 72.2174 31.888 72.2174 32.6204V41.6302H61.55V29.8357C61.55 27.4688 60.7462 25.2877 59.3937 23.5459H72.1483C76.5825 23.5459 80.1775 27.1064 80.1775 31.499Z"
            fill="#212529"
          />
          <path
            d="M16.0534 20.9073C20.0218 20.9073 23.2387 17.7208 23.2387 13.7901C23.2387 9.85935 20.0218 6.67285 16.0534 6.67285C12.085 6.67285 8.86804 9.85935 8.86804 13.7901C8.86804 17.7208 12.085 20.9073 16.0534 20.9073Z"
            fill="#212529"
          />
          <path
            d="M0.822632 31.499V41.6302H6.10494V32.6204C6.10494 31.888 6.70446 31.2941 7.44385 31.2941C8.18324 31.2941 8.78276 31.888 8.78276 32.6204V41.6302H19.4501V29.8357C19.4501 27.4688 20.2539 25.2877 21.6065 23.5459H8.85184C4.41765 23.5459 0.822632 27.1064 0.822632 31.499Z"
            fill="#212529"
          />
          <path
            d="M45.2413 28.8838C45.0076 28.8838 44.7756 28.8901 44.545 28.9024C43.6653 28.9484 42.8099 29.0827 41.9857 29.2956H41.9853C40.9887 29.5528 40.0396 29.9253 39.1526 30.398C38.3574 30.8216 37.6129 31.3259 36.9289 31.8995C34.142 34.2377 32.3728 37.7293 32.3728 41.6303C32.3728 42.1198 32.4005 42.603 32.4551 43.0777C33.1804 49.436 38.6286 54.3768 45.2413 54.3768C51.854 54.3768 57.3022 49.436 58.0275 43.0777C58.082 42.603 58.1098 42.1198 58.1098 41.6303C58.1098 34.5908 52.3482 28.8838 45.2413 28.8838ZM54.5565 43.0777C53.8542 47.548 49.9509 50.9691 45.2413 50.9691C40.5312 50.9691 36.6279 47.548 35.9256 43.0777C35.8514 42.6059 35.813 42.1227 35.813 41.6303C35.813 39.4652 36.5567 37.4725 37.8052 35.8887V35.8883C39.3125 33.9762 41.555 32.6601 44.1117 32.3581V32.3577C44.4819 32.3138 44.8588 32.2914 45.2413 32.2914C50.4481 32.2914 54.6691 36.4728 54.6691 41.6303C54.6691 42.1227 54.6307 42.6059 54.5565 43.0777Z"
            fill="#212529"
          />
          <path
            d="M45.2413 34.2549C44.6981 34.2549 44.1689 34.3123 43.6585 34.4221C41.3034 34.9269 39.3629 36.5356 38.4171 38.6741V38.6745C38.0167 39.5796 37.7946 40.5798 37.7946 41.631C37.7946 42.1265 37.844 42.6105 37.9383 43.0785C38.6171 46.4591 41.6288 49.0072 45.2413 49.0072C48.8538 49.0072 51.8655 46.4591 52.5443 43.0785C52.6386 42.6105 52.688 42.1265 52.688 41.631C52.688 37.5573 49.354 34.2549 45.2413 34.2549ZM49.574 39.55L44.0005 45.0707C43.8167 45.2528 43.5762 45.3432 43.3357 45.3419H43.331C43.0918 45.3419 42.8526 45.2515 42.6701 45.0707L39.8963 42.3233C39.5317 41.9617 39.5317 41.3759 39.8963 41.0144C40.0788 40.8336 40.318 40.7432 40.5572 40.7432C40.7964 40.7432 41.0357 40.8336 41.2177 41.0144L43.3353 43.1118L48.2526 38.2411C48.6176 37.8796 49.209 37.8796 49.574 38.2411C49.7565 38.4219 49.8477 38.6589 49.8477 38.8958C49.8477 39.1323 49.7565 39.3693 49.574 39.55Z"
            fill="#212529"
          />
          <path
            d="M36.4335 29.6443L36.5673 30.2538C33.0934 32.856 30.8488 36.9837 30.8488 41.6306H29.9448V32.6207C29.9448 31.8883 29.3453 31.2945 28.6059 31.2945C27.8666 31.2945 27.267 31.8883 27.267 32.6207V41.6306H22.1284V31.2835C22.1284 25.5808 26.7954 20.958 32.5523 20.958H35.7077L37.3673 25.3937L36.4335 29.6443Z"
            fill="#212529"
          />
          <path d="M42.5885 20.958L41.6321 23.5141H39.509L38.5526 20.958H42.5885Z" fill="#212529" />
          <path
            d="M41.6611 27.8192C40.8066 28.0359 39.9823 28.3281 39.1969 28.6893L39.5103 27.2621L39.7559 26.1445H41.2935L41.5387 27.2621L41.6611 27.8192Z"
            fill="#212529"
          />
          <path
            d="M59.0132 31.2835V37.4783C57.2185 31.6303 51.7315 27.3745 45.2412 27.3745C44.8967 27.3745 44.5551 27.3864 44.217 27.41L43.7445 25.2589L45.3538 20.958H48.5889C54.3458 20.958 59.0132 25.5808 59.0132 31.2835Z"
            fill="#212529"
          />
          <path
            d="M62.7059 58.9698C61.3184 60.3441 59.0691 60.3441 57.6816 58.9698L53.0573 54.3888L58.0816 49.4121L62.7059 53.9926C64.093 55.3674 64.093 57.5954 62.7059 58.9698Z"
            fill="#212529"
          />
        </g>
        <defs>
          <clipPath id="clip0_3291_49">
            <rect width="79.3548" height="60" fill="white" transform="translate(0.822632)" />
          </clipPath>
        </defs>
      </svg>
    ),
    title: 'publicSelection',
  },
  {
    type: 'INTERNATIONAL_TRADE',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 59 60" fill="none">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M11.3109 5.77501L12.0135 6.25084L16.0381 8.16875L16.4904 10.5822H17.4382L21.8088 8.67082L22.8326 7.22092L23.998 5.77893L26.7772 4.58202L29.4214 4.93992L29.0739 6.13683L25.832 7.70987L24.116 8.7914L25.2788 9.99751H26.4232L28.2585 9.87685L28.6321 8.56593L31.056 8.43487L30.6824 11.8026L32.6567 13.1266L31.8348 14.7994L28.973 14.3196L29.4279 11.3044L27.004 10.8325L25.7324 11.0646L24.0059 10.4655L22.0395 12.5118L17.7882 14.6827L17.6636 15.9937L20.2134 16.5993L23.7607 20.439L25.6328 25.3681L25.3876 27.2991L26.5399 27.6347L28.973 27.4105L30.5802 29.2169L29.3086 31.2633L28.8367 29.8213L27.3383 29.2222L26.7837 31.2685L25.3876 31.1309L23.5418 32.2321L21.7065 30.7664L19.1542 30.3129L16.1561 30.0612L14.6577 29.8213L11.4485 31.7496L6.01741 32.8338L6.95207 39.6702L9.60277 42.3315V46.0571L13.0518 50.8617L12.9404 52.79C7.69859 49.162 3.78207 43.9245 1.78415 37.8709C-0.213781 31.8173 -0.184224 25.2775 1.86832 19.2422C3.57044 13.8954 6.86886 9.19798 11.3201 5.78157L11.3109 5.77501ZM19.7284 48.3276V55.05C19.7336 55.1776 19.7853 55.2989 19.8737 55.3911C19.962 55.4833 20.0809 55.5401 20.2081 55.5508H22.6281C22.8115 54.7419 23.1992 53.9937 23.7542 53.3773C24.1267 52.9644 24.5817 52.6343 25.0898 52.4083C25.5978 52.1824 26.1477 52.0655 26.7038 52.0655C27.2599 52.0655 27.8098 52.1824 28.3179 52.4083C28.826 52.6343 29.2809 52.9644 29.6534 53.3773C30.2172 53.9913 30.614 54.7396 30.8057 55.5508H31.9685C32.0907 55.5339 32.2031 55.4745 32.2858 55.3829C32.3686 55.2913 32.4163 55.1734 32.4207 55.05V41.5855C32.4207 41.3613 32.1769 40.9956 31.9685 40.9956H24.8082C24.5957 40.9863 24.3849 41.0365 24.1996 41.1408C24.0142 41.245 23.8618 41.3991 23.7595 41.5855L19.7284 48.3276ZM26.654 52.7848C25.9387 52.7788 25.2379 52.9855 24.6404 53.3788C24.043 53.772 23.5759 54.334 23.2985 54.9933C23.0211 55.6526 22.946 56.3794 23.0826 57.0814C23.2192 57.7835 23.5615 58.4291 24.0658 58.9363C24.5702 59.4434 25.214 59.7892 25.9153 59.9297C26.6166 60.0702 27.3439 59.9991 28.0046 59.7253C28.6654 59.4515 29.23 58.9875 29.6265 58.3922C30.023 57.7969 30.2335 57.0972 30.2315 56.382C30.2403 55.9088 30.154 55.4387 29.9776 54.9996C29.8011 54.5605 29.5383 54.1613 29.2046 53.8257C28.8708 53.4902 28.4731 53.2251 28.0349 53.0462C27.5968 52.8674 27.1272 52.7785 26.654 52.7848ZM26.654 54.8206C26.3464 54.8276 26.0478 54.9252 25.7955 55.1011C25.5432 55.2771 25.3485 55.5236 25.2357 55.8097C25.1228 56.0959 25.097 56.4089 25.1613 56.7097C25.2257 57.0105 25.3773 57.2856 25.5974 57.5005C25.8174 57.7155 26.0959 57.8607 26.3981 57.9181C26.7003 57.9754 27.0127 57.9423 27.2961 57.8228C27.5796 57.7034 27.8215 57.503 27.9915 57.2467C28.1616 56.9903 28.2522 56.6896 28.252 56.382C28.2505 56.1743 28.2078 55.9689 28.1265 55.7778C28.0452 55.5867 27.9269 55.4135 27.7783 55.2684C27.6297 55.1232 27.4539 55.0089 27.2609 54.9321C27.0679 54.8552 26.8616 54.8173 26.654 54.8206ZM22.2807 46.8764L24.6994 42.6736C24.8082 42.3249 25.0533 42.0758 25.9605 42.0758H30.3285C30.4093 42.0733 30.4896 42.0877 30.5645 42.118C30.6394 42.1483 30.7072 42.1939 30.7634 42.2519C30.8197 42.3099 30.8633 42.379 30.8913 42.4548C30.9193 42.5305 30.9312 42.6113 30.9263 42.692V46.8764C30.9312 46.9564 30.9191 47.0366 30.8909 47.1116C30.8627 47.1867 30.8189 47.2549 30.7625 47.3118C30.706 47.3688 30.6382 47.4131 30.5634 47.442C30.4886 47.4709 30.4086 47.4837 30.3285 47.4795H22.7251C22.497 47.4795 22.2807 47.2461 22.2807 46.8764ZM20.081 53.258C20.0874 53.1892 20.1074 53.1222 20.1397 53.0611C20.1721 53 20.2162 52.9459 20.2696 52.9019C20.323 52.8579 20.3845 52.825 20.4507 52.8049C20.5169 52.7847 20.5864 52.7779 20.6552 52.7848C20.7765 52.7939 20.8904 52.847 20.9754 52.9342C21.0604 53.0213 21.1106 53.1365 21.1166 53.258V54.3369C21.1097 54.4591 21.0595 54.5748 20.9749 54.6632C20.8903 54.7517 20.7769 54.807 20.6552 54.8193C20.5167 54.8307 20.3792 54.7877 20.272 54.6993C20.1648 54.6109 20.0962 54.4842 20.081 54.3461V53.258ZM50.2873 53.0129C49.8514 53.0115 49.4197 53.0988 49.0185 53.2694C48.6174 53.44 48.2551 53.6904 47.9537 54.0054C47.6523 54.3204 47.4181 54.6935 47.2653 55.1018C47.1126 55.5101 47.0445 55.9451 47.0651 56.3806C47.0499 56.814 47.1222 57.246 47.2777 57.6509C47.4331 58.0558 47.6684 58.4252 47.9697 58.7371C48.271 59.0491 48.6319 59.2972 49.0311 59.4667C49.4303 59.6361 49.8595 59.7235 50.2932 59.7235C50.7269 59.7235 51.1561 59.6361 51.5553 59.4667C51.9545 59.2972 52.3155 59.0491 52.6168 58.7371C52.918 58.4252 53.1534 58.0558 53.3088 57.6509C53.4642 57.246 53.5365 56.814 53.5214 56.3806C53.5404 55.9447 53.4707 55.5095 53.3167 55.1012C53.1627 54.6929 52.9275 54.3202 52.6253 54.0054C52.3232 53.6906 51.9603 53.4403 51.5587 53.2697C51.157 53.0991 50.725 53.0118 50.2887 53.0129H50.2873ZM32.9949 38.476H32.6515V55.5522H46.3585C46.5318 54.664 46.998 53.8597 47.6826 53.2679C48.3671 52.6761 49.2304 52.3311 50.1342 52.2881C51.0381 52.245 51.9302 52.5065 52.6679 53.0305C53.4056 53.5545 53.9462 54.3109 54.2031 55.1785L54.3342 55.1588H57.6665V51.4502H58.693V38.472H32.9949V38.476ZM50.2873 57.8188C49.9243 57.7919 49.5849 57.6287 49.3372 57.362C49.0894 57.0952 48.9517 56.7446 48.9517 56.3806C48.9517 56.0166 49.0894 55.6661 49.3372 55.3993C49.5849 55.1326 49.9243 54.9694 50.2873 54.9425C50.6698 54.9425 51.0365 55.0945 51.307 55.3649C51.5774 55.6354 51.7294 56.0021 51.7294 56.3845C51.7294 56.767 51.5774 57.1338 51.307 57.4042C51.0365 57.6746 50.6698 57.8266 50.2873 57.8266V57.8188ZM46.3546 55.9087C46.2614 56.0927 46.227 56.301 46.2562 56.5052V56.8749H32.6501V55.91L46.3546 55.9087ZM56.7489 53.4848H56.2796V51.445H56.7489V53.4848ZM54.325 55.5469H58.0152V56.4986H54.4325V56.1211C54.4325 55.9034 54.4325 55.6465 54.3263 55.5469H54.325ZM50.2834 16.2401L45.9102 13.9525L44.1732 11.9088L41.5094 11.7935L37.8388 10.2203L37.2646 7.5985L35.1815 7.21964L30.6759 5.07098L29.8736 3.12299L28.4945 1.20381L25.8307 0.612602L25.052 0.136687C29.0639 -0.265882 33.1152 0.223428 36.9159 1.56955C40.7961 3.02639 44.3063 5.32297 47.1952 8.295C50.084 11.267 52.2801 14.841 53.6263 18.761L50.2834 16.2401ZM34.96 3.87151L32.7472 1.45153L30.6733 1.80943L32.5282 4.683L34.825 5.77109L36.0887 5.4328L34.96 3.87151ZM42.6748 6.97056L41.4111 7.0925L40.0136 6.02409L38.6411 7.21572L41.883 9.50455L43.9385 9.01952C43.4326 8.39156 43.008 7.70224 42.6748 6.96792V6.97056ZM20.077 41.7101L23.201 38.8339L22.7225 34.3872L24.6889 34.5052L27.3225 33.1747L31.958 33.6558L34.3674 31.1178L33.7933 32.9426L34.4894 33.1759L39.9061 29.3271L41.4058 25.001L45.6676 21.2767L49.6948 23.6744L52.5906 24.7598L54.4259 24.2944L53.035 22.1248L54.7746 23.2064C55.706 27.9622 55.4265 32.8759 53.9619 37.4954H31.722V40.0111H24.8069C24.4457 40.0236 24.092 40.1178 23.7723 40.2865C23.4526 40.4552 23.1753 40.6941 22.9611 40.9852V41.1097L18.812 48.0746V55.0395C18.8395 55.3349 18.9143 55.624 19.0336 55.8956C18.9352 55.8956 18.812 55.7553 18.6901 55.7553C17.6571 55.3948 16.6176 54.8075 15.5898 54.3343L16.9662 51.2024C16.9662 51.2024 17.3058 45.7988 17.4382 45.6638C17.4382 45.555 20.081 41.7088 20.081 41.7088L20.077 41.7101Z"
          fill="#212529"
        />
      </svg>
    ),
    title: 'internationalTrade',
  },
  {
    type: 'CONSULTING_SERVICE',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 60" fill="none">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M27.7257 35.3256C27.7438 34.6007 27.9757 33.8973 28.3924 33.3039C28.8091 32.7104 29.392 32.2534 30.0677 31.9903C30.7435 31.7272 31.4819 31.6697 32.1902 31.8251C32.8985 31.9805 33.545 32.3419 34.0485 32.8637C34.552 33.3855 34.8901 34.0446 35.02 34.758C35.15 35.4714 35.0662 36.2073 34.7791 36.8732C34.492 37.5391 34.0145 38.1052 33.4065 38.5005C32.7985 38.8957 32.0873 39.1024 31.3622 39.0945C30.8691 39.11 30.3782 39.0221 29.9211 38.8364C29.464 38.6507 29.0509 38.3714 28.7083 38.0164C28.3658 37.6613 28.1013 37.2385 27.9321 36.7751C27.7629 36.3116 27.6926 35.8179 27.7257 35.3256ZM28.8072 29.6134L28.7636 28.5385C28.7126 27.3655 28.8999 26.1943 29.314 25.0956C29.7281 23.9969 30.3604 22.9935 31.1729 22.1459C32.4768 20.5097 33.5557 19.1726 33.5557 17.8051C33.5557 16.3873 32.6291 15.3799 30.548 15.3429C29.1073 15.3644 27.7023 15.794 26.4959 16.5819L25.0847 12.081C27.1993 10.9588 29.5615 10.3848 31.9553 10.4117C37.3828 10.4117 39.9113 13.422 39.9113 16.8427C39.9113 19.951 37.8991 22.0056 36.337 23.7477C35.6668 24.4202 35.138 25.2201 34.7817 26.1002C34.4254 26.9803 34.249 27.9227 34.2626 28.8721V29.6174L28.8072 29.6134ZM46.7117 60L44.8808 56.8454C43.0699 53.6841 41.439 50.7916 40.2475 48.6378H5.79692C5.1362 48.6395 4.48161 48.5111 3.87054 48.2598C3.25947 48.0085 2.70387 47.6393 2.2355 47.1733C1.76714 46.7073 1.39518 46.1536 1.14085 45.5437C0.886514 44.9339 0.754797 44.28 0.753235 43.6193V5.04633C0.754286 3.70874 1.28593 2.42619 2.2315 1.48013C3.17707 0.534059 4.45933 0.00175265 5.79692 0H59.1898C59.8543 0.000173698 60.5123 0.131266 61.1261 0.385792C61.7399 0.640319 62.2975 1.01329 62.7671 1.4834C63.2367 1.9535 63.6091 2.51152 63.863 3.12559C64.1169 3.73965 64.2473 4.39774 64.2467 5.06222V43.6232C64.2452 44.2851 64.1131 44.9401 63.8579 45.5508C63.6027 46.1614 63.2296 46.7158 62.7598 47.182C62.29 47.6482 61.7329 48.0171 61.1203 48.2676C60.5077 48.5181 59.8516 48.6453 59.1898 48.6418H53.1268C50.9849 52.4649 48.3757 57.0387 48.3757 57.0387L46.7117 60ZM5.79692 3.89992C5.64265 3.89764 5.48947 3.926 5.34624 3.98334C5.20301 4.04068 5.07259 4.12588 4.96251 4.23398C4.85244 4.34208 4.7649 4.47096 4.70499 4.61313C4.64507 4.7553 4.61395 4.90794 4.61344 5.06222V43.6232C4.61728 43.9334 4.74409 44.2293 4.96601 44.446C5.18792 44.6627 5.48677 44.7825 5.79692 44.7789H42.5086L43.0699 45.7704C44.1514 47.6754 45.5229 50.0874 46.6772 52.1393C47.7522 50.2753 49.1263 47.8197 50.3071 45.7466L50.8684 44.7789H59.1898C59.5011 44.7811 59.8008 44.6614 60.025 44.4455C60.2491 44.2295 60.3798 43.9344 60.3892 43.6232V5.04633C60.3775 4.73683 60.2458 4.44405 60.0219 4.23004C59.798 4.01604 59.4995 3.89763 59.1898 3.89992H5.79692Z"
          fill="#212529"
        />
      </svg>
    ),
    title: 'consultingService',
  },
  {
    type: 'VOCATIONAL_TRAINING',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 43 60" fill="none">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M42.4789 53.2411C42.4789 46.3357 38.4873 38.8007 38.4873 38.8007C36.9306 35.7015 35.1974 32.1979 31.4222 30.121C31.2372 30.0353 31.0571 29.9394 30.8827 29.8339L26.7972 27.9784L24.9932 26.4604C26.4817 25.7952 27.7954 24.7935 28.8308 23.5342C29.8662 22.2749 30.595 20.7924 30.9599 19.2034C31.2316 19.1816 31.475 18.7425 31.475 18.1875V18.0729C31.7111 17.6127 31.9005 17.1301 32.0403 16.6321C32.2579 15.9265 33.0536 13.7569 32.312 13.2174C31.9875 13.0088 31.7326 13.1015 31.5472 13.4453C31.5472 13.4453 32.5295 8.08116 31.784 5.79696C30.087 -0.097665 16.1964 -1.70717 16.1964 1.94189C10.2541 3.61577 11.346 9.26575 12.1701 13.5419C12.1204 13.4665 12.0535 13.4041 11.9749 13.3597C11.8963 13.3153 11.8082 13.2903 11.718 13.2866C11.6278 13.283 11.5381 13.3009 11.4562 13.3387C11.3742 13.3766 11.3024 13.4334 11.2468 13.5045C10.5953 14.1818 11.31 15.8686 11.5533 16.6321C11.6507 17.0999 11.8169 17.5508 12.0465 17.9699C12.0154 18.038 12.0034 18.1132 12.0117 18.1875C12.0117 18.7425 12.304 19.2034 12.613 19.2034H12.6374C12.9339 20.7401 13.5753 22.1894 14.5131 23.4422C15.451 24.6949 16.6609 25.7186 18.0518 26.4359L16.1964 27.981L12.1443 29.8364C12.0155 29.8995 11.6524 30.1017 11.5919 30.1236C7.82438 32.2005 6.05522 35.704 4.5204 38.8033C2.4136 43.3683 1.06248 48.2453 0.519836 53.2437V53.4896C0.554152 54.6078 1.03102 55.6667 1.84563 56.4335C2.66024 57.2003 3.74598 57.6123 4.86422 57.579C5.04048 57.5826 5.21675 57.5753 5.39211 57.5572C6.50135 57.3692 7.57582 57.0145 8.57896 56.5052L21.1047 59.9392C21.124 59.9392 21.1665 59.974 21.1859 59.974H21.285C21.3586 59.9947 21.4352 60.0029 21.5116 59.9984C21.5825 60.0038 21.6537 59.9955 21.7214 59.974H21.8206C21.8386 59.974 21.8734 59.9392 21.9082 59.9392L34.4146 56.4871C35.4221 57.004 36.5023 57.3648 37.6181 57.5572C37.7944 57.5752 37.9715 57.5825 38.1486 57.579C39.2651 57.6106 40.3485 57.1976 41.1607 56.4308C41.9729 55.664 42.4475 54.6061 42.4801 53.4896V53.2437L42.4789 53.2411ZM24.504 26.6535L21.6841 29.436L23.0245 33.9593H20.0514L21.3107 29.436L18.4407 26.5891C20.3867 27.3519 22.545 27.3744 24.5065 26.6522L24.504 26.6535ZM19.9536 56.4382L11.7941 54.1682C12.1454 53.7303 12.383 53.2125 12.486 52.6607C12.589 52.1088 12.5541 51.5401 12.3844 51.005C12.2147 50.47 11.9155 49.9851 11.5133 49.5935C11.1111 49.2018 10.6184 48.9157 10.079 48.7603V39.232L19.9536 41.9978V56.4382ZM32.9725 48.7538C32.2387 48.9412 31.5914 49.3748 31.139 49.9822C30.695 50.5944 30.4612 51.334 30.4725 52.0902C30.4839 52.8464 30.7399 53.5786 31.2021 54.1772L23.0516 56.4382V41.9914L32.9661 39.2256L32.9725 48.7538Z"
          fill="#212529"
        />
      </svg>
    ),
    title: 'vocationalTraining',
  },
  {
    type: 'LABORATORY_MATERIAL',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 59 60" fill="none">
        <path
          d="M28.4612 49.3699C28.4859 47.7695 29.1453 46.2445 30.2942 45.1302C31.4431 44.0159 32.9875 43.4035 34.5879 43.4276C34.9783 43.414 35.3688 43.4526 35.749 43.5424V38.7432H29.968C29.8492 38.7457 29.7321 38.7148 29.6299 38.6542C29.5278 38.5935 29.4447 38.5055 29.39 38.4C29.2963 38.1845 29.2569 37.9493 29.2752 37.715C29.4995 37.2113 29.6172 36.6666 29.621 36.1152C29.6007 34.9021 29.1045 33.7456 28.2395 32.8948C27.3744 32.0441 26.2098 31.5674 24.9965 31.5674C23.7832 31.5674 22.6186 32.0441 21.7536 32.8948C20.8885 33.7456 20.3924 34.9021 20.3721 36.1152C20.3641 36.668 20.4828 37.2152 20.7191 37.715C20.7848 37.8241 20.8094 37.9531 20.7883 38.0787C20.7673 38.2043 20.702 38.3183 20.6043 38.4C20.5495 38.5054 20.4663 38.5934 20.3642 38.654C20.2621 38.7146 20.1451 38.7455 20.0263 38.7432H14.2453V53.0286C14.2452 53.9508 14.4282 54.8639 14.7837 55.7148C15.1392 56.5657 15.6602 57.3376 16.3163 57.9856C16.9724 58.6337 17.7506 59.145 18.6058 59.49C19.4611 59.835 20.3763 60.0067 21.2984 59.9953H35.7477V55.3096C35.3675 55.3994 34.977 55.438 34.5866 55.4244C32.9749 55.4225 31.4286 54.7862 30.2823 53.6532C29.136 52.5202 28.4818 50.9815 28.4612 49.3699Z"
          fill="#212529"
        />
        <path
          d="M15.0502 25.9417C13.9783 24.7979 13.3952 23.2809 13.4251 21.7136C13.4549 20.1464 14.0953 18.6526 15.2099 17.5505C16.3246 16.4483 17.8253 15.8247 19.3928 15.8125C20.9603 15.8002 22.4707 16.4003 23.6024 17.485C23.8958 17.7374 24.1324 18.0491 24.2965 18.3997L27.7669 14.9654L23.6024 10.8563C23.515 10.7668 23.4489 10.6587 23.4089 10.5401C23.3689 10.4215 23.3561 10.2955 23.3714 10.1713C23.4863 9.94293 23.6024 9.71458 23.8346 9.71458C24.5696 9.49179 25.2425 9.1004 25.7995 8.57155C26.2389 8.1686 26.5816 7.67152 26.8019 7.11747C27.0221 6.56343 27.1144 5.96674 27.0715 5.37205C27.03 4.13487 26.5366 2.95579 25.6847 2.05774C24.7868 1.19643 23.5968 0.706036 22.3528 0.684745C21.1089 0.663454 19.9028 1.11285 18.976 1.94293C18.4408 2.48962 18.0428 3.15548 17.8149 3.88584C17.7001 4.11419 17.584 4.34255 17.3531 4.34255C17.1208 4.45737 16.8899 4.34255 16.659 4.1142L12.5074 0L2.33349 10.0629C1.67401 10.6976 1.14961 11.4591 0.79179 12.3015C0.433968 13.144 0.250167 14.0501 0.251301 14.9654C0.237441 15.8841 0.415291 16.7957 0.7736 17.6418C1.13191 18.4879 1.66277 19.25 2.33223 19.8794L12.5061 29.9423L15.9739 26.5145C15.6281 26.5132 15.3972 26.2848 15.0502 25.9417Z"
          fill="#212529"
        />
        <path
          d="M54.0075 39.8852C53.9879 41.4976 53.3338 43.0374 52.1871 44.171C51.0404 45.3047 49.4933 45.9411 47.8807 45.9423C47.0883 45.9394 46.3042 45.7805 45.5733 45.4745C44.8423 45.1685 44.1787 44.7215 43.6205 44.159C43.0624 43.5965 42.6205 42.9296 42.3201 42.1963C42.0198 41.463 41.8669 40.6777 41.8701 39.8852C41.851 39.5006 41.8897 39.1153 41.9849 38.7422H37.1302V44.4561C37.132 44.5744 37.1004 44.6908 37.039 44.7919C36.9776 44.893 36.8889 44.9747 36.7832 45.0276C36.5648 45.121 36.3272 45.1604 36.0904 45.1425C35.5794 44.9199 35.0286 44.8032 34.4713 44.7993C33.2887 44.7877 32.1474 45.2339 31.2862 46.0445C30.4251 46.8551 29.9108 47.9674 29.851 49.1485C29.7912 50.3296 30.1905 51.4882 30.9653 52.3816C31.7401 53.2751 32.8304 53.8344 34.0081 53.9423H34.4713C35.0298 53.9503 35.5831 53.833 36.0904 53.5992H36.3213C36.4839 53.5824 36.6473 53.623 36.7832 53.714C36.8889 53.7669 36.9776 53.8486 37.039 53.9497C37.1004 54.0508 37.132 54.1672 37.1302 54.2855V59.9994H51.5795C52.5016 60.0109 53.4168 59.8391 54.272 59.4942C55.1273 59.1492 55.9055 58.6378 56.5616 57.9898C57.2177 57.3417 57.7386 56.5699 58.0941 55.7189C58.4496 54.868 58.6326 53.955 58.6326 53.0328V38.7422H53.8926C53.9933 39.1143 54.0322 39.5005 54.0075 39.8852Z"
          fill="#212529"
        />
        <path
          d="M51.5828 15.9997H37.1335V20.8003C37.7292 20.6053 38.357 20.5277 38.9822 20.5719C40.5922 20.6123 42.1227 21.2801 43.2472 22.4331C44.3716 23.586 45.0009 25.1327 45.0009 26.7432C45.0009 28.3537 44.3716 29.9004 43.2472 31.0533C42.1227 32.2063 40.5922 32.8742 38.9822 32.9145C38.3603 32.8948 37.7415 32.8184 37.1335 32.6861V37.257H42.9132C43.032 37.2545 43.1491 37.2854 43.2513 37.346C43.3534 37.4067 43.4365 37.4947 43.4912 37.6002L43.6073 37.715V38.1717C43.4746 38.5009 43.3962 38.8495 43.3751 39.2038V39.7753C43.3954 40.9884 43.8915 42.145 44.7565 42.9957C45.6215 43.8464 46.7862 44.3231 47.9995 44.3231C49.2128 44.3231 50.3775 43.8464 51.2425 42.9957C52.1076 42.145 52.6037 40.9884 52.624 39.7753C52.6322 39.2225 52.5134 38.6752 52.2769 38.1756C52.2109 38.0665 52.1863 37.9375 52.2073 37.8118C52.2284 37.6861 52.2939 37.5721 52.3918 37.4905C52.4472 37.3857 52.5305 37.2982 52.6325 37.2377C52.7344 37.1772 52.8512 37.1459 52.9697 37.1474H58.7494V22.9664C58.7365 22.0383 58.5408 21.1219 58.1736 20.2695C57.8064 19.4171 57.2749 18.6454 56.6094 17.9984C55.9438 17.3515 55.1574 16.842 54.2949 16.499C53.4324 16.1561 52.5109 15.9864 51.5828 15.9997Z"
          fill="#212529"
        />
      </svg>
    ),
    title: 'laboratoryMaterial',
  },
  {
    type: 'MAKE_BUDGET',
    icon: (
      <svg
        version="1.1"
        id="Capa_1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        viewBox="0 0 425.773 425.773"
        // style="enable-background:new 0 0 425.773 425.773;"
        xmlSpace="preserve"
      >
        <path
          d="M408.932,297.012c-1.575-2.252-3.26-4.359-5.051-6.316c2.25-3.305,3.962-7.022,5.026-11.037
     c3.147-11.93-0.009-24.432-8.435-33.441c-5.438-5.82-11.85-10.504-19.17-14.016c-1.107-18.672-16.65-33.521-35.597-33.521
     c-18.665,0-34.027,14.418-35.534,32.701c-2.203,0.973-4.314,2.049-6.334,3.219l-21.687-6.572c-0.002,0.008-0.003,0.018-0.005,0.025
     l-40.472-12.266c-1.304-3.945-4.198-7.361-8.244-10.25c4.452-4.949,8.21-9.957,11.068-14.098c6.78-9.832,12.42-20.42,16.326-30.631
     c1.926-4.309,3.566-8.635,4.894-12.879c5.26-4.408,8.355-10.992,8.355-17.898v-16.918c0-4.854-1.527-9.602-4.336-13.537V75.76
     c0-41.777-33.987-75.76-75.759-75.76h-24.56c-41.775,0-75.763,33.982-75.763,75.76v23.818c-2.808,3.934-4.334,8.686-4.334,13.535
     v16.918c0,6.9,3.096,13.482,8.354,17.896c1.326,4.238,2.968,8.564,4.893,12.885c3.909,10.213,9.552,20.797,16.327,30.621
     c2.859,4.143,6.618,9.152,11.07,14.104c-4.048,2.889-6.941,6.305-8.246,10.25l-54.016,16.371
     C29.676,243.088,6.886,407.402,6.886,407.402H6.89c-0.113,0.73-0.192,1.471-0.192,2.236c0,7.916,6.419,14.336,14.339,14.336h313.507
     c3.514,1.162,7.265,1.799,11.163,1.799c19.662,0,35.659-15.994,35.659-35.656v-3.006c7.149-3.205,13.469-7.408,18.906-12.574
     c12.302-11.684,18.805-26.932,18.805-44.092C419.076,317.892,415.662,306.647,408.932,297.012z M167.162,274.697
     c-0.205,1.984-1.604,3.643-3.528,4.178c-0.431,0.119-0.869,0.178-1.303,0.178c-1.499,0-2.943-0.695-3.877-1.932l-13.646-18.1
     c-0.636-0.844-0.979-1.871-0.979-2.928l0.018-29.019c0.001-1.699,0.893-3.279,2.352-4.156c1.458-0.879,3.27-0.928,4.773-0.133
     c3.974,2.1,7.939,3.512,11.789,4.197c2.318,0.41,4.008,2.426,4.008,4.781v12.105c0.691,0.271,1.32,0.701,1.829,1.266
     c0.92,1.021,1.364,2.385,1.225,3.752L167.162,274.697z M218.568,259.022l-13.626,18.088c-0.932,1.234-2.379,1.934-3.881,1.934
     c-0.431,0-0.869-0.059-1.299-0.176c-1.922-0.537-3.322-2.197-3.527-4.184l-2.661-25.797c-0.142-1.367,0.305-2.73,1.226-3.752
     c0.507-0.564,1.135-0.994,1.825-1.266v-12.105c0-2.355,1.691-4.371,4.01-4.781c3.847-0.686,7.812-2.098,11.784-4.195
     c1.507-0.795,3.318-0.744,4.775,0.135c1.458,0.879,2.352,2.457,2.352,4.16l0.002,29.02
     C219.548,257.152,219.205,258.178,218.568,259.022z M194.741,201.289h-26.087c-5.764,0-16.893-7.711-28.77-24.936
     c-9.375-13.586-15.889-28.625-17.422-40.23l-0.262-2.008l-4.714-3.064c-1.378-0.895-2.209-2.426-2.209-4.07v-7.994
     c0-2.68,2.174-4.855,4.855-4.855h1.983v-8.658c0-1.842,1.041-3.523,2.688-4.348c6.686-3.336,19.951-8.936,33.688-8.936
     c10.961,0,20.048,3.646,27.012,10.836c8.676,8.965,18.673,13.512,29.722,13.512c6.252,0,12.717-1.475,19.211-4.385
     c1.502-0.674,3.243-0.541,4.626,0.354c0.645,0.42,1.174,0.979,1.553,1.625h2.647c2.682,0,4.857,2.176,4.857,4.855v7.994
     c0,1.645-0.834,3.176-2.212,4.072l-4.712,3.063l-0.262,2c-1.536,11.611-8.049,26.652-17.425,40.244
     C211.635,193.58,200.507,201.289,194.741,201.289z M384.285,357.705c-6.555,6.23-15.328,10.387-26.134,12.393v20.02
     c0,6.873-5.564,12.441-12.445,12.441c-6.877,0-12.443-5.568-12.443-12.441v-19.354c-15.767-2.135-27.564-8.967-35.056-20.34
     c-2.293-3.482-2.693-7.879-1.064-11.717c1.634-3.836,5.08-6.604,9.181-7.357l9.395-1.748c4.797-0.897,9.684,1.115,12.479,5.123
     c3.528,5.08,9.515,7.654,17.777,7.654c12.708,0,12.708-5.057,12.708-6.719c0-2.41-0.898-4.16-2.843-5.516
     c-1.974-1.379-5.584-2.611-10.729-3.656c-20.656-4.215-33.974-9.68-39.565-16.254c-5.687-6.66-8.441-14.107-8.441-22.77
     c0-9.406,3.105-17.867,9.228-25.164c5.927-7.057,14.998-11.641,26.931-13.637v-14.328c0-6.871,5.566-12.441,12.443-12.441
     c6.881,0,12.445,5.57,12.445,12.441v14.596c10.686,2.037,19.03,6.357,25.36,13.133c2.924,3.127,4.041,7.533,2.95,11.674
     c-1.099,4.139-4.233,7.424-8.318,8.695l-6.44,2.02c-4.674,1.469-9.781,0.047-13.03-3.617c-3.239-3.654-8.056-5.51-14.298-5.51
     c-5.029,0-11.032,1.199-11.032,6.906c0,1.615,0.619,3.074,1.786,4.217c1.232,1.191,4.814,2.461,10.647,3.766
     c13.455,2.941,23.289,5.633,29.168,7.975c5.972,2.375,11,6.451,14.959,12.117c3.95,5.654,5.959,12.432,5.959,20.139
     C395.862,341.238,391.969,350.406,384.285,357.705z"
        />
      </svg>
    ),
    title: 'makeBudget',
  },
];
export default SpecialServiceData;
