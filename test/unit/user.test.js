const expect = require('chai').expect;
const sinon = require('sinon');
const userListMock = require('../helpers/usersMock');
const axios = require('axios');
const userService = require('./../../src/services/usuarioService');

describe('USER', () => {

    describe('GET', () => {
        let sandbox;
        const userList = userListMock.usersMockList;
        const fakeUserId = userList[2].id;

        beforeEach(() => {
            sandbox = sinon.createSandbox();
            sandbox.stub(axios, 'get').callsFake((args) => {
                let response;
                let id = args.split('/usuario')[1];
                if (id)
                    response = [userList.find(a => a.id === id.split('/')[1])];
                else
                    response = userList;

                return {
                    data: {
                        result: response
                    }
                };
            });
        });

        afterEach(() => {
            sandbox.restore();
        });

        it('should return list of users', async () => {
            const resolved = await userService.getUsers();
            expect(resolved.length).to.be.greaterThan(0);
        });

        it('should return user by id', async () => {
            const resolved = await userService.getUserById(fakeUserId);
            expect(resolved.id).to.be.equals(fakeUserId);
        });

    });
});