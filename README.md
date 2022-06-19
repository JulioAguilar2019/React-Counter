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
