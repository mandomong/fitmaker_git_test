var express = require('express');
var router = express.Router();

// --- 5. 회원 가입 --- //
router.post('/',function(req, res, next) {
    if(req.secure) {
        res.json({
            "result": {
                "message": "회원가입이 정상적으로 처리되었습니다..."
            }
        });
    }else{
        var err = new Error('SSL/TLS Upgrade Required');
        err.status = 426;
        next(err);
    }

});

// --- 4. 회원검색 --- //
router.get('/',function(req, res, next) {
    if(req.secure) {
        res.json({
            "result" : {
            "message": "회원 검색에 성공하였습니다...",
              "friends": [
                {
                    "friend_id": 20,
                    "friend_name": "쭈니",
                    "friend_email": "zooni@han.net",
                    "friend_photourl": "https://s3.ap-northeast-2.amazonaws.com/fitmakerbucket/test/users_me_um.jpg",
                    "friend_state": 2
                },
                {
                    "friend_id": 22,
                    "friend_name": "뜨미",
                    "friend_email": "doomi@han.net",
                    "friend_photourl": "https://s3.ap-northeast-2.amazonaws.com/fitmakerbucket/test/users_me_first.jpg",
                    "friend_state": 1
                },
                {
                    "friend_id": 23,
                    "friend_name": "서니",
                    "friend_email": "sunny@han.net",
                    "friend_photourl": "https://s3.ap-northeast-2.amazonaws.com/fitmakerbucket/test/users_me_sun.jpg",
                    "friend_state": 0
                }
            ]
        }
        });
    }else{
        var err = new Error('SSL/TLS Upgrade Required');
        err.status = 426;
        next(err);
    }

});

// --- 3. facebook 로그인 --- //
router.get('/facebook',function(req, res, nex){
    res.json({
        "result": {
            "message": "페이스북 로그인이 정상적으로 처리되었습니다."
        }
    });
});

// --- 6. 마이페이지 --- //
router.get('/me', function (req, res, next) {
    if (req.secure) {
        res.json({
            "result" : {
            "message": "마이페이지가 정상적으로 조회되었습니다...",
                "user": {
                    "user_name": "kimstar",
                    "user_photourl": "https://s3.ap-northeast-2.amazonaws.com/fitmakerbucket/test/users_me_um.jpg",
                    "hours": 1510,
                    "badgeCnt": 1,
                    "exctype_name": "머슬퀸"
                },
                "project_history": [
                    {
                        "project_id": 25,
                        "project_name": "기초체력기르기",
                        "project_on": true
                },
                {
                    "project_id": 26,
                    "project_name": "전신근력운동커리큘럼",
                    "project_on": true
                },
                {
                    "project_id": 27,
                    "project_name": "식스팩 프로젝트 커리큘럼",
                    "project_on": true
                }
            ],
              "mybadges": [
                {
                    "badge_id": 3,
                    "badge_name": "30회달성",
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

// --- 7. 프로필사진변경 --- //
router.put('/me', function (req, res, next) {
    if (req.secure) {
        res.json({
            "result": {
                "message": "프로필 사진이 성공적으로 변경되었습니다"
            }
        });
    } else {
        var err = new Error('SSL/TLS Upgrade Required');
        err.status = 426;
        next(err);
    }
});



router.get('/photos', function(req,res,next){
    var form = new formidable.IncomingForm();
    form.uploadDir = path.join(__dirname, 'uploads');
    form.encoding = 'utf-8';

});

module.exports = router;
