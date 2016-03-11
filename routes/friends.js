var express = require('express');
var router = express.Router();

// --- 9. 친구 목록 보기 --- //
router.get('/', function (req, res, next) {
    res.json({
        "result": {
            "message": "친구목록 조회 요청에 성공하였습니다",
            "friends": [
                {
                    "friend_id": 2,
                    "friend_name": "한솔",
                    "friend_photourl": "https://s3.ap-northeast-2.amazonaws.com/fitmakerbucket/test/users_me_han.jpg"
                },
                {
                    "friend_id": 7,
                    "friend_name": "으뜸",
                    "friend_photourl": "https://s3.ap-northeast-2.amazonaws.com/fitmakerbucket/test/users_me_first.jpg"
                },
                {
                    "friend_id": 2,
                    "friend_name": "혜선",
                    "friend_photourl": "https://s3.ap-northeast-2.amazonaws.com/fitmakerbucket/test/users_me_sun.jpg"
                }
            ]
        }
    });
});

// --- 8. 친구 프로필 보기 --- //
router.get('/:friend_id', function (req, res, next) {
    var friend_id = req.params.friend_id;
    if (req.secure) {
        res.json({

            "result": {
                "message": "친구프로필 페이지가 정상적으로 조회되었습니다...",
                "friend": {
                    "friend_name": "한솔1",
                    "friend_photourl": "3",
                    "friend_hours": 19415,
                    "friend_badgeCnt": 1,
                    "exctype_name": "아이돌"
                },
                "project_history": [
                    {
                        "project_id": 13,
                        "project_name": "타바타 운동법",
                        "project_on": true
                    },
                    {
                        "project_id": 15,
                        "project_name": "기초체력기르기",
                        "project_on": false
                    },
                    {
                        "project_id": 18,
                        "project_name": "다이어트 커리큘럼-한달2KG",
                        "project_on": true
                    },
                    {
                        "project_id": 21,
                        "project_name": "마일리사일러스 복근운동커리큘럼",
                        "project_on": true
                    },
                    {
                        "project_id": 22,
                        "project_name": "11자복근프로젝트커리큘럼",
                        "project_on": true
                    }
                ],
                "friend_badges": [
                    {
                        "badge_id": 1,
                        "badge_name": "10회달성",
                        "badge_photourl": null
                    },
                    {
                        "badge_id": 2,
                        "badge_name": "20회달성",
                        "badge_photourl": null
                    }
                ]
            }

        });
    } else {
        var err = new Error('SSL/TLS Upgrade Required');
        err.status = 426;
        next(err);
    }

});


module.exports = router;
