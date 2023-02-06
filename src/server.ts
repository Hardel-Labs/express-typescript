import express from 'express';
import glob from 'glob';

const port = 3000;
const app = express();

const routes = glob.sync('**/*.ts', { cwd: 'src/api' });
for (const route of routes) {
    const [slug, method] = route.split('.');

    switch (method) {
        case 'get':
            app.get(`/${slug}`, async (req, res) => {
                const { default: handler } = await import(`@api/${route}`);
                handler(req, res);
            });
            break;

        case 'post':
            app.post(`/${slug}`, async (req, res) => {
                const { default: handler } = await import(`@api/${route}`);
                handler(req, res);
            });
            break;

        case 'put':
            app.put(`/${slug}`, async (req, res) => {
                const { default: handler } = await import(`@api/${route}`);
                handler(req, res);
            });
            break;

        case 'delete':
            app.delete(`/${slug}`, async (req, res) => {
                const { default: handler } = await import(`@api/${route}`);
                handler(req, res);
            });
            break;
    }
}

app.listen(port, () => {
    console.log(`Server started on port ${port}! at http://localhost:${port}`);
});