import { fileURLToPath } from 'url';
import path from 'path';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function showTree(fileName) {

    const file = path.join(__dirname, fileName);

    fs.readFile(file, (err, data) => {
        if (err) throw err;
        const obj = JSON.parse(data.toString('utf-8'));
        console.log(getTree(obj));
    })
}

function getTree(data, prefix = '', nextObj = null, startEl = true) {

    let result = '';

    const getSymbol = (endSymbol, bindSymbol) => startEl ? '' : nextObj === null ? endSymbol : bindSymbol;

    Object.entries(data).forEach(([key, val]) => {

        let pref = '';

        if(key === 'items') {
            val.forEach((item, idx) => {
                pref = prefix + getSymbol('    ', '│   ');
                result += getTree(item, pref, val[idx + 1], false);
            })
        } else {
            pref = getSymbol('└── ', '├── ')
            result += prefix + pref + val + '\n';
        }

    });
    
    return result;
}

showTree('data.json');
