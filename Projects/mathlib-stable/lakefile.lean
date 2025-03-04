import Lake
open Lake DSL

require mathlib from git
  "https://github.com/leanprover-community/mathlib4"@"stable"

require webeditor from git
  "https://github.com/hhu-adam/lean4web-tools.git" @ "main"

package mathlibStable {
  -- add package configuration options here
}

@[default_target]
lean_lib MathlibStable {
  -- add library configuration options here
}
