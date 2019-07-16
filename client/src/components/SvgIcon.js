import React from "react";

const SvgIcon = props => {

  
  let ICONS = {
    placeholder: {
      viewBox: "0 0 24 24",
      path: "M0 0 z"
    },
    /* ####### NAVIGATION: Header & Sidebar */
    Profile: {
      viewBox: "0 0 24 24",
      path: "M12 0c6.629 0 12 5.371 12 12 0 6.589-5.344 12-12 12-6.643 0-12-5.397-12-12 0-6.629 5.371-12 12-12zM20.29 18.094c1.246-1.714 1.996-3.817 1.996-6.094 0-5.665-4.621-10.286-10.286-10.286s-10.286 4.621-10.286 10.286c0 2.277 0.75 4.379 1.996 6.094 0.482-2.397 1.647-4.379 4.098-4.379 1.085 1.058 2.558 1.714 4.192 1.714s3.107-0.656 4.192-1.714c2.451 0 3.616 1.982 4.098 4.379zM17.143 9.429c0-2.839-2.304-5.143-5.143-5.143s-5.143 2.304-5.143 5.143 2.304 5.143 5.143 5.143 5.143-2.304 5.143-5.143z"
    },
    "Stats Panel": {
      viewBox: "0 0 24 24",
      path: "M8.571 12v6.857h-3.429v-6.857h3.429zM13.714 5.143v13.714h-3.429v-13.714h3.429zM27.429 20.571v1.714h-27.429v-20.571h1.714v18.857h25.714zM18.857 8.571v10.286h-3.429v-10.286h3.429zM24 3.429v15.429h-3.429v-15.429h3.429z"
    },
    Activities: {
      viewBox: "0 0 24 24",
      path: "M22.286 13.996v-8.25c-1.071 0.576-2.571 1.219-4.098 1.219v0c-0.71 0-1.366-0.134-1.942-0.429-1.433-0.71-2.987-1.393-4.848-1.393-1.728 0-3.844 0.844-5.397 1.701v8.022c1.768-0.817 4.018-1.513 5.799-1.513 2.063 0 3.402 0.683 4.835 1.393l0.375 0.188c0.375 0.188 0.83 0.295 1.353 0.295 1.487 0 3.094-0.79 3.924-1.232zM4.286 3.429c0 0.629-0.348 1.179-0.857 1.473v16.955c0 0.241-0.188 0.429-0.429 0.429h-0.857c-0.241 0-0.429-0.188-0.429-0.429v-16.955c-0.509-0.295-0.857-0.844-0.857-1.473 0-0.951 0.763-1.714 1.714-1.714s1.714 0.763 1.714 1.714zM24 4.286v10.219c0 0.321-0.188 0.616-0.469 0.763-0.054 0.027-0.134 0.067-0.228 0.121-0.857 0.455-2.879 1.554-4.942 1.554-0.79 0-1.5-0.161-2.116-0.469l-0.375-0.188c-1.353-0.683-2.424-1.219-4.071-1.219-1.929 0-4.647 1.004-6.214 1.955-0.134 0.080-0.295 0.121-0.442 0.121s-0.295-0.040-0.429-0.107c-0.268-0.161-0.429-0.442-0.429-0.75v-9.937c0-0.295 0.161-0.576 0.415-0.737 0.857-0.509 3.884-2.183 6.696-2.183 2.237 0 4.058 0.817 5.598 1.567 0.348 0.174 0.75 0.254 1.192 0.254 1.58 0 3.321-1.004 4.152-1.5 0.174-0.094 0.321-0.174 0.415-0.228 0.268-0.134 0.576-0.121 0.83 0.027 0.254 0.161 0.415 0.442 0.415 0.737z"
    },
    Exercises: {
      viewBox: "0 0 24 24",
      path: "M20.571 3.429c0.938 0 1.714 0.777 1.714 1.714v17.143c0 0.938-0.777 1.714-1.714 1.714h-18.857c-0.938 0-1.714-0.777-1.714-1.714v-17.143c0-0.938 0.777-1.714 1.714-1.714h1.714v-1.286c0-1.179 0.964-2.143 2.143-2.143h0.857c1.179 0 2.143 0.964 2.143 2.143v1.286h5.143v-1.286c0-1.179 0.964-2.143 2.143-2.143h0.857c1.179 0 2.143 0.964 2.143 2.143v1.286h1.714zM15.429 2.143v3.857c0 0.241 0.188 0.429 0.429 0.429h0.857c0.241 0 0.429-0.188 0.429-0.429v-3.857c0-0.241-0.188-0.429-0.429-0.429h-0.857c-0.241 0-0.429 0.188-0.429 0.429zM5.143 2.143v3.857c0 0.241 0.188 0.429 0.429 0.429h0.857c0.241 0 0.429-0.188 0.429-0.429v-3.857c0-0.241-0.188-0.429-0.429-0.429h-0.857c-0.241 0-0.429 0.188-0.429 0.429zM20.571 22.286v-13.714h-18.857v13.714h18.857zM12 14.571h3c0.241 0 0.429 0.188 0.429 0.429v0.857c0 0.241-0.188 0.429-0.429 0.429h-3v3c0 0.241-0.188 0.429-0.429 0.429h-0.857c-0.241 0-0.429-0.188-0.429-0.429v-3h-3c-0.241 0-0.429-0.188-0.429-0.429v-0.857c0-0.241 0.188-0.429 0.429-0.429h3v-3c0-0.241 0.188-0.429 0.429-0.429h0.857c0.241 0 0.429 0.188 0.429 0.429v3z"
    },
    "Exercise Logs": {
      viewBox: "0 0 24 24",
      path: "M17.451 12.911l-6.857 6.857c-0.174 0.161-0.442 0.161-0.616 0l-3.857-3.857c-0.161-0.174-0.161-0.442 0-0.603l0.616-0.616c0.161-0.161 0.429-0.161 0.603 0l2.946 2.946 5.946-5.946c0.174-0.161 0.442-0.161 0.603 0l0.616 0.616c0.161 0.161 0.161 0.429 0 0.603zM1.714 22.286h18.857v-13.714h-18.857v13.714zM6.857 6v-3.857c0-0.241-0.188-0.429-0.429-0.429h-0.857c-0.241 0-0.429 0.188-0.429 0.429v3.857c0 0.241 0.188 0.429 0.429 0.429h0.857c0.241 0 0.429-0.188 0.429-0.429zM17.143 6v-3.857c0-0.241-0.188-0.429-0.429-0.429h-0.857c-0.241 0-0.429 0.188-0.429 0.429v3.857c0 0.241 0.188 0.429 0.429 0.429h0.857c0.241 0 0.429-0.188 0.429-0.429zM22.286 5.143v17.143c0 0.938-0.777 1.714-1.714 1.714h-18.857c-0.938 0-1.714-0.777-1.714-1.714v-17.143c0-0.938 0.777-1.714 1.714-1.714h1.714v-1.286c0-1.179 0.964-2.143 2.143-2.143h0.857c1.179 0 2.143 0.964 2.143 2.143v1.286h5.143v-1.286c0-1.179 0.964-2.143 2.143-2.143h0.857c1.179 0 2.143 0.964 2.143 2.143v1.286h1.714c0.938 0 1.714 0.777 1.714 1.714z"
    },
    Settings: {
      viewBox: "0 0 24 24",
      path: "M12 15.516c1.922 0 3.516-1.594 3.516-3.516s-1.594-3.516-3.516-3.516-3.516 1.594-3.516 3.516 1.594 3.516 3.516 3.516zM19.453 12.984l2.109 1.641c0.188 0.141 0.234 0.422 0.094 0.656l-2.016 3.469c-0.141 0.234-0.375 0.281-0.609 0.188l-2.484-0.984c-0.516 0.375-1.078 0.75-1.688 0.984l-0.375 2.625c-0.047 0.234-0.234 0.422-0.469 0.422h-4.031c-0.234 0-0.422-0.188-0.469-0.422l-0.375-2.625c-0.609-0.234-1.172-0.563-1.688-0.984l-2.484 0.984c-0.234 0.094-0.469 0.047-0.609-0.188l-2.016-3.469c-0.141-0.234-0.094-0.516 0.094-0.656l2.109-1.641c-0.047-0.328-0.047-0.656-0.047-0.984s0-0.656 0.047-0.984l-2.109-1.641c-0.188-0.141-0.234-0.422-0.094-0.656l2.016-3.469c0.141-0.234 0.375-0.281 0.609-0.188l2.484 0.984c0.516-0.375 1.078-0.75 1.688-0.984l0.375-2.625c0.047-0.234 0.234-0.422 0.469-0.422h4.031c0.234 0 0.422 0.188 0.469 0.422l0.375 2.625c0.609 0.234 1.172 0.563 1.688 0.984l2.484-0.984c0.234-0.094 0.469-0.047 0.609 0.188l2.016 3.469c0.141 0.234 0.094 0.516-0.094 0.656l-2.109 1.641c0.047 0.328 0.047 0.656 0.047 0.984s0 0.656-0.047 0.984z"
    },
    Back: {
      viewBox: "0 0 24 24",
      path: "M9.439 20.561l-7.5-7.5c-0.586-0.586-0.586-1.536 0-2.121l7.5-7.5c0.586-0.586 1.536-0.586 2.121 0s0.586 1.536 0 2.121l-4.939 4.939h14.379c0.828 0 1.5 0.672 1.5 1.5s-0.672 1.5-1.5 1.5h-14.379l4.939 4.939c0.293 0.293 0.439 0.677 0.439 1.061s-0.146 0.768-0.439 1.061c-0.586 0.586-1.536 0.586-2.121 0z"
    },
    User: {
      viewBox: "0 0 24 24",
      path: "M12 0c6.629 0 12 5.371 12 12 0 6.589-5.344 12-12 12-6.643 0-12-5.397-12-12 0-6.629 5.371-12 12-12zM20.29 18.094c1.246-1.714 1.996-3.817 1.996-6.094 0-5.665-4.621-10.286-10.286-10.286s-10.286 4.621-10.286 10.286c0 2.277 0.75 4.379 1.996 6.094 0.482-2.397 1.647-4.379 4.098-4.379 1.085 1.058 2.558 1.714 4.192 1.714s3.107-0.656 4.192-1.714c2.451 0 3.616 1.982 4.098 4.379zM17.143 9.429c0-2.839-2.304-5.143-5.143-5.143s-5.143 2.304-5.143 5.143 2.304 5.143 5.143 5.143 5.143-2.304 5.143-5.143z"
    },
    Map: {
      viewBox: "0 0 24 24",
      path: "M23.24 21.722l-1.64-4.922h-1.8l1 4.8h-17.599l1-4.8h-1.8l-1.642 4.922c-0.416 1.253 0.322 2.278 1.642 2.278h19.2c1.32 0 2.058-1.025 1.64-2.278zM18 6c0-3.313-2.686-6-6-6s-6 2.687-6 6c0 5.73 6 12 6 12s6-6.27 6-12zM8.76 6.072c0-1.789 1.45-3.239 3.24-3.239s3.24 1.45 3.24 3.239c0 1.79-1.451 3.24-3.24 3.24s-3.24-1.451-3.24-3.24z"
    },

    /* ###### FORM ICONS*/

    feUserMail: {
      viewBox: "0 0 24 24",
      path: "M24 9.509v10.634c0 1.179-0.964 2.143-2.143 2.143h-19.714c-1.179 0-2.143-0.964-2.143-2.143v-10.634c0.402 0.442 0.857 0.83 1.353 1.165 2.223 1.513 4.473 3.027 6.656 4.621 1.125 0.83 2.518 1.848 3.978 1.848h0.027c1.46 0 2.853-1.018 3.978-1.848 2.183-1.58 4.433-3.107 6.67-4.621 0.482-0.335 0.938-0.723 1.339-1.165zM24 5.571c0 1.5-1.112 2.853-2.29 3.67-2.089 1.446-4.192 2.893-6.268 4.353-0.871 0.603-2.344 1.835-3.429 1.835h-0.027c-1.085 0-2.558-1.232-3.429-1.835-2.076-1.46-4.179-2.906-6.254-4.353-0.951-0.643-2.304-2.156-2.304-3.375 0-1.313 0.71-2.437 2.143-2.437h19.714c1.165 0 2.143 0.964 2.143 2.143z"
    },
    fePassword: {
      viewBox: "0 0 24 24",
      path: "M17 10h-1v-2c0-2.205-1.794-4-4-4s-4 1.795-4 4v2h-1c-1.103 0-2 0.896-2 2v7c0 1.104 0.897 2 2 2h10c1.103 0 2-0.896 2-2v-7c0-1.104-0.897-2-2-2zM12 18.299c-0.719 0-1.3-0.58-1.3-1.299s0.581-1.301 1.3-1.301 1.3 0.582 1.3 1.301-0.581 1.299-1.3 1.299zM14 11h-4v-3c0-1.104 0.897-2 2-2s2 0.896 2 2v3z"
    },
    feAddress: {
      viewBox: "0 0 24 24",
      path: "M23.759 6.198l-2.85-2.196c-0.162-0.112-0.389-0.211-0.625-0.284-0.238-0.073-0.484-0.118-0.68-0.118h-8.203l0.961 6h7.242c0.197 0 0.443-0.044 0.679-0.118s0.464-0.174 0.625-0.283l2.85-2.198c0.162-0.109 0.242-0.254 0.242-0.401s-0.080-0.292-0.241-0.402zM10.2 1.2h-1.2c-0.331 0-0.6 0.269-0.6 0.6v4.2h-4.003c-0.199 0-0.444 0.044-0.68 0.119-0.238 0.072-0.464 0.172-0.625 0.283l-2.85 2.196c-0.162 0.109-0.241 0.256-0.241 0.402 0 0.145 0.079 0.29 0.241 0.402l2.85 2.198c0.161 0.109 0.388 0.21 0.625 0.282 0.236 0.073 0.481 0.118 0.68 0.118h4.003v10.2c0 0.331 0.269 0.6 0.6 0.6h1.2c0.331 0 0.6-0.269 0.6-0.6v-20.4c0-0.331-0.269-0.6-0.6-0.6z"
    },
    feCity: {
      viewBox: "0 0 24 24",
      path: "M9.984 20.016h-4.969v-8.016h-3l9.984-9 9.984 9h-3v8.016h-4.969v-6h-4.031v6z"
    },
    feZip:{
      viewBox: "0 0 32 32",
      path: "m 21.482512,10.788992 5.460205,0 q 2.435302,0 3.734131,1.085205 1.307373,1.07666 1.307373,3.076172 0,2.008057 -1.307373,3.093262 -1.298829,1.07666 -3.734131,1.07666 l -2.17041,0 0,4.426269 -3.289795,0 0,-12.757568 z m 3.289795,2.384033 0,3.563233 1.820068,0 q 0.957031,0 1.478271,-0.461426 0.521241,-0.469971 0.521241,-1.324463 0,-0.854492 -0.521241,-1.315918 -0.52124,-0.461426 -1.478271,-0.461426 l -1.820068,0 z m -9.818116,-2.384033 3.289795,0 0,12.757568 -3.289795,0 0,-12.757568 z m -13.3044431,0 10.7238771,0 0,1.990967 -6.8444826,8.280029 7.0410156,0 0,2.486572 -11.1169433,0 0,-1.990967 6.8444824,-8.280029 -6.6479492,0 0,-2.486572 z"
  },
    feCountry: {
      viewBox: "0 0 24 24",
      path: "M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zM12 22.5c-1.476 0-2.88-0.305-4.154-0.854l5.464-6.147c0.122-0.137 0.189-0.315 0.189-0.498v-2.25c0-0.414-0.336-0.75-0.75-0.75-2.648 0-5.442-2.753-5.47-2.78-0.141-0.141-0.331-0.22-0.53-0.22h-3c-0.414 0-0.75 0.336-0.75 0.75v4.5c0 0.284 0.161 0.544 0.415 0.671l2.585 1.293v4.404c-2.72-1.897-4.5-5.049-4.5-8.617 0-1.61 0.363-3.136 1.011-4.5h2.739c0.199 0 0.39-0.079 0.53-0.22l3-3c0.141-0.141 0.22-0.331 0.22-0.53v-1.814c0.951-0.283 1.957-0.436 3-0.436 1.65 0 3.211 0.381 4.6 1.059-0.097 0.082-0.192 0.168-0.282 0.259-0.85 0.85-1.318 1.98-1.318 3.182s0.468 2.332 1.318 3.182c0.854 0.854 1.997 1.319 3.179 1.319 0.074 0 0.149-0.002 0.223-0.006 0.324 1.214 0.908 4.375-0.197 8.727-0.010 0.041-0.016 0.082-0.020 0.122-1.906 1.947-4.563 3.156-7.503 3.156z"
    },
    feWeight: {
      viewBox: "0 0 32 32",
    path:"m 25.133769,3.904425 -2.637444,0 C 20.656587,2.2314868 18.390924,1.3176186 16.046649,1.3176186 c -2.344666,0 -4.610564,0.9140983 -6.4497557,2.5868064 l -2.637368,0 c -2.44875,0 -4.4003638,2.0383226 -4.2885644,4.4862249 L 3.5017026,26.812559 c 0.1032223,2.299086 1.9871398,4.099948 4.2886422,4.099948 l 16.5126832,0 c 2.301504,0 4.185416,-1.800862 4.288644,-4.099637 L 29.422336,8.3915703 C 29.534124,5.9444645 27.584235,3.904425 25.133769,3.904425 Z M 21.206857,7.219363 18.348775,8.8510089 C 18.127047,8.6268648 17.895267,8.435199 17.656633,8.2776044 l 0,-1.1019409 c 0,-0.8891777 -0.72089,-1.6100703 -1.610064,-1.6100703 -0.889172,0 -1.610061,0.7208926 -1.610061,1.6100703 l 0,1.1019409 C 14.197873,8.4351282 13.966172,8.6268648 13.744366,8.8510089 L 10.88644,7.219363 c 2.884415,-3.5678257 7.413954,-3.5936136 10.320417,0 z m 4.167885,19.448831 c -0.02579,0.574343 -0.496669,1.024344 -1.071792,1.024344 l -16.5126831,0 c -0.5752008,0 -1.0460023,-0.449923 -1.0717902,-1.024655 L 5.8876572,8.2447899 C 5.8597631,7.6343763 6.34654,7.1246187 6.9594475,7.1246187 l 0.1400722,0 C 6.7821199,7.867954 7.0652362,8.7459809 7.7819996,9.1550829 l 5.5933044,3.1932551 c 0.772465,0.441032 1.755595,0.172215 2.196404,-0.599829 0.17841,-0.31234 0.348407,-0.519174 0.474852,-0.645388 0.382845,0.381898 1.075844,2.156041 2.671259,1.245288 l 5.593303,-3.1932551 c 0.713021,-0.406996 1.001596,-1.2832352 0.682481,-2.0304467 0.182151,0 0.574031,-0.026549 0.916442,0.3318796 0.203963,0.2134713 0.308908,0.4934035 0.29543,0.7882031 6.2e-5,-1.77e-4 -0.830742,18.4231691 -0.830742,18.4234041 z"
  },
  feHeight: {
    viewBox: "0 0 32 32",
  path:"m 10.897836,2.2928264 c 0.479207,0 0.870815,-0.3864264 0.870815,-0.8708146 0,-0.48438814 -0.396708,-0.87089433 -0.870815,-0.87089433 l -4.6324139,0 c -0.4792072,0 -0.8708151,0.38642648 -0.8708151,0.87081463 l 0,29.5516629 c 0,0.479207 0.3864266,0.870814 0.8708151,0.870814 l 4.6324139,0 c 0.479207,0 0.870815,-0.386427 0.870815,-0.870814 0,-0.479208 -0.386426,-0.870815 -0.870815,-0.870815 l -3.7564185,0 0,-2.437245 3.7564185,0 c 0.479207,0 0.870815,-0.386427 0.870815,-0.870814 0,-0.484389 -0.386426,-0.870815 -0.870815,-0.870815 l -3.7564185,0 0,-2.555851 1.7932007,0 c 0.4792072,0 0.8708141,-0.386507 0.8708141,-0.870815 0,-0.484308 -0.3864266,-0.870815 -0.8708141,-0.870815 l -1.7932007,0 0,-2.42194 3.7564185,0 c 0.479207,0 0.870815,-0.386427 0.870815,-0.870815 0,-0.479207 -0.386426,-0.870814 -0.870815,-0.870814 l -3.7564185,0 0,-2.555851 1.7932007,0 c 0.4792072,0 0.8708141,-0.386427 0.8708141,-0.870815 0,-0.479207 -0.3864266,-0.870814 -0.8708141,-0.870814 l -1.7932007,0 0,-2.416681 3.7564185,0 c 0.479207,0 0.870815,-0.386426 0.870815,-0.8708137 0,-0.4792075 -0.386426,-0.870815 -0.870815,-0.870815 l -3.7564185,0 0,-2.561032 1.7932007,0 c 0.4792072,0 0.8708141,-0.3864264 0.8708141,-0.8708146 0,-0.4843882 -0.3864266,-0.8708146 -0.8708141,-0.8708146 l -1.7932007,0 0,-2.4476866 3.7564185,0 0,0.036107 z m 12.676112,6.4410791 -1.015166,0 c -0.350398,0 -0.66987,0.2164084 -0.798679,0.5358798 L 20.53889,12.237809 19.312497,9.2697853 C 19.178507,8.9451329 18.864217,8.7339055 18.513818,8.7339055 l -1.020268,0 c -1.61282,0 -2.921712,1.3139935 -2.921712,2.9217125 l 0,10.367596 c 0,0.479207 0.386426,0.870815 0.870814,0.870815 l 0.484388,0 0,8.079724 c 0,0.479207 0.386427,0.870815 0.870815,0.870815 l 7.481992,0 c 0.479207,0 0.870814,-0.386426 0.870814,-0.870815 l 0,-8.079804 0.479207,0 c 0.479207,0 0.870815,-0.386427 0.870815,-0.870814 l 0,-10.362416 c 8e-5,-1.612899 -1.313914,-2.9268135 -2.926735,-2.9268135 z m -0.164917,21.3740555 -1.999326,0 0,-4.039863 c 0,-0.479207 -0.386427,-0.870814 -0.870815,-0.870814 -0.479206,0 -0.870814,0.386426 -0.870814,0.870814 l 0,4.039863 -1.999327,0 0,-7.214012 5.745464,0 0,7.214012 -0.0052,0 z m -7.105767,-8.95054 0,-9.496702 c 0,-0.654406 0.530779,-1.185184 1.185184,-1.185184 l 0.437999,0 1.803482,4.38508 c 0.293726,0.690514 1.298531,0.736824 1.60772,0 l 1.803482,-4.379979 0.437998,0 c 0.654407,0 1.185185,0.530778 1.185185,1.185185 l 0,9.496702 -8.46105,0 0,-0.0051 z M 20.528608,0.55629852 c -2.019892,0 -3.658537,1.64374738 -3.658537,3.65853738 0,2.0198913 1.643747,3.6637184 3.663718,3.6637184 2.019971,0 3.663718,-1.6437473 3.663718,-3.6637184 -7.9e-5,-2.01479 -1.649008,-3.65853738 -3.668899,-3.65853738 z m 0,5.58564818 c -1.061477,0 -1.92201,-0.8605323 -1.92201,-1.9220095 0,-1.0614772 0.860533,-1.9220094 1.92201,-1.9220094 1.061477,0 1.922009,0.8605322 1.922009,1.9220094 0.0052,1.0614772 -0.855351,1.9220095 -1.922009,1.9220095 z"
},
feGender: {
  viewBox: "0 0 32 32",
  path: "M13.714 0.429c0-0.241 0.188-0.429 0.429-0.429h3.857c0.469 0 0.857 0.388 0.857 0.857v3.857c0 0.241-0.188 0.429-0.429 0.429h-0.857c-0.241 0-0.429-0.188-0.429-0.429v-1.795l-3.402 3.415c1.045 1.313 1.688 2.987 1.688 4.808 0 3.964-3 7.232-6.857 7.661v1.768h1.286c0.241 0 0.429 0.188 0.429 0.429v0.857c0 0.241-0.188 0.429-0.429 0.429h-1.286v1.286c0 0.241-0.188 0.429-0.429 0.429h-0.857c-0.241 0-0.429-0.188-0.429-0.429v-1.286h-1.286c-0.241 0-0.429-0.188-0.429-0.429v-0.857c0-0.241 0.188-0.429 0.429-0.429h1.286v-1.768c-4.045-0.442-7.165-4.045-6.83-8.277 0.281-3.643 3.174-6.629 6.79-7.045 2.17-0.254 4.179 0.415 5.705 1.634l3.415-3.402h-1.795c-0.241 0-0.429-0.188-0.429-0.429v-0.857zM7.714 17.143c3.308 0 6-2.692 6-6s-2.692-6-6-6-6 2.692-6 6 2.692 6 6 6z"
}, 
    feAge: {
      viewBox: "0 0 32 32",
      path: "m 13.713852,18.286153 -3.9177864,0 0,-3.917788 -3.9177866,0 0,3.917788 -1.9445015,0 c -1.0905838,0 -1.9732851,0.8827 -1.9732851,1.941304 l 0,7.854764 -1.9604924,0 0,3.917783 31.342293,0 0,-3.917783 -1.960493,0 0,-7.854764 c 0,-1.071396 -0.882701,-1.941304 -1.973285,-1.941304 l -1.944501,0 0,-5.875082 -3.914589,0 0,5.87828 -3.917786,0 0,-7.835571 -3.917787,0 0,7.832373 z m -7.835573,9.796068 0,-5.878281 19.588933,0 0,5.878281 -19.588933,0 z m 1.9572943,-15.67115 c 1.0809891,0 1.9604923,-0.876304 1.9604923,-1.960489 0,-1.0841888 -1.9604923,-3.9177874 -1.9604923,-3.9177874 0,0 -1.9604923,2.8367967 -1.9604923,3.9177874 0,1.080987 0.8763047,1.960489 1.9604923,1.960489 l 0,0 z M 15.671146,8.4932873 c 1.08099,0 1.960493,-0.8763079 1.960493,-1.9604927 0,-1.0841888 -1.960493,-3.9177875 -1.960493,-3.9177875 0,0 -1.957294,2.8367967 -1.957294,3.9177875 0,1.0809867 0.876305,1.9604927 1.957294,1.9604927 z m 7.835573,1.9572947 c 1.08099,0 1.960493,-0.8763079 1.960493,-1.9604927 0,-1.0841888 -1.960493,-3.9145894 -1.960493,-3.9145894 0,0 -1.960492,2.8367967 -1.960492,3.9177874 0,1.0809868 0.879503,1.9572947 1.960492,1.9572947 z"
  },

    /* ###### STOPWATCH */
    feStopWatch: {
      viewBox: "0 0 24 24",
      path: "M5.797 8.267c1.147-1.052 2.58-1.798 4.169-2.107-0.59-0.481-0.966-1.214-0.966-2.034 0-1.45 1.175-2.625 2.625-2.625s2.625 1.175 2.625 2.625c0 0.82-0.376 1.553-0.966 2.034v0c1.589 0.31 3.022 1.055 4.169 2.107v0l0.922-0.922-0.53-0.53 0.53-0.53 1.591 1.591-0.53 0.53-0.53-0.53-0.922 0.922c1.408 1.535 2.267 3.581 2.267 5.828 0 4.763-3.862 8.625-8.625 8.625s-8.625-3.862-8.625-8.625c0-2.247 0.859-4.293 2.267-5.828l-0.922-0.922-0.53 0.53-0.53-0.53 1.591-1.591 0.53 0.53-0.53 0.53 0.922 0.922zM12.11 13.61l2.339-2.339c0.143-0.143 0.386-0.148 0.532-0.002 0.142 0.142 0.146 0.385-0.002 0.532l-2.339 2.339c0.070 0.147 0.11 0.311 0.11 0.485 0 0.621-0.504 1.125-1.125 1.125-0.174 0-0.338-0.039-0.485-0.11l-0.839 0.839c-0.143 0.143-0.386 0.148-0.532 0.002-0.142-0.142-0.146-0.385 0.002-0.532l0.839-0.839c-0.070-0.147-0.11-0.311-0.11-0.485 0-0.621 0.504-1.125 1.125-1.125 0.174 0 0.338 0.039 0.485 0.11v0 0zM12 5.963c0.856-0.174 1.5-0.93 1.5-1.838 0-1.036-0.839-1.875-1.875-1.875s-1.875 0.839-1.875 1.875c0 0.907 0.644 1.664 1.5 1.838v-1.463h-0.75v-0.75h2.25v0.75h-0.75v1.463zM6.012 14.998h1.872c0.203 0 0.368-0.174 0.368-0.375 0-0.207-0.161-0.375-0.368-0.375h-1.871c0.186-2.807 2.43-5.051 5.238-5.236v1.87c0 0.203 0.174 0.368 0.375 0.368 0.207 0 0.375-0.161 0.375-0.368v-1.87c2.807 0.185 5.052 2.429 5.238 5.236h-1.871c-0.203 0-0.368 0.174-0.368 0.375 0 0.207 0.161 0.375 0.368 0.375h1.872c-0.184 2.809-2.429 5.055-5.238 5.239v-1.873c0-0.203-0.174-0.368-0.375-0.368-0.207 0-0.375 0.161-0.375 0.368v1.873c-2.808-0.185-5.054-2.431-5.238-5.239zM11.625 22.5c4.349 0 7.875-3.526 7.875-7.875s-3.526-7.875-7.875-7.875c-4.349 0-7.875 3.526-7.875 7.875s3.526 7.875 7.875 7.875v0zM11.625 21c3.521 0 6.375-2.854 6.375-6.375s-2.854-6.375-6.375-6.375c-3.521 0-6.375 2.854-6.375 6.375s2.854 6.375 6.375 6.375v0zM11.625 15c0.207 0 0.375-0.168 0.375-0.375s-0.168-0.375-0.375-0.375c-0.207 0-0.375 0.168-0.375 0.375s0.168 0.375 0.375 0.375v0z"
    },
    Record: {
      viewBox: "0 0 24 24",
      path: "M18 12.001c0 0.359-0.366 0.617-0.366 0.617l-10.273 6.364c-0.749 0.491-1.361 0.127-1.361-0.803v-12.356c0-0.932 0.612-1.294 1.362-0.804l10.273 6.366c-0.001 0 0.365 0.258 0.365 0.617z"
    },
    Stop: {
      viewBox: "0 0 24 24",
      path: "M19.2 5.994v11.77c0 0.793-0.643 1.436-1.435 1.436h-11.768c-0.661 0-1.196-0.535-1.196-1.196v-11.768c0-0.792 0.643-1.435 1.435-1.435h11.77c0.66 0 1.195 0.535 1.195 1.194z"
    },
    Reset: {
      viewBox: "0 0 24 24",
      path: "M6.857 9.857v7.714c0 0.241-0.188 0.429-0.429 0.429h-0.857c-0.241 0-0.429-0.188-0.429-0.429v-7.714c0-0.241 0.188-0.429 0.429-0.429h0.857c0.241 0 0.429 0.188 0.429 0.429zM10.286 9.857v7.714c0 0.241-0.188 0.429-0.429 0.429h-0.857c-0.241 0-0.429-0.188-0.429-0.429v-7.714c0-0.241 0.188-0.429 0.429-0.429h0.857c0.241 0 0.429 0.188 0.429 0.429zM13.714 9.857v7.714c0 0.241-0.188 0.429-0.429 0.429h-0.857c-0.241 0-0.429-0.188-0.429-0.429v-7.714c0-0.241 0.188-0.429 0.429-0.429h0.857c0.241 0 0.429 0.188 0.429 0.429zM15.429 19.554v-12.696h-12v12.696c0 0.643 0.362 1.018 0.429 1.018h11.143c0.067 0 0.429-0.375 0.429-1.018zM6.429 5.143h6l-0.643-1.567c-0.040-0.054-0.161-0.134-0.228-0.147h-4.246c-0.080 0.013-0.188 0.094-0.228 0.147zM18.857 5.571v0.857c0 0.241-0.188 0.429-0.429 0.429h-1.286v12.696c0 1.473-0.964 2.732-2.143 2.732h-11.143c-1.179 0-2.143-1.205-2.143-2.679v-12.75h-1.286c-0.241 0-0.429-0.188-0.429-0.429v-0.857c0-0.241 0.188-0.429 0.429-0.429h4.138l0.938-2.237c0.268-0.656 1.071-1.192 1.781-1.192h4.286c0.71 0 1.513 0.536 1.781 1.192l0.938 2.237h4.138c0.241 0 0.429 0.188 0.429 0.429z"
    },feDescription: {
      viewBox: "0 0 24 24",
      path: "M9.75 3.75v-0.752c0-0.825 0.673-1.498 1.504-1.498h0.743c0.833 0 1.504 0.671 1.504 1.498v0.752h1.503c0.413 0 0.747 0.335 0.747 0.749v0.752c0 0.417-0.334 0.749-0.747 0.749h-6.757c-0.413 0-0.747-0.335-0.747-0.749v-0.752c0-0.417 0.334-0.749 0.747-0.749h1.503zM9 3h-0.748c-0.828 0-1.5 0.668-1.502 1.5h-0.752c-0.827 0-1.498 0.667-1.498 1.503v15.745c0 0.83 0.668 1.503 1.498 1.503h11.254c0.827 0 1.498-0.667 1.498-1.503v-15.745c0-0.83-0.668-1.503-1.498-1.503h-0.752c-0.002-0.829-0.671-1.5-1.502-1.5h-0.748c-0.001-1.243-1.013-2.25-2.257-2.25h-0.736c-1.246 0-2.256 1.004-2.257 2.25v0 0zM16.5 5.25h0.75c0.409 0 0.75 0.337 0.75 0.752v15.745c0 0.423-0.336 0.752-0.75 0.752h-11.25c-0.409 0-0.75-0.337-0.75-0.752v-15.745c0-0.423 0.336-0.752 0.75-0.752h0.75c0.002 0.829 0.671 1.5 1.502 1.5h6.746c0.828 0 1.5-0.668 1.502-1.5v0 0zM11.625 3.75c0.207 0 0.375-0.168 0.375-0.375s-0.168-0.375-0.375-0.375c-0.207 0-0.375 0.168-0.375 0.375s0.168 0.375 0.375 0.375v0zM6.75 9.75v0.75h9.75v-0.75h-9.75zM6.75 12v0.75h9.75v-0.75h-9.75zM6.75 14.25v0.75h9.75v-0.75h-9.75zM6.75 16.5v0.75h9.75v-0.75h-9.75zM6.75 18.75v0.75h9.75v-0.75h-9.75z"
    },
    feDate: {
      viewBox: "0 0 24 24",
      path: "M1.714 22.286h18.857v-13.714h-18.857v13.714zM6.857 6v-3.857c0-0.241-0.188-0.429-0.429-0.429h-0.857c-0.241 0-0.429 0.188-0.429 0.429v3.857c0 0.241 0.188 0.429 0.429 0.429h0.857c0.241 0 0.429-0.188 0.429-0.429zM17.143 6v-3.857c0-0.241-0.188-0.429-0.429-0.429h-0.857c-0.241 0-0.429 0.188-0.429 0.429v3.857c0 0.241 0.188 0.429 0.429 0.429h0.857c0.241 0 0.429-0.188 0.429-0.429zM22.286 5.143v17.143c0 0.938-0.777 1.714-1.714 1.714h-18.857c-0.938 0-1.714-0.777-1.714-1.714v-17.143c0-0.938 0.777-1.714 1.714-1.714h1.714v-1.286c0-1.179 0.964-2.143 2.143-2.143h0.857c1.179 0 2.143 0.964 2.143 2.143v1.286h5.143v-1.286c0-1.179 0.964-2.143 2.143-2.143h0.857c1.179 0 2.143 0.964 2.143 2.143v1.286h1.714c0.938 0 1.714 0.777 1.714 1.714z"
    },
    feCalories: {
      viewBox: "0 0 32 32",      
      path: "m 28.569995,12.353752 c -0.254028,-0.08003 -0.522105,-0.120641 -0.800024,-0.120641 -2.123369,0 -4.415754,2.341086 -6.033557,4.564524 -0.231204,-1.699228 -1.043796,-3.473509 -1.98933,-5.536054 L 19.316333,10.317529 C 17.927184,7.2438243 19.040667,3.8023275 20.414492,1.7889582 20.550843,1.5876924 20.539579,1.3332794 20.384257,1.1433071 20.231307,0.95330504 19.959613,0.86141644 19.701732,0.91358544 14.573012,1.9332234 10.33161,8.0095235 10.073729,14.130137 9.4708797,13.601452 8.814943,13.269408 8.2335546,12.975334 6.9469949,12.325889 6.1708915,11.934562 6.4173309,9.8709213 6.4487509,9.6002943 6.2670485,9.345466 5.9763543,9.2554447 5.6867568,9.1647417 5.3633089,9.2673013 5.1965458,9.497023 0.21967861,16.476736 3.2983634,27.464781 9.3192635,30.885707 c 0.2833727,0.159768 0.6483781,0.109377 0.8633675,-0.112934 0.125088,-0.12983 0.164214,-0.396752 0.132498,-0.565738 -0.194448,-1.067509 -0.6674081,-4.096011 -0.228536,-6.307326 0.288115,0.273888 0.642035,0.452804 0.961659,0.61601 0.562566,0.283669 1.049102,0.528686 1.351149,1.273221 0.08181,0.203637 0.285447,0.351015 0.52824,0.383353 0.242764,0.02668 0.486536,-0.06136 0.629378,-0.236835 0.654514,-0.79042 0.94672,-2.015563 1.256118,-3.315876 0.40686,-1.702519 0.8227,-3.447662 2.010791,-4.295024 -0.477762,1.257659 -0.62674,2.785738 0.02668,4.237875 l 0.254028,0.554563 c 0.752005,1.650083 1.298001,2.839418 0.984335,3.970746 -0.07974,0.291672 0.09989,0.586901 0.414625,0.689757 0.317135,0.101671 0.671084,-0.02075 0.8227,-0.28604 0.593838,-1.049813 1.3585,-2.003469 2.062693,-2.603561 -0.283373,0.832718 -0.386852,1.8041 -0.494332,2.804916 -0.112341,1.06081 -0.231203,2.158523 -0.55969,3.14686 -0.07974,0.237132 0.01778,0.492019 0.242763,0.638241 0.117378,0.07618 0.255211,0.115305 0.392925,0.115305 0.128941,0 0.257881,-0.03468 0.370489,-0.100781 0.978229,-0.584738 1.831371,-1.336091 2.535356,-2.232628 2.044879,-2.61023 2.410062,-6.051401 2.736207,-9.084201 0.302225,-2.84179 0.588918,-5.524671 2.184075,-6.840724 0.169549,-0.139612 0.245135,-0.347043 0.197116,-0.547686 -0.04743,-0.198895 -0.208083,-0.363138 -0.425237,-0.433063 z"
    },
    /* ###### SOCIAL */
    facebook: {
      viewBox: "0 0 90 90",
      path: "M90,15.001C90,7.119,82.884,0,75,0H15C7.116,0,0,7.119,0,15.001v59.998   C0,82.881,7.116,90,15.001,90H45V56H34V41h11v-5.844C45,25.077,52.568,16,61.875,16H74v15H61.875C60.548,31,59,32.611,59,35.024V41   h15v15H59v34h16c7.884,0,15-7.119,15-15.001V15.001z"
    },
    google: {
      viewBox: "0 0 50 50",
      path: "M 25.996094 48 C 13.3125 48 2.992188 37.683594 2.992188 25 C 2.992188 12.316406 13.3125 2 25.996094 2 C 31.742188 2 37.242188 4.128906 41.488281 7.996094 L 42.261719 8.703125 L 34.675781 16.289063 L 33.972656 15.6875 C 31.746094 13.78125 28.914063 12.730469 25.996094 12.730469 C 19.230469 12.730469 13.722656 18.234375 13.722656 25 C 13.722656 31.765625 19.230469 37.269531 25.996094 37.269531 C 30.875 37.269531 34.730469 34.777344 36.546875 30.53125 L 24.996094 30.53125 L 24.996094 20.175781 L 47.546875 20.207031 L 47.714844 21 C 48.890625 26.582031 47.949219 34.792969 43.183594 40.667969 C 39.238281 45.53125 33.457031 48 25.996094 48 Z "
    },
    twitter: {
      viewBox: "0 0 24 24",
      path: "M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"
    },
    github: {
      viewBox: "0 0 24 24",
      path: "M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
    },
    bulb: {
      viewBox: "0 0 24 24",
      path: "M12 4.327c-3.478 0-5.991 2.592-6.389 5.377-0.248 1.856 0.352 3.666 1.598 5.034 1.097 1.172 1.697 2.737 1.697 4.35l-0.005 2.541c0 1.027 0.848 1.856 1.898 1.856h2.447c1.050 0 1.898-0.83 1.898-1.856l0.005-2.541c0-1.659 0.548-3.178 1.598-4.252 1.148-1.172 1.748-2.686 1.748-4.252-0.005-3.473-2.953-6.258-6.497-6.258zM14.194 21.628c0 0.488-0.398 0.881-0.9 0.881h-2.447c-0.502 0-0.9-0.389-0.9-0.881v-1.125h4.242v1.125zM16.050 14.152c-1.247 1.27-1.898 3.028-1.898 4.936v0.441h-4.242v-0.441c0-1.809-0.75-3.614-1.997-4.983-1.097-1.172-1.547-2.686-1.35-4.252 0.352-2.344 2.531-4.547 5.442-4.547 3.047 0 5.494 2.395 5.494 5.278 0 1.317-0.502 2.588-1.448 3.567 M11.498 0.516h0.998v2.344h-0.998v-2.344 M18.052 5.034l0.698 0.698 1.711-1.645-0.703-0.698 M21.038 11.072h2.447v0.98h-2.447v-0.98 M0.516 11.072h2.447v0.98h-2.447v-0.98 M4.223 3.384l-0.703 0.698 1.711 1.645 0.698-0.698z"
    }
  };
  /* ################# set aliases */
  ICONS["feUserName"] = ICONS["User"];
  ICONS["fePasswordCheck"] = ICONS["fePassword"];
  ICONS["feFirstName"] = ICONS["placeholder"];
  ICONS["feLastName"] = ICONS["placeholder"];
  ICONS["feActivity Name"] = ICONS["Activities"];
  ICONS["feFrom Date"] = ICONS["feDate"];
  ICONS["feTo Date"] = ICONS["feDate"];
  ICONS["feLimit Count"] = ICONS["placeholder"];
  return ( <svg className = {
      "icon-svg"
    } //" + props.name.toLowerCase().replace(" ","")}
    style = {
      {
        fill: props.color
      }
    }
    viewBox = {
      ICONS[props.name].viewBox
    } >
    <path d = {
      ICONS[props.name].path
    }
    /> </svg>
  );
};

export default SvgIcon;