/* eslint-disable */
const jsdom = require('mocha-jsdom');

const chai = require('chai');
const assert = require('assert');
const request = require('supertest');
const express = require('express');

const app = express();

const expect = chai.expect();
const should = chai.should();
const chaiHttp = require('chai-http');

chai.use(chaiHttp)

describe('get /', function () {
  it('should return a 200 status message', function () {
    request(app)
      .get('/')
      .end(function(error, result) {
        result.should.have.status(200);
        done();
      });
  });

  it('should fail when given an invalid path', function () {
    request(app)
      .get('/candybars')
      .end(function(error, result) {
        result.should.have.status(404);
        done();
      });
  });

});

describe('getpeople route', function () {
  it('should be a valid endpoint', function () {
    request(app)
      .get('/getpeople/1')
      .end(function(error, result) {
       result.should.have.status(200)
       done();
     });
  });

  it('should return an array', function () {
    request(app)
      .get('/getpeople/1')
      .end(function(error, result) {
        result.should.be.a('array');
        done();
      });
  });

  it('other getpeople endpoints should also be valid', function () {
    request(app)
      .get('/getpeople/3')
      .end(function(error, result) {
       result.should.have.status(200)
       done();
     });
  });

  it('other getpeople endpoint should also return an array', function () {
    request(app)
      .get('/getpeople/4')
      .end(function(error, result) {
        result.should.be.a('array');
        done();
      });
  });

});
