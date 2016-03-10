var express = require('express');
var router = express.Router();

// --- 10. 랭킹 보기 --- //
router.get('/', function (req, res, next) {
    res.json({
            "result": {
                "message": "친구 랭킹 요청에 성공하였습니다...",
                "friends": [
                    {
                        "friend_id": 1,
                        "friend_name": "채워니",
                        "friend_hours": 19415,
                        "friend_photourl":"https://s3.ap-northeast-2.amazonaws.com/fitmakerbucket/test/curri_moon.jpg"
                    },
                    {
                        "friend_id": 2,
                        "friend_name": "서려니",
                        "friend_hours": 19415,
                        "friend_photourl":"https://s3.ap-northeast-2.amazonaws.com/fitmakerbucket/test/user_me_sul1.jpg"
                    },
                    {
                        "friend_id": 19,
                        "friend_name": "떠려니",
                        "friend_hours": 6810,
                        "friend_photourl":"https://s3.ap-northeast-2.amazonaws.com/fitmakerbucket/test/user_me_sul2.jpg"
                    },
                    {
                        "friend_id": 7,
                        "friend_name": "숮이",
                        "friend_hours": 270,
                        "friend_photourl":"https://s3.ap-northeast-2.amazonaws.com/fitmakerbucket/test/user_me_suzy.jpg"
                    }
                ]
            }

        });
});

module.exports = router;