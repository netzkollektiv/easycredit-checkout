cat ./public/index.html | sed 's#</head>#<script src="./easycredit-components.js"></script>\n</head>#g' \
  > dist/index.html
