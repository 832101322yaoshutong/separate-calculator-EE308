const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
 
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
 
// 创建MySQL数据库连接
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'calculator'
});
 
// 连接到MySQL数据库
connection.connect((error) => {
    if (error) {
        console.error('Error connecting to MySQL database:', error);
    } else {
        console.log('Connected to MySQL database');
    }
});
 
// 创建历史记录表（如果不存在）
connection.query('CREATE TABLE IF NOT EXISTS history (id INT AUTO_INCREMENT PRIMARY KEY, calculation VARCHAR(255))', (error) => {
    if (error) {
        console.error('Error creating history table:', error);
    } else {
        console.log('History table created');
    }
});
 
// 处理计算请求
app.get('/calculate', (req, res) => {
    const input = req.query.input;
    const result = eval(input);
    const calculation = input + ' = ' + result;
 
    // 将计算记录存储到数据库
    connection.query('INSERT INTO history (calculation) VALUES (?)', [calculation], (error) => {
        if (error) {
            console.error('Error inserting calculation into history:', error);
        }
    });
 
    res.json({ result: result });
});
 
// 处理计算百分比请求
app.get('/calculatePercentage', (req, res) => {
    const input = req.query.input;
    const result = eval(input) / 100;
    const calculation = input + '% = ' + result;
 
    // 将计算记录存储到数据库
    connection.query('INSERT INTO history (calculation) VALUES (?)', [calculation], (error) => {
        if (error) {
            console.error('Error inserting calculation into history:', error);
        }
    });
 
    res.json({ result: result });
});
 
// 处理计算正弦请求
app.get('/calculateSin', (req, res) => {
    const input = req.query.input;
    const result = Math.sin(eval(input));
    const calculation = 'sin(' + input + ') = ' + result;
 
    // 将计算记录存储到数据库
    connection.query('INSERT INTO history (calculation) VALUES (?)', [calculation], (error) => {
        if (error) {
            console.error('Error inserting calculation into history:', error);
        }
    });
 
    res.json({ result: result });
});
 
// 处理计算余弦请求
app.get('/calculateCos', (req, res) => {
    const input = req.query.input;
    const result = Math.cos(eval(input));
    const calculation = 'cos(' + input + ') = ' + result;
 
    // 将计算记录存储到数据库
    connection.query('INSERT INTO history (calculation) VALUES (?)', [calculation], (error) => {
        if (error) {
            console.error('Error inserting calculation into history:', error);
        }
    });
 
    res.json({ result: result });
});
 
// 处理计算对数请求
app.get('/calculateLog', (req, res) => {
    const input = req.query.input;
    const result = Math.log(eval(input));
    const calculation = 'log(' + input + ') = ' + result;
 
    // 将计算记录存储到数据库
    connection.query('INSERT INTO history (calculation) VALUES (?)', [calculation], (error) => {
        if (error) {
            console.error('Error inserting calculation into history:', error);
        }
    });
 
    res.json({ result: result });
});
 
// 获取历史记录
app.get('/history', (req, res) => {
    connection.query('SELECT calculation FROM history', (error, results) => {
        if (error) {
            console.error('Error fetching history from database:', error);
            res.json({ history: 'Error fetching history' });
        } else {
            const history = results.map(row => row.calculation).join('\n');
            res.json({ history: history });
        }
    });
});
 
// 启动服务器
app.listen(3000, () => {
    console.log('Server started on port 3000');
});
