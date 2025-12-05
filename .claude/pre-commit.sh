#!/bin/bash

input=$(cat)
command=$(echo "$input" | jq -r '.tool_input.command // empty')

# Only intercept git commit commands
if [[ "$command" =~ ^git\ commit ]]; then
  echo "Running pre-commit checks..." >&2

  pnpm lint && pnpm tsc --noEmit && pnpm build || exit 2

  echo "All checks passed!" >&2
fi

echo "$input"
exit 0
