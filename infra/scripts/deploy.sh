#!/usr/bin/env sh
set -eu

APP_NAME="${APP_NAME:-tiss-api}"
DEPLOY_HOST="${VPS_HOST:?VPS_HOST is required}"
DEPLOY_USER="${VPS_USER:?VPS_USER is required}"
DEPLOY_PATH="${DEPLOY_PATH:-/opt/tiss/project-genesis}"

rsync -az --delete \
  --exclude ".git" \
  --exclude "node_modules" \
  --exclude ".turbo" \
  ./ "${DEPLOY_USER}@${DEPLOY_HOST}:${DEPLOY_PATH}/"

ssh "${DEPLOY_USER}@${DEPLOY_HOST}" "sudo systemctl restart ${APP_NAME} && sudo systemctl status ${APP_NAME} --no-pager"
