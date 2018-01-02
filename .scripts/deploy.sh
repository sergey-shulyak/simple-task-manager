#!/bin/bash

echo "Installing required tools"
apt-get update
which ssh-agent || ( apt-get install openssh-client -y )
which rsync || ( apt-get install rsync -y )
echo "Done"

echo "Setting up ssh keys"
eval $(ssh-agent -s)
echo $SSH_PASSPHRASE | ssh-add <(echo "$SSH_PRIVATE_KEY")
mkdir -p ~/.ssh
[[ -f /.dockerenv ]] && echo -e "Host *\n\tStrictHostKeyChecking no\n\n" > ~/.ssh/config
echo "Done"

echo "Deploying project to $SERVER_HOST"

if rsync -azv -e "ssh -p $SERVER_SSH_PORT" public/ "$SERVER_USER@$SERVER_HOST:$SERVER_DESTINATION/$PROJECT_NAME"
then
  echo "Done"
else
  echo "ERROR: Failed to deploy project to $SERVER_HOST"
  exit 1
fi

echo "Starting server"

if ssh "$SERVER_USER@$SERVER_HOST" -p $SERVER_SSH_PORT npm start --prefix "$SERVER_DESTINATION/$PROJECT_NAME/$SERVER_DIR"
then
  echo "Done"
else
  echo "ERROR: Failed to start server in $SERVER_DIR"
  exit 1
fi

echo "Creating symlink for web application root"
if ssh "$SERVER_USER@$SERVER_HOST" -p $SERVER_SSH_PORT ln -sfn "$SERVER_DESTINATION/$PROJECT_NAME" "/home/$SERVER_USER/www/$PROJECT_NAME"
then
  echo "Done"
  echo "Project deployed succesfully"
else
  echo "ERROR: Failed to create a symlink"
  exit 1
fi
