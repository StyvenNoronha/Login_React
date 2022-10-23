import { SVGAttributes} from "react"

interface LogoProps extends SVGAttributes<HTMLOrSVGElement>{}


 export function Logo(props: LogoProps) {
  return (
    <svg
      width={124}
      height={120}
      viewBox="0 0 124 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M101.443 60.043c0-5.503-6.478-10.383-16.438-13.362 2.396-10.12 1.35-18.17-3.418-20.894a7.628 7.628 0 00-3.826-.959c-4.449 0-10.072 3.107-15.75 8.483-5.68-5.336-11.286-8.427-15.727-8.427a7.556 7.556 0 00-3.881.975c-4.745 2.731-5.727 10.734-3.363 20.806-9.912 2.963-16.357 7.803-16.373 13.282-.016 5.48 6.485 10.383 16.445 13.355-2.396 10.127-1.358 18.17 3.418 20.894a7.516 7.516 0 003.818.958c4.457 0 10.08-3.107 15.758-8.482 5.671 5.335 11.278 8.426 15.727 8.426a7.66 7.66 0 003.882-.974c4.744-2.732 5.718-10.735 3.362-20.766 9.912-3.004 16.358-7.844 16.366-13.315zM65.669 35.116c6.541-5.855 10.63-6.486 12.084-6.486a3.763 3.763 0 011.933.463c2.284 1.302 3.195 5.895 2.468 11.981a45.333 45.333 0 01-.799 4.625 78.019 78.019 0 00-10.047-1.654 78.645 78.645 0 00-6.582-8.05c.296-.296.615-.592.943-.88zm-19.8 29.456a107.708 107.708 0 001.973 3.602 63.01 63.01 0 002.204 3.634 75.219 75.219 0 01-6.262-1.166c.56-2.029 1.27-4.026 2.085-6.07zm-2.212-15.208a70.27 70.27 0 016.333-1.166c-.799 1.182-1.485 2.396-2.204 3.666-.719 1.27-1.35 2.397-1.965 3.61a93.992 93.992 0 01-2.164-6.11zm4.16 10.655a95.55 95.55 0 013.267-6.278 92.963 92.963 0 013.81-6.078 91.35 91.35 0 017.189-.263c2.468.008 4.792.096 7.1.28 1.326 1.932 2.596 3.993 3.794 6.03a80.8 80.8 0 013.29 6.253 90.221 90.221 0 01-3.258 6.27 90.692 90.692 0 01-3.81 6.086 91.28 91.28 0 01-7.188.272c-2.468 0-4.793-.104-7.1-.288a89.69 89.69 0 01-3.803-6.03c-1.198-2.085-2.26-4.17-3.258-6.254h-.032zm26.246-11.797a70.96 70.96 0 016.262 1.158 71.622 71.622 0 01-2.109 6.03 108.047 108.047 0 00-1.98-3.601c-.695-1.206-1.43-2.42-2.141-3.587h-.032zm2.204 19.904a105.468 105.468 0 001.965-3.618c.799 2.077 1.598 4.121 2.157 6.118-2.09.483-4.2.87-6.326 1.158a72.697 72.697 0 002.236-3.658h-.032zM62.027 38.71a70.093 70.093 0 014.233 4.976 102.128 102.128 0 00-4.177-.096c-1.414 0-2.86 0-4.258.096a67.521 67.521 0 014.202-4.976zm-17.715-9.585a3.848 3.848 0 011.972-.447c1.44.06 2.85.416 4.145 1.046a31.206 31.206 0 017.987 5.416l.935.854a78.648 78.648 0 00-6.517 7.987c-3.4.33-6.775.88-10.104 1.646-.351-1.55-.639-3.067-.799-4.529-.83-6.03.128-10.63 2.373-11.94l.008-.033zM40.086 69.62a46.943 46.943 0 01-4.425-1.598c-5.67-2.396-9.184-5.47-9.184-8.099 0-2.627 3.53-5.686 9.192-8.043a46.04 46.04 0 014.346-1.55 78.215 78.215 0 003.642 9.697 78.855 78.855 0 00-3.57 9.593zm18.37 15.255c-6.54 5.854-10.63 6.477-12.092 6.477a3.747 3.747 0 01-1.933-.463c-2.284-1.302-3.194-5.894-2.468-11.98a44.78 44.78 0 01.799-4.617 79.494 79.494 0 0010.048 1.645 77.613 77.613 0 006.58 8.051l-.934.887zm3.65-3.602a72.346 72.346 0 01-4.24-4.976c1.373.064 2.77.096 4.185.096 1.413 0 2.859 0 4.257-.088a76.26 76.26 0 01-4.21 4.968h.008zm17.716 9.584a3.849 3.849 0 01-1.981.471c-1.454 0-5.591-.639-12.108-6.47l-.935-.854a78.628 78.628 0 006.51-7.987 77.451 77.451 0 0010.111-1.645c.352 1.55.631 3.067.799 4.528.79 6.023-.128 10.623-2.404 11.925l.008.032zm8.626-22.715a48.385 48.385 0 01-4.345 1.541 78.71 78.71 0 00-3.65-9.696 78.353 78.353 0 003.586-9.584c1.5.458 2.977.991 4.425 1.597 5.662 2.396 9.185 5.471 9.177 8.099-.008 2.628-3.53 5.655-9.201 8.011l.008.032zm-26.421-.815a7.332 7.332 0 10-7.324-7.34 7.324 7.324 0 007.324 7.34zM13.306 15.803v88.376h97.497V15.803H13.306zm93.687 84.575h-89.87V19.613h89.87v80.765zm-67.89-27.076c-2.395 10.127-1.357 18.17 3.42 20.894a7.516 7.516 0 003.817.958c4.457 0 10.08-3.107 15.758-8.482 5.671 5.335 11.278 8.426 15.727 8.426a7.66 7.66 0 003.882-.974c4.744-2.732 5.718-10.735 3.362-20.766 9.912-2.972 16.358-7.812 16.366-13.283.008-5.471-6.478-10.383-16.438-13.362 2.396-10.12 1.35-18.17-3.418-20.894a7.627 7.627 0 00-3.826-.959c-4.449 0-10.072 3.107-15.75 8.483-5.68-5.336-11.286-8.427-15.727-8.427a7.556 7.556 0 00-3.881.975c-4.745 2.731-5.727 10.734-3.363 20.806C29.12 49.66 22.675 54.5 22.66 59.979c-.016 5.48 6.493 10.335 16.453 13.323h-.008zM58.44 84.875c-6.54 5.854-10.63 6.477-12.092 6.477a3.747 3.747 0 01-1.933-.463c-2.284-1.302-3.194-5.894-2.468-11.98a44.78 44.78 0 01.799-4.617 79.493 79.493 0 0010.048 1.645 77.613 77.613 0 006.581 8.051l-.934.887zm19.8-29.464a108.047 108.047 0 00-1.98-3.602c-.695-1.206-1.438-2.397-2.173-3.587 2.172.304 4.273.695 6.262 1.158a68.772 68.772 0 01-2.1 6.03h-.009zm2.173 15.175c-2.09.483-4.2.87-6.326 1.158a92.256 92.256 0 002.204-3.658 88.028 88.028 0 001.965-3.618c.839 2.117 1.566 4.145 2.14 6.158l.017-.04zM76.25 59.923a90.199 90.199 0 01-3.258 6.27 90.6 90.6 0 01-3.81 6.086 91.28 91.28 0 01-7.188.272c-2.468 0-4.792-.104-7.1-.288a89.69 89.69 0 01-3.803-6.03 94.238 94.238 0 01-3.29-6.254 95.524 95.524 0 013.267-6.277 92.907 92.907 0 013.81-6.079 91.346 91.346 0 017.188-.263c2.468.008 4.792.096 7.1.28 1.326 1.932 2.596 3.993 3.794 6.03 1.198 2.036 2.308 4.209 3.299 6.293l-.009-.04zM50.046 71.808a75.219 75.219 0 01-6.262-1.166 72.754 72.754 0 012.117-6.03 107.708 107.708 0 001.973 3.602c.687 1.206 1.373 2.388 2.172 3.594zM47.818 51.84a72.366 72.366 0 00-1.965 3.61 80.35 80.35 0 01-2.197-6.086 70.27 70.27 0 016.334-1.166 121.731 121.731 0 00-2.172 3.642zm14.28 29.433a72.346 72.346 0 01-4.24-4.976c1.373.064 2.77.096 4.185.096 1.413 0 2.859 0 4.257-.088a73.775 73.775 0 01-4.201 4.968zm17.716 9.584a3.849 3.849 0 01-1.981.471c-1.454 0-5.591-.639-12.108-6.47l-.935-.854a78.629 78.629 0 006.51-7.987 77.453 77.453 0 0010.111-1.645c.352 1.55.631 3.067.799 4.528.799 6.023-.12 10.623-2.396 11.925v.032zm4.217-40.462c1.5.458 2.977.991 4.425 1.597 5.662 2.396 9.185 5.471 9.177 8.1-.008 2.627-3.522 5.718-9.193 8.074a48.374 48.374 0 01-4.345 1.541 78.71 78.71 0 00-3.65-9.696 78.363 78.363 0 003.586-9.648v.032zM65.66 35.148c6.541-5.855 10.63-6.486 12.084-6.486a3.761 3.761 0 011.933.463c2.284 1.302 3.195 5.895 2.468 11.98a45.296 45.296 0 01-.799 4.625A78.035 78.035 0 0071.3 44.077a78.66 78.66 0 00-6.582-8.05c.304-.328.623-.624.95-.911l-.007.032zm-3.634 3.562a70.093 70.093 0 014.233 4.976 102.128 102.128 0 00-4.177-.096c-1.414 0-2.86 0-4.258.096a67.521 67.521 0 014.202-4.976zm-17.715-9.585a3.848 3.848 0 011.972-.447c1.44.06 2.85.416 4.145 1.046a31.206 31.206 0 017.987 5.416l.935.854a78.648 78.648 0 00-6.517 7.987c-3.4.33-6.775.88-10.104 1.646-.351-1.55-.639-3.067-.799-4.529-.83-6.03.128-10.63 2.373-11.94l.008-.033zM35.67 51.88a46.04 46.04 0 014.344-1.55 78.215 78.215 0 003.642 9.697 78.855 78.855 0 00-3.586 9.585 46.943 46.943 0 01-4.424-1.598c-5.671-2.396-9.186-5.47-9.186-8.099 0-2.627 3.547-5.678 9.21-8.035zm26.357.8a7.332 7.332 0 107.324 7.34 7.323 7.323 0 00-7.324-7.38v.04zm0 0a7.332 7.332 0 107.324 7.34 7.323 7.323 0 00-7.324-7.38v.04zm0 0a7.332 7.332 0 107.324 7.34 7.323 7.323 0 00-7.324-7.38v.04zm39.416 7.38c0-5.504-6.478-10.384-16.438-13.363 2.396-10.12 1.35-18.17-3.418-20.894a7.628 7.628 0 00-3.826-.959c-4.449 0-10.072 3.107-15.75 8.483C56.33 27.99 50.725 24.9 46.284 24.9a7.556 7.556 0 00-3.881.975c-4.745 2.731-5.727 10.734-3.363 20.806-9.912 2.963-16.357 7.803-16.373 13.282-.016 5.48 6.485 10.383 16.445 13.354-2.396 10.128-1.358 18.171 3.418 20.895a7.516 7.516 0 003.818.958c4.457 0 10.08-3.107 15.758-8.482 5.671 5.335 11.278 8.426 15.727 8.426a7.66 7.66 0 003.882-.974c4.744-2.732 5.718-10.735 3.362-20.767 9.912-3.019 16.358-7.859 16.366-13.33v.016zM65.669 35.115c6.541-5.855 10.63-6.486 12.084-6.486a3.763 3.763 0 011.933.463c2.284 1.302 3.195 5.895 2.468 11.981a45.333 45.333 0 01-.799 4.625 78.019 78.019 0 00-10.047-1.654 78.645 78.645 0 00-6.582-8.05c.296-.296.615-.592.943-.88zm-19.8 29.456a107.708 107.708 0 001.973 3.602 63.01 63.01 0 002.204 3.634 75.219 75.219 0 01-6.262-1.166c.56-2.029 1.27-4.026 2.085-6.07zm-2.212-15.208a70.27 70.27 0 016.333-1.166c-.799 1.182-1.485 2.396-2.204 3.666-.719 1.27-1.35 2.397-1.965 3.61a93.992 93.992 0 01-2.164-6.11zm4.16 10.655a95.55 95.55 0 013.267-6.278 92.963 92.963 0 013.81-6.078 91.35 91.35 0 017.189-.263c2.468.008 4.792.096 7.1.28 1.326 1.932 2.596 3.993 3.794 6.03a80.8 80.8 0 013.29 6.253 90.221 90.221 0 01-3.258 6.27 90.692 90.692 0 01-3.81 6.086 91.28 91.28 0 01-7.188.272c-2.468 0-4.793-.104-7.1-.288a89.69 89.69 0 01-3.803-6.03c-1.198-2.085-2.26-4.17-3.258-6.254h-.032zm26.246-11.797a70.96 70.96 0 016.262 1.158 71.622 71.622 0 01-2.109 6.03 108.047 108.047 0 00-1.98-3.601c-.695-1.206-1.43-2.42-2.141-3.587h-.032zm2.204 19.904a105.468 105.468 0 001.965-3.618c.799 2.077 1.598 4.121 2.157 6.118-2.09.483-4.2.87-6.326 1.158a72.697 72.697 0 002.236-3.658h-.032zM62.027 38.71a70.093 70.093 0 014.233 4.976 102.128 102.128 0 00-4.177-.096c-1.414 0-2.86 0-4.258.096a67.521 67.521 0 014.202-4.976zm-17.715-9.585a3.848 3.848 0 011.972-.447c1.44.06 2.85.416 4.145 1.046a31.206 31.206 0 017.987 5.416l.935.854a78.648 78.648 0 00-6.517 7.987c-3.4.33-6.775.88-10.104 1.646-.351-1.55-.639-3.067-.799-4.529-.83-6.03.128-10.63 2.373-11.94l.008-.033zM40.086 69.62a46.943 46.943 0 01-4.425-1.598c-5.67-2.396-9.184-5.47-9.184-8.099 0-2.627 3.53-5.686 9.192-8.043a46.04 46.04 0 014.346-1.55 78.215 78.215 0 003.642 9.697 78.855 78.855 0 00-3.57 9.593zm18.37 15.255c-6.54 5.854-10.63 6.477-12.092 6.477a3.747 3.747 0 01-1.933-.463c-2.284-1.302-3.194-5.894-2.468-11.98a44.78 44.78 0 01.799-4.617 79.494 79.494 0 0010.048 1.645 77.613 77.613 0 006.58 8.051l-.934.887zm3.65-3.602a72.346 72.346 0 01-4.24-4.976c1.373.064 2.77.096 4.185.096 1.413 0 2.859 0 4.257-.088a76.26 76.26 0 01-4.21 4.968h.008zm17.716 9.584a3.849 3.849 0 01-1.981.471c-1.454 0-5.591-.639-12.108-6.47l-.935-.854a78.628 78.628 0 006.51-7.987 77.451 77.451 0 0010.111-1.645c.352 1.55.631 3.067.799 4.528.79 6.023-.128 10.623-2.404 11.925l.008.032zm8.626-22.715a48.385 48.385 0 01-4.345 1.541 78.71 78.71 0 00-3.65-9.696 78.353 78.353 0 003.586-9.584c1.5.458 2.977.991 4.425 1.597 5.662 2.396 9.185 5.471 9.177 8.099-.008 2.628-3.53 5.655-9.201 8.011l.008.032zm-26.421-.815a7.332 7.332 0 10-7.324-7.34 7.324 7.324 0 007.324 7.34zM6.66 110.856V22.448l-3.826 3.834v88.384h97.481l3.818-3.81H6.661z"
        fill="#09D3AC"
      />
    </svg>
  )
}

