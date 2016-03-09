var express = require('express');
var router = express.Router();

// --- 10. 랭킹 보기 --- //
router.get('/', function (req, res, next) {
    res.json({
            "result": {
                "message": "친구 랭킹 요청에 성공하였습니다...",
                "friends": [
                    {
                        "friend_id": 2,
                        "friend_name": "한솔1",
                        "friend_hours": 19415
                    },
                    {
                        "friend_id": 2,
                        "friend_name": "한솔1",
                        "friend_hours": 19415
                    },
                    {
                        "friend_id": 19,
                        "friend_name": "handddoi",
                        "friend_hours": 6810
                    },
                    {
                        "friend_id": 7,
                        "friend_name": "한솔2",
                        "friend_hours": 270
                    }
                ]
            }

        });
});

module.exports = router;