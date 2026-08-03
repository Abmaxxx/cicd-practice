const request = require('supertest');
const app = require('../index');

describe('GET /', () => {
    it('should return running message', async () => {
        const res = await request(app).get('/');
        expect(res.statusCode).toBe(200);
        expect(res.body.message).toBe('Server is running');
    });
});

describe('GET /add/:a/:b', () => {
    it('should correctly add two numbers', async () => {
        const res = await request(app).get('/add/5/9');
        expect(res.statusCode).toBe(200);
        expect(res.body.result).toBe(14);
    });

    it('should handle zero correctly', async () => {
        const res = await request(app).get('/add/0/0');
        expect(res.body.result).toBe(0);
    });
});