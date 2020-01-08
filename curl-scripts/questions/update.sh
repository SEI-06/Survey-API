#!/bin/bash

API="http://localhost:4741"
URL_PATH="/questions"

curl "${API}${URL_PATH}/${ID}" \
  --include \
  --request PATCH \
  --header "Content-Type: application/json" \
--header "Authorization: Bearer ${TOKEN}" \
--data '{
    "question": {
      "title": "'"${TITLE}"'",
      "choice1": "'"${C1}"'",
      "choice2": "'"${C2}"'",
      "choice3": "'"${C3}"'",
      "choice4": "'"${C4}"'"
    }
  }'

echo
