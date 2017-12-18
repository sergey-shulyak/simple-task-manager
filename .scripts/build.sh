#!/bin/bash

echo "Installing project dependecies"
npm install
echo "Done"

echo "Building project"

if npm run build
then
  echo "Done"
  echo "Project was built successfully"
else
  echo "ERROR: Project build failed"
  exit 1
fi
