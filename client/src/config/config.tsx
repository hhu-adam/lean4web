import { LeanWebConfig } from './docs' // look here for documentation of the individual config options

const lean4webConfig : LeanWebConfig = {
  "projects": [
    { "folder": "mathlib-demo",
      "name": "Latest Mathlib",
      "examples": [
        { "file": "MathlibLatest/Bijection.lean",
          "name": "Bijection" },
        { "file": "MathlibLatest/Logic.lean",
          "name": "Logic" },
        { "file": "MathlibLatest/Ring.lean",
          "name": "Ring" },
        { "file": "MathlibLatest/Rational.lean",
          "name": "Rational" }]},
    { "folder": "mathlib-stable",
      "name": "Mathlib stable"},
    { "folder": "lean-nightly",
      "name": "Lean Nightly (without mathlib)"}
  ],
  "serverCountry": 'Finland',
  "contactDetails": null,
  "impressum": null
}

export default lean4webConfig
