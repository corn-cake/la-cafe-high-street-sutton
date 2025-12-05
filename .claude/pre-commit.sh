#!/bin/bash

input=$(cat)
command=$(echo "$input" | jq -r '.tool_input.command // empty')

# Only intercept git commit commands
if [[ "$command" =~ ^git\ commit ]]; then
  echo "Running pre-commit checks..." >&2

  if ! pnpm lint; then
    echo '{"permissionDecision": "deny", "permissionDecisionReason": "Lint failed. Fix errors before committing."}'
    exit 0
  fi

  if ! pnpm tsc --noEmit; then
    echo '{"permissionDecision": "deny", "permissionDecisionReason": "Type check failed. Fix type errors before committing."}'
    exit 0
  fi

  if ! pnpm build; then
    echo '{"permissionDecision": "deny", "permissionDecisionReason": "Build failed. Fix build errors before committing."}'
    exit 0
  fi

  echo "All checks passed!" >&2
fi

echo "$input"
exit 0
