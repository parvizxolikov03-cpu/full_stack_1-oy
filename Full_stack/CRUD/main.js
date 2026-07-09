import { createServer } from 'http';
import { getData, addData } from './file.js';

const PORT = 3000;

createServer(async(req, res) => {
    try{
        res.setHeader('Content-Type', 'application/json')
        const users = await getData();

        if(req.method === 'GET' && req.url === '/users'){
            return res.writeHead(200).end(JSON.stringify(users));
        }
        if(req.method === 'POST' && req.url === '/users'){
            let body = '';
            req.on('data', (chunk) => {
                body += chunk
            });
            req.on('end', async ()=> {
                const newUser = {
                    id: users ? users.at(-1)?.id + 1 : 1,
                    ...JSON.parse(body)
                };
                users.push(newUser);
                await addData(users);
                return res.writeHead(201).end(JSON.stringify(newUser))
            });
        }
        if(req.method === 'PUT' && req.url.startsWith('/user')){
            const id = Number(req.url.split('/')[2]);
            const index = users.findIndex(el => el.id === id);
            if(index === -1) {
                return res.writeHead(404).end(JSON.stringify({
                    message: 'User not found'
                }));
                let body = '';
                req.on('data', (chunk) => {
                    body += chunk
                });
                req.on('end', async ()=> {
                    users[index] = {id, ...JSON.parse(body)};
                    await addData(users);
                    return res.writeHead(200).end(JSON.stringify(users[index]))
                });
            }
        }
        else {
            return res.writeHead(404).end(JSON.stringify({
                message: 'PAge not found'
            }));
        }

    } catch (err) {
        console.log(err)
        return res.end(JSON.stringify({
            message: err.message
        }))
    }
}).listen(PORT, () => console.log('Server running on port', PORT))