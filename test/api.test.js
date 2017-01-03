process.env.NODE_ENV = 'test';

var chai = require('chai');
var chaiHttp = require('chai-http');
chai.should();

chai.use(chaiHttp);
/*
//Our parent block
describe('Books', () => {
    describe('/GET book', () => {
        it('it should GET all the books', (done) => {
            chai.request('http://sandbox.dev:8080/api')
                .get('/book.php')
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('array');
                    res.body.length.should.be.eql(4);
                    done();
                });
        });

        it('it should GET one book with id 1', (done) => {
            chai.request('http://sandbox.dev:8080/api')
                .get('/book.php?id=1')
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    res.body.should.have.property('id');
                    res.body.should.have.property('title');
                    res.body.should.have.property('author');
                    res.body.should.have.property('year');
                    res.body.should.have.property('id').eql(1);
                    done();
                });
        });

        it('it should GET empty result (not found)', (done) => {
            chai.request('http://sandbox.dev:8080/api')
                .get('/book.php?id=-2')
                .end((err, res) => {
                    res.should.have.status(404);
                    res.body.should.be.a('array');
                    res.body.length.should.be.eql(0);
                    done();
                });
        });
    });

    describe('/POST book', () => {
        it('it should not POST a book without title field', (done) => {
            chai.request('http://sandbox.dev:8080/api')
                .post('/book.php')
                .field('author', 'J.R.R. Tolkien')
                .field('year', 1954)
                .end((err, res) => {
                    res.should.have.status(400);
                    res.body.should.be.a('object');
                    res.body.should.have.property('message');
                    res.body.message.should.be.eql('bad request');
                    done();
                });
        });

        it('it should return success POST with echoing data', (done) => {
            chai.request('http://sandbox.dev:8080/api')
                .post('/book.php')
                .field('title', 'The Lord of the Rings')
                .field('author', 'J.R.R. Tolkien')
                .field('year', 1954)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    res.body.should.have.property('message');
                    res.body.message.should.be.eql('success');
                    res.body.should.have.property('book');
                    res.body.book.should.have.property('id');
                    res.body.book.should.have.property('title').eql('The Lord of the Rings');
                    res.body.book.should.have.property('author').eql('J.R.R. Tolkien');
                    res.body.book.should.have.property('year').eql(1954);
                    done();
                });
        });
    });

    describe('/PUT/:id book', () => {
        it('it should UPDATE a book given the id', (done) => {
            chai.request('http://sandbox.dev:8080/api')
                .put('/book.php?id=1')
                .field('title', 'The Lord of the Rings')
                .field('author', 'J.R.R. Tolkien')
                .field('year', 2016)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    res.body.should.have.property('message');
                    res.body.should.have.property('book');
                    res.body.book.should.have.property('year').eql(2016);
                    done();
                });
        });
    });

    describe('/DELETE/:id book', () => {
        it('it should DELETE a book given the id', (done) => {
            chai.request('http://sandbox.dev:8080/api')
                .delete('/book.php?id=2')
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    res.body.should.have.property('message');
                    res.body.should.have.property('book');
                    res.body.book.should.have.property('id').eql(2);
                    done();
                });
        });
    });
});
*/