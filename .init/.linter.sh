#!/bin/bash
cd /tmp/kavia/workspace/code-generation/food-order-frontend-671726-671735/food_ordering_frontend
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

