#!/bin/bash
# Usage: ./git-release.sh

set -e

COMMIT_MSG="chore: alpha release"

echo "Adding all changes..."
git add .

echo "Committing with message: $COMMIT_MSG"
git commit -m "$COMMIT_MSG"

echo "Pushing to remote..."
git push --follow-tags

echo "Done!"
