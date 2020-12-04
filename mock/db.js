var Mock = require('mockjs');

module.exports = {
  getComment: Mock.mock({
    "code": 200,
    "message": "success",
    "result|40": [{
      "author": "@name",
      "comment": "@cparagraph",
      "date": "@datetime"
    }]
  }),
  addComment: Mock.mock({
    "code": 200,
    "message": "success",
    "result": []
  })
};