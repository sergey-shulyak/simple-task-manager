#!/bin/bash

echo "Installing testing tools"
if npm install --only=dev
then
  echo "Done"
else
  echo "ERROR: Failed to install testing tools"
  exit 1
fi

echo "Checking code style with eslint"
if npm run lint
then
  echo "Done"
else
  echo "ERROR: Failed to run lint"
  exit 1
fi

echo "Running unit tests"
if npm test
then
  echo "Done"
  echo "Coverage report is generated"
else
  echo "ERROR: Failed to run tests"
  exit 1
fi
