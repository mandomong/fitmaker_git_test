var express = require('express');
var router = express.Router();

// --- 14. 친구 목록 --- //
router.get('/', function (req, res, next) {
  res.json({
    "result": {
      "message": "친구목록 조회 요청에 성공하였습니다...",
      "friends": [{"user_id": 1, "user_name": "엄준태", user_hours: 500},
        {"user_id": 2, "user_name": "김혜민", user_hours: 30},
        {"user_id": 8, "user_name": "천우희", user_hours: 450}],
      "req_friends": [{"user_id": 1, "user_name": "엄준태"},
        {"user_id": 2, "user_name": "김혜민"},
        {"user_id": 8, "user_name": "천우희"}],
      "res_friends": [{"user_id": 1, "user_name": "엄준태"},
        {"user_id": 2, "user_name": "김혜민"},
        {"user_id": 8, "user_name": "천우희"}]

    }
  });
});


module.exports = router;
