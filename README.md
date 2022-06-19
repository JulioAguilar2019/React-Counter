# React-Counter

I need to install

npm install --save-dev jest

npm install --save-dev babel-jest @babel/core @babel/preset-env

and babel.config.js: 

module.exports = {
    presets: [
        ['@babel/preset-env', { 
            targets: { 
                node: 'current' } 
            }
        ]
    ],
};

and also

npm i -D @types/jest

for test and need to install

npm i -D @babel/preset-react   
npm i -D jest-environment-jsdom
npm i isomorphic-fetch
npm i -D @testing-library/react

if i need another, search on package.json to remember.
