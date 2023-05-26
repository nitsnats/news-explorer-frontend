module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    "overrides": [
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "react/prop-types": "off",
        'react/no-unknown-property': [2, { ignore: ['errorText'] }],
        "no-empty": [0, "allow-empty-functions", "allow-empty-catch"],
        "react/jsx-uses-react": "error",
        "react/jsx-uses-vars": "error",
        "no-unused-vars": ["error", { "vars": "all", "args": "after-used", "ignoreRestSiblings": false }],
        "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
        "indent": [
            "error",
            2
        ]
        
    },
}
