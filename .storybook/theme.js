import { create } from '@storybook/theming';

export default create({
  base: 'light',
  brandTitle: 'ratenkauf by easyCredit Web-Components',
  brandUrl: 'https://easycredit-ratenkauf.de',
  brandImage: `data:image/svg+xml,%3Csvg width='138' height='31' viewBox='0 0 138 31' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M3.40041 8.67992V6.70913H0V17.0323H3.40041V13.7946C3.40041 11.12 4.69352 9.94686 7.08817 9.94686H7.71078L7.85446 6.66221C7.61499 6.61528 7.37553 6.56836 7.08817 6.56836C5.31613 6.56836 4.16669 7.45991 3.40041 8.67992Z' fill='%230066B3'%3E%3C/path%3E%3Cpath d='M16.7632 7.50703C15.9491 6.80317 14.8475 6.38086 13.4586 6.38086C10.6329 6.38086 8.23828 8.58628 8.23828 11.8709C8.23828 15.1556 10.6329 17.361 13.4586 17.361C14.8475 17.361 15.9491 16.9387 16.7632 16.2348V17.0795H20.1636V6.75625H16.7632V7.50703ZM14.177 14.5456C12.6923 14.5456 11.5908 13.4663 11.5908 11.8709C11.5908 10.2755 12.6923 9.19628 14.177 9.19628C15.5659 9.19628 16.8111 10.2755 16.8111 11.8709C16.7632 13.4663 15.5659 14.5456 14.177 14.5456Z' fill='%230066B3'%3E%3C/path%3E%3Cpath d='M27.9209 14.4057C27.0109 14.4057 26.4841 13.9834 26.4841 12.9041V9.33793H29.645V6.7102H26.4841V3.66016H23.0837V6.7102H21.168V9.33793H23.0837V13.2326C23.0837 15.9542 24.6642 17.3619 27.3462 17.3619C28.5435 17.3619 29.4056 17.0334 30.2676 16.6111L29.5014 14.0303C29.0224 14.218 28.3519 14.4057 27.9209 14.4057Z' fill='%230066B3'%3E%3C/path%3E%3Cpath d='M36.1123 6.38086C32.9993 6.38086 30.4609 8.58628 30.4609 11.8709C30.4609 15.1556 32.9993 17.361 36.1123 17.361C38.5549 17.361 40.4706 16.3287 41.3806 14.1233L38.3633 13.5133C37.7886 14.4987 36.8786 14.6864 36.1123 14.6864C34.9629 14.6864 34.1008 13.9356 33.8135 12.6686H41.62V11.824C41.5721 8.49243 39.1296 6.38086 36.1123 6.38086ZM33.8613 10.6978C34.1966 9.66552 35.1545 9.05551 36.1123 9.05551C37.0702 9.05551 37.9323 9.57167 38.2675 10.6978H33.8613Z' fill='%230066B3'%3E%3C/path%3E%3Cpath d='M49.7138 6.38086C48.3728 6.38086 47.2712 6.8501 46.457 7.69472V6.70933H43.0566V17.0325H46.457V12.2463C46.457 10.2286 47.3191 9.38398 48.6601 9.38398C49.7617 9.38398 50.4801 10.2286 50.4801 11.4017V17.0325H53.8805V10.6978C53.8805 8.11704 52.2042 6.38086 49.7138 6.38086Z' fill='%230066B3'%3E%3C/path%3E%3Cpath d='M66.8585 6.71171H62.7397L59.3871 10.231H58.9082V2.20703H55.5078V17.0349H58.9082V13.328H59.5308L62.9791 17.0349H67.3374L62.1649 11.6387L66.8585 6.71171Z' fill='%230066B3'%3E%3C/path%3E%3Cpath d='M75.0484 7.50703C74.2342 6.80317 73.1327 6.38086 71.7438 6.38086C68.9181 6.38086 66.5234 8.58628 66.5234 11.8709C66.5234 15.1556 68.9181 17.361 71.7438 17.361C73.1327 17.361 74.2342 16.9387 75.0484 16.2348V17.0795H78.4488V6.75625H75.0484V7.50703ZM72.4143 14.5456C70.9296 14.5456 69.8281 13.4663 69.8281 11.8709C69.8281 10.2755 70.9296 9.19628 72.4143 9.19628C73.8032 9.19628 75.0484 10.2755 75.0484 11.8709C75.0484 13.4663 73.8032 14.5456 72.4143 14.5456Z' fill='%230066B3'%3E%3C/path%3E%3Cpath d='M87.4527 11.4952C87.4527 13.5129 86.5906 14.3575 85.2496 14.3575C84.1481 14.3575 83.4297 13.5129 83.4297 12.3398V6.70898H80.0293V13.0437C80.0293 15.6245 81.7056 17.3607 84.1481 17.3607C85.4891 17.3607 86.5906 16.8914 87.4048 16.0468V17.0322H90.8052V6.70898H87.4048V11.4952H87.4527Z' fill='%230066B3'%3E%3C/path%3E%3Cpath d='M96.7435 6.05502C96.7435 5.21039 97.3182 4.74115 98.1324 4.74115C98.3719 4.74115 98.7071 4.78808 99.0424 4.92885L99.7608 2.39497C99.0903 2.11343 98.3719 1.97266 97.6535 1.97266C95.0673 1.97266 93.3431 3.52114 93.3431 5.96117V6.75887H91.8105V9.3866H93.3431V17.0821H96.7435V9.29275H99.665V6.66503H96.7435V6.05502Z' fill='%230066B3'%3E%3C/path%3E%3Cpath d='M32.664 23.4143C31.9935 23.4143 31.4188 23.6019 31.0356 23.9773V21.3496H29.3594V28.6697H31.0356V28.2474C31.4667 28.6228 31.9935 28.8105 32.664 28.8105C34.0529 28.8105 35.2023 27.7312 35.2023 26.1358C35.2023 24.5404 34.0529 23.4143 32.664 23.4143ZM32.2809 27.4497C31.6103 27.4497 30.9877 26.9335 30.9877 26.1358C30.9877 25.3381 31.6103 24.822 32.2809 24.822C32.9992 24.822 33.5261 25.3381 33.5261 26.1358C33.574 26.9335 33.0471 27.4497 32.2809 27.4497Z' fill='%230066B3'%3E%3C/path%3E%3Cpath d='M38.2184 26.5578L36.9732 23.5547H35.2012L37.3564 28.4817L36.4943 30.4056H38.3142L41.3315 23.5547H39.5594L38.2184 26.5578Z' fill='%230066B3'%3E%3C/path%3E%3Cpath d='M47.0786 23.4141C45.546 23.4141 44.3008 24.4933 44.3008 26.0887C44.3008 27.6841 45.546 28.7634 47.0786 28.7634C48.2759 28.7634 49.2338 28.2472 49.6648 27.168L48.1801 26.8864C47.8928 27.4026 47.4617 27.4964 47.0786 27.4964C46.5039 27.4964 46.0728 27.121 45.9291 26.511H49.7606V26.0887C49.7606 24.4464 48.5633 23.4141 47.0786 23.4141ZM45.977 25.5256C46.1207 25.0095 46.5996 24.7279 47.0786 24.7279C47.5575 24.7279 47.9885 24.9625 48.1322 25.5256H45.977Z' fill='%230066B3'%3E%3C/path%3E%3Cpath d='M54.5026 23.9771C54.0716 23.6018 53.5448 23.4141 52.8743 23.4141C51.4854 23.4141 50.3359 24.4933 50.3359 26.0887C50.3359 27.6841 51.4854 28.7634 52.8743 28.7634C53.5448 28.7634 54.1195 28.5757 54.5026 28.2003V28.6695H56.1789V23.6018H54.5026V23.9771ZM53.2095 27.4495C52.4911 27.4495 51.9643 26.9333 51.9643 26.1356C51.9643 25.3379 52.4911 24.8218 53.2095 24.8218C53.88 24.8218 54.5026 25.3379 54.5026 26.1356C54.5026 26.9333 53.88 27.4495 53.2095 27.4495Z' fill='%230066B3'%3E%3C/path%3E%3Cpath d='M60.3457 25.5725L59.1005 25.3379C58.7652 25.244 58.7174 25.1033 58.7174 24.9625C58.7174 24.7748 58.861 24.5871 59.2921 24.5871C59.8189 24.5871 60.1063 24.8686 60.1541 25.1971L61.6867 24.9156C61.4952 24.024 60.6331 23.4609 59.2921 23.4609C57.9511 23.4609 57.0411 24.1179 57.0411 25.1971C57.0411 25.9948 57.6158 26.511 58.5737 26.6987L59.6273 26.8864C60.0105 26.9802 60.1541 27.0741 60.1541 27.2618C60.1541 27.4964 59.9147 27.6841 59.4836 27.6841C59.0526 27.6841 58.6216 27.5433 58.5737 27.0741L56.9453 27.4025C57.1369 28.4348 58.1905 28.9041 59.4358 28.9041C60.8247 28.9041 61.8304 28.2941 61.8304 27.2148C61.7825 26.3702 61.3036 25.7602 60.3457 25.5725Z' fill='%230066B3'%3E%3C/path%3E%3Cpath d='M64.8962 26.5578L63.6509 23.5547H61.8789L64.0341 28.4817L63.2199 30.4056H64.992L68.0571 23.5547H66.2372L64.8962 26.5578Z' fill='%230066B3'%3E%3C/path%3E%3Cpath d='M72.0316 27.3085C70.9301 27.3085 70.0201 26.4169 70.0201 25.2908C70.0201 24.1177 70.9301 23.273 72.0316 23.273C72.9416 23.273 73.66 23.7423 73.8515 24.7277L75.5278 24.3523C75.1925 22.7569 73.7079 21.7715 71.9837 21.7715C69.9243 21.7715 68.248 23.32 68.248 25.3377C68.248 27.3554 69.8764 28.9039 71.9837 28.9039C73.8036 28.9039 75.1925 27.9185 75.5278 26.2292L73.8515 25.9008C73.66 26.7923 72.9416 27.3085 72.0316 27.3085Z' fill='%230066B3'%3E%3C/path%3E%3Cpath d='M77.9692 24.5402V23.5548H76.293V28.6695H77.9692V27.0741C77.9692 25.7602 78.5918 25.1502 79.7892 25.1502H80.0765L80.1723 23.5079C80.0286 23.4609 79.9328 23.4609 79.7892 23.4609C78.9271 23.5079 78.3524 23.9302 77.9692 24.5402Z' fill='%230066B3'%3E%3C/path%3E%3Cpath d='M83.2387 23.4141C81.7062 23.4141 80.4609 24.4933 80.4609 26.0887C80.4609 27.6841 81.7062 28.7634 83.2387 28.7634C84.4361 28.7634 85.3939 28.2472 85.8249 27.168L84.3403 26.8864C84.0529 27.4026 83.6219 27.4964 83.2387 27.4964C82.664 27.4964 82.233 27.121 82.0893 26.511H85.9207V26.0887C85.9207 24.4464 84.7234 23.4141 83.2387 23.4141ZM82.1372 25.5256C82.2809 25.0095 82.7598 24.7279 83.2387 24.7279C83.7177 24.7279 84.1487 24.9625 84.2924 25.5256H82.1372Z' fill='%230066B3'%3E%3C/path%3E%3Cpath d='M90.614 23.9773C90.1829 23.6019 89.6561 23.4142 88.9856 23.4142C87.5967 23.4142 86.4473 24.4935 86.4473 26.0889C86.4473 27.6843 87.5967 28.7635 88.9856 28.7635C89.6561 28.7635 90.2308 28.5758 90.614 28.2005V28.6697H92.2902V21.3496H90.614V23.9773ZM89.3209 27.4497C88.6025 27.4497 88.0756 26.9335 88.0756 26.1358C88.0756 25.3381 88.6025 24.822 89.3209 24.822C89.9914 24.822 90.614 25.3381 90.614 26.1358C90.614 26.9335 89.9914 27.4497 89.3209 27.4497Z' fill='%230066B3'%3E%3C/path%3E%3Cpath d='M94.1102 21.1621C93.5355 21.1621 93.1523 21.5847 93.1523 22.1011C93.1523 22.6176 93.5355 22.9932 94.1102 22.9932C94.6849 22.9932 95.0681 22.6176 95.0681 22.1011C95.116 21.5847 94.6849 21.1621 94.1102 21.1621Z' fill='%230066B3'%3E%3C/path%3E%3Cpath d='M94.9712 23.6016H93.2949V28.6693H94.9712V23.6016Z' fill='%230066B3'%3E%3C/path%3E%3Cpath d='M99.6169 27.1693C99.3774 27.3101 99.09 27.357 98.8506 27.357C98.4195 27.357 98.1322 27.1224 98.1322 26.6062V24.8231H99.6648V23.5562H98.1322V22.1016H96.4559V23.6031H95.498V24.8701H96.4559V26.7939C96.4559 28.1547 97.2222 28.8116 98.5632 28.8116C99.1379 28.8116 99.569 28.6709 100 28.4363L99.6169 27.1693Z' fill='%230066B3'%3E%3C/path%3E%3Cpath d='M135.539 17.8339C136.898 10.6478 132.054 3.74293 124.719 2.4114C117.385 1.07986 110.337 5.82588 108.978 13.0119C107.619 20.198 112.463 27.1029 119.798 28.4344C127.132 29.7659 134.18 25.0199 135.539 17.8339Z' fill='%230066B3'%3E%3C/path%3E%3Cpath d='M120.019 15.252C117.673 15.252 115.805 17.082 115.805 19.3812V23.5105H128.832L120.019 15.252Z' fill='%23ED6501'%3E%3C/path%3E%3Cpath d='M120.019 15.2508H123.755C126.102 15.2508 127.97 13.4207 127.97 11.1215C127.97 8.82221 126.102 6.99219 123.755 6.99219H120.019C117.673 6.99219 115.805 8.82221 115.805 11.1215V13.0453V19.3331C115.805 17.0808 117.72 15.2508 120.019 15.2508Z' fill='white'%3E%3C/path%3E%3C/svg%3E`,
});