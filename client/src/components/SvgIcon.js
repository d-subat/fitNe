import React from "react";

const SvgIcon = props => {
  const ICONS = {
    Profile: {
      viewBox: "0 0 24 24",
      path:
        "M12 0c6.629 0 12 5.371 12 12 0 6.589-5.344 12-12 12-6.643 0-12-5.397-12-12 0-6.629 5.371-12 12-12zM20.29 18.094c1.246-1.714 1.996-3.817 1.996-6.094 0-5.665-4.621-10.286-10.286-10.286s-10.286 4.621-10.286 10.286c0 2.277 0.75 4.379 1.996 6.094 0.482-2.397 1.647-4.379 4.098-4.379 1.085 1.058 2.558 1.714 4.192 1.714s3.107-0.656 4.192-1.714c2.451 0 3.616 1.982 4.098 4.379zM17.143 9.429c0-2.839-2.304-5.143-5.143-5.143s-5.143 2.304-5.143 5.143 2.304 5.143 5.143 5.143 5.143-2.304 5.143-5.143z"
    },
    "Stats Panel": {
      viewBox: "0 0 24 24",
      path:
        "M8.571 12v6.857h-3.429v-6.857h3.429zM13.714 5.143v13.714h-3.429v-13.714h3.429zM27.429 20.571v1.714h-27.429v-20.571h1.714v18.857h25.714zM18.857 8.571v10.286h-3.429v-10.286h3.429zM24 3.429v15.429h-3.429v-15.429h3.429z"
    },
    Activities: {
      viewBox: "0 0 24 24",
      path:
        "M22.286 13.996v-8.25c-1.071 0.576-2.571 1.219-4.098 1.219v0c-0.71 0-1.366-0.134-1.942-0.429-1.433-0.71-2.987-1.393-4.848-1.393-1.728 0-3.844 0.844-5.397 1.701v8.022c1.768-0.817 4.018-1.513 5.799-1.513 2.063 0 3.402 0.683 4.835 1.393l0.375 0.188c0.375 0.188 0.83 0.295 1.353 0.295 1.487 0 3.094-0.79 3.924-1.232zM4.286 3.429c0 0.629-0.348 1.179-0.857 1.473v16.955c0 0.241-0.188 0.429-0.429 0.429h-0.857c-0.241 0-0.429-0.188-0.429-0.429v-16.955c-0.509-0.295-0.857-0.844-0.857-1.473 0-0.951 0.763-1.714 1.714-1.714s1.714 0.763 1.714 1.714zM24 4.286v10.219c0 0.321-0.188 0.616-0.469 0.763-0.054 0.027-0.134 0.067-0.228 0.121-0.857 0.455-2.879 1.554-4.942 1.554-0.79 0-1.5-0.161-2.116-0.469l-0.375-0.188c-1.353-0.683-2.424-1.219-4.071-1.219-1.929 0-4.647 1.004-6.214 1.955-0.134 0.080-0.295 0.121-0.442 0.121s-0.295-0.040-0.429-0.107c-0.268-0.161-0.429-0.442-0.429-0.75v-9.937c0-0.295 0.161-0.576 0.415-0.737 0.857-0.509 3.884-2.183 6.696-2.183 2.237 0 4.058 0.817 5.598 1.567 0.348 0.174 0.75 0.254 1.192 0.254 1.58 0 3.321-1.004 4.152-1.5 0.174-0.094 0.321-0.174 0.415-0.228 0.268-0.134 0.576-0.121 0.83 0.027 0.254 0.161 0.415 0.442 0.415 0.737z"
    },
    Exercises: {
      viewBox: "0 0 24 24",
      path:
        "M20.571 3.429c0.938 0 1.714 0.777 1.714 1.714v17.143c0 0.938-0.777 1.714-1.714 1.714h-18.857c-0.938 0-1.714-0.777-1.714-1.714v-17.143c0-0.938 0.777-1.714 1.714-1.714h1.714v-1.286c0-1.179 0.964-2.143 2.143-2.143h0.857c1.179 0 2.143 0.964 2.143 2.143v1.286h5.143v-1.286c0-1.179 0.964-2.143 2.143-2.143h0.857c1.179 0 2.143 0.964 2.143 2.143v1.286h1.714zM15.429 2.143v3.857c0 0.241 0.188 0.429 0.429 0.429h0.857c0.241 0 0.429-0.188 0.429-0.429v-3.857c0-0.241-0.188-0.429-0.429-0.429h-0.857c-0.241 0-0.429 0.188-0.429 0.429zM5.143 2.143v3.857c0 0.241 0.188 0.429 0.429 0.429h0.857c0.241 0 0.429-0.188 0.429-0.429v-3.857c0-0.241-0.188-0.429-0.429-0.429h-0.857c-0.241 0-0.429 0.188-0.429 0.429zM20.571 22.286v-13.714h-18.857v13.714h18.857zM12 14.571h3c0.241 0 0.429 0.188 0.429 0.429v0.857c0 0.241-0.188 0.429-0.429 0.429h-3v3c0 0.241-0.188 0.429-0.429 0.429h-0.857c-0.241 0-0.429-0.188-0.429-0.429v-3h-3c-0.241 0-0.429-0.188-0.429-0.429v-0.857c0-0.241 0.188-0.429 0.429-0.429h3v-3c0-0.241 0.188-0.429 0.429-0.429h0.857c0.241 0 0.429 0.188 0.429 0.429v3z"
    },
    "Exercise Logs": {
      viewBox: "0 0 24 24",
      path:
        "M17.451 12.911l-6.857 6.857c-0.174 0.161-0.442 0.161-0.616 0l-3.857-3.857c-0.161-0.174-0.161-0.442 0-0.603l0.616-0.616c0.161-0.161 0.429-0.161 0.603 0l2.946 2.946 5.946-5.946c0.174-0.161 0.442-0.161 0.603 0l0.616 0.616c0.161 0.161 0.161 0.429 0 0.603zM1.714 22.286h18.857v-13.714h-18.857v13.714zM6.857 6v-3.857c0-0.241-0.188-0.429-0.429-0.429h-0.857c-0.241 0-0.429 0.188-0.429 0.429v3.857c0 0.241 0.188 0.429 0.429 0.429h0.857c0.241 0 0.429-0.188 0.429-0.429zM17.143 6v-3.857c0-0.241-0.188-0.429-0.429-0.429h-0.857c-0.241 0-0.429 0.188-0.429 0.429v3.857c0 0.241 0.188 0.429 0.429 0.429h0.857c0.241 0 0.429-0.188 0.429-0.429zM22.286 5.143v17.143c0 0.938-0.777 1.714-1.714 1.714h-18.857c-0.938 0-1.714-0.777-1.714-1.714v-17.143c0-0.938 0.777-1.714 1.714-1.714h1.714v-1.286c0-1.179 0.964-2.143 2.143-2.143h0.857c1.179 0 2.143 0.964 2.143 2.143v1.286h5.143v-1.286c0-1.179 0.964-2.143 2.143-2.143h0.857c1.179 0 2.143 0.964 2.143 2.143v1.286h1.714c0.938 0 1.714 0.777 1.714 1.714z"
    },
    Settings: {
      viewBox: "0 0 24 24",
      path:
        "M12 15.516c1.922 0 3.516-1.594 3.516-3.516s-1.594-3.516-3.516-3.516-3.516 1.594-3.516 3.516 1.594 3.516 3.516 3.516zM19.453 12.984l2.109 1.641c0.188 0.141 0.234 0.422 0.094 0.656l-2.016 3.469c-0.141 0.234-0.375 0.281-0.609 0.188l-2.484-0.984c-0.516 0.375-1.078 0.75-1.688 0.984l-0.375 2.625c-0.047 0.234-0.234 0.422-0.469 0.422h-4.031c-0.234 0-0.422-0.188-0.469-0.422l-0.375-2.625c-0.609-0.234-1.172-0.563-1.688-0.984l-2.484 0.984c-0.234 0.094-0.469 0.047-0.609-0.188l-2.016-3.469c-0.141-0.234-0.094-0.516 0.094-0.656l2.109-1.641c-0.047-0.328-0.047-0.656-0.047-0.984s0-0.656 0.047-0.984l-2.109-1.641c-0.188-0.141-0.234-0.422-0.094-0.656l2.016-3.469c0.141-0.234 0.375-0.281 0.609-0.188l2.484 0.984c0.516-0.375 1.078-0.75 1.688-0.984l0.375-2.625c0.047-0.234 0.234-0.422 0.469-0.422h4.031c0.234 0 0.422 0.188 0.469 0.422l0.375 2.625c0.609 0.234 1.172 0.563 1.688 0.984l2.484-0.984c0.234-0.094 0.469-0.047 0.609 0.188l2.016 3.469c0.141 0.234 0.094 0.516-0.094 0.656l-2.109 1.641c0.047 0.328 0.047 0.656 0.047 0.984s0 0.656-0.047 0.984z"
    },
    User: {
      viewBox: "0 0 24 24",
      path:"M12 0c6.629 0 12 5.371 12 12 0 6.589-5.344 12-12 12-6.643 0-12-5.397-12-12 0-6.629 5.371-12 12-12zM20.29 18.094c1.246-1.714 1.996-3.817 1.996-6.094 0-5.665-4.621-10.286-10.286-10.286s-10.286 4.621-10.286 10.286c0 2.277 0.75 4.379 1.996 6.094 0.482-2.397 1.647-4.379 4.098-4.379 1.085 1.058 2.558 1.714 4.192 1.714s3.107-0.656 4.192-1.714c2.451 0 3.616 1.982 4.098 4.379zM17.143 9.429c0-2.839-2.304-5.143-5.143-5.143s-5.143 2.304-5.143 5.143 2.304 5.143 5.143 5.143 5.143-2.304 5.143-5.143z"
    },
    Map: {
      viewBox: "0 0 24 24",
      path:
        "M23.24 21.722l-1.64-4.922h-1.8l1 4.8h-17.599l1-4.8h-1.8l-1.642 4.922c-0.416 1.253 0.322 2.278 1.642 2.278h19.2c1.32 0 2.058-1.025 1.64-2.278zM18 6c0-3.313-2.686-6-6-6s-6 2.687-6 6c0 5.73 6 12 6 12s6-6.27 6-12zM8.76 6.072c0-1.789 1.45-3.239 3.24-3.239s3.24 1.45 3.24 3.239c0 1.79-1.451 3.24-3.24 3.24s-3.24-1.451-3.24-3.24z"
    },
    Record: {
      viewBox: "0 0 24 24",
      path:
        "M18 12.001c0 0.359-0.366 0.617-0.366 0.617l-10.273 6.364c-0.749 0.491-1.361 0.127-1.361-0.803v-12.356c0-0.932 0.612-1.294 1.362-0.804l10.273 6.366c-0.001 0 0.365 0.258 0.365 0.617z"
    },
    Stop: {
      viewBox: "0 0 24 24",
      path:
        "M19.2 5.994v11.77c0 0.793-0.643 1.436-1.435 1.436h-11.768c-0.661 0-1.196-0.535-1.196-1.196v-11.768c0-0.792 0.643-1.435 1.435-1.435h11.77c0.66 0 1.195 0.535 1.195 1.194z"
    },
    Reset: {
      viewBox: "0 0 24 24",
      path:
        "M6.857 9.857v7.714c0 0.241-0.188 0.429-0.429 0.429h-0.857c-0.241 0-0.429-0.188-0.429-0.429v-7.714c0-0.241 0.188-0.429 0.429-0.429h0.857c0.241 0 0.429 0.188 0.429 0.429zM10.286 9.857v7.714c0 0.241-0.188 0.429-0.429 0.429h-0.857c-0.241 0-0.429-0.188-0.429-0.429v-7.714c0-0.241 0.188-0.429 0.429-0.429h0.857c0.241 0 0.429 0.188 0.429 0.429zM13.714 9.857v7.714c0 0.241-0.188 0.429-0.429 0.429h-0.857c-0.241 0-0.429-0.188-0.429-0.429v-7.714c0-0.241 0.188-0.429 0.429-0.429h0.857c0.241 0 0.429 0.188 0.429 0.429zM15.429 19.554v-12.696h-12v12.696c0 0.643 0.362 1.018 0.429 1.018h11.143c0.067 0 0.429-0.375 0.429-1.018zM6.429 5.143h6l-0.643-1.567c-0.040-0.054-0.161-0.134-0.228-0.147h-4.246c-0.080 0.013-0.188 0.094-0.228 0.147zM18.857 5.571v0.857c0 0.241-0.188 0.429-0.429 0.429h-1.286v12.696c0 1.473-0.964 2.732-2.143 2.732h-11.143c-1.179 0-2.143-1.205-2.143-2.679v-12.75h-1.286c-0.241 0-0.429-0.188-0.429-0.429v-0.857c0-0.241 0.188-0.429 0.429-0.429h4.138l0.938-2.237c0.268-0.656 1.071-1.192 1.781-1.192h4.286c0.71 0 1.513 0.536 1.781 1.192l0.938 2.237h4.138c0.241 0 0.429 0.188 0.429 0.429z"
    },

    facebook: {
      viewBox: "0 0 90 90",
      path:
        "M90,15.001C90,7.119,82.884,0,75,0H15C7.116,0,0,7.119,0,15.001v59.998   C0,82.881,7.116,90,15.001,90H45V56H34V41h11v-5.844C45,25.077,52.568,16,61.875,16H74v15H61.875C60.548,31,59,32.611,59,35.024V41   h15v15H59v34h16c7.884,0,15-7.119,15-15.001V15.001z"
    },
    google: {
      viewBox: "0 0 50 50",
      path:
        "M 25.996094 48 C 13.3125 48 2.992188 37.683594 2.992188 25 C 2.992188 12.316406 13.3125 2 25.996094 2 C 31.742188 2 37.242188 4.128906 41.488281 7.996094 L 42.261719 8.703125 L 34.675781 16.289063 L 33.972656 15.6875 C 31.746094 13.78125 28.914063 12.730469 25.996094 12.730469 C 19.230469 12.730469 13.722656 18.234375 13.722656 25 C 13.722656 31.765625 19.230469 37.269531 25.996094 37.269531 C 30.875 37.269531 34.730469 34.777344 36.546875 30.53125 L 24.996094 30.53125 L 24.996094 20.175781 L 47.546875 20.207031 L 47.714844 21 C 48.890625 26.582031 47.949219 34.792969 43.183594 40.667969 C 39.238281 45.53125 33.457031 48 25.996094 48 Z "
    },
    twitter: {
      viewBox: "0 0 24 24",
      path:
        "M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"
    },
    github: {
      viewBox: "0 0 24 24",
      path:
        "M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
    }
  };

  return (
    <svg
      className={"icon-svg"} //" + props.name.toLowerCase().replace(" ","")}
      style={{
        fill: props.color
      }}
      viewBox={ICONS[props.name].viewBox}
    >
      <path d={ICONS[props.name].path} />
    </svg>
  );
};

export default SvgIcon;
