#!/bin/bash

echo "Creating server .env file"
echo "API_PORT=$API_PORT" > server/.env
echo "DB_HOST=$DB_HOST" >> server/.env
echo "DB_PORT=$DB_PORT" >> server/.env
echo "DB_NAME=$DB_NAME" >> server/.env
echo "DB_USER=$DB_USER" >> server/.env
echo "DB_PASSWORD=$DB_PASSWORD" >> server/.env
echo "Done"

echo "Installing server dependecies"
npm --prefix ./server install ./server
echo "Done"

echo "Creating client .env file"
echo "API_HOST=$API_HOST" > .env
echo "API_PORT=$API_PORT" >> .env
echo "Done"

echo "Installing client dependecies"
npm install
npm install --only=dev
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
