#!/usr/bin/env bash
set -euo pipefail

REPO_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/../.." && pwd)"
cd "$REPO_ROOT"

if command -v netlify >/dev/null 2>&1; then
  netlify deploy --build --prod "$@"
else
  npx --yes netlify-cli deploy --build --prod "$@"
fi
