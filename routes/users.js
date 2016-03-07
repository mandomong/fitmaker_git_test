var express = require('express');
var router = express.Router();

// --- 1. 회원 가입 --- //
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

// --- 3. facebook 로그인 --- //
router.get('/facebook',function(req, res, nex){
    res.json({
        "result": {
            "message": "페이스북 로그인이 정상적으로 처리되었습니다."
        }
    });
});

// --- 11. 마이페이지 --- //
router.get('/me', function (req, res, next) {
    if (req.secure) {
        res.json({
            "result": {
                "message": "마이페이지가 정상적으로 조회되었습니다...",
                "user_name": "천우희",
                "user_photourl": "/images/profile/woohee.jpg",
                "badge_Cnt": 3,
                "hours": 300,
                "exctype_name": "발레리나 타입",
                "project_history": [{"project_id": 1, "name": "비키니 프로젝트!", "ing": true},
                    {"project_id": 2, "name": "힙업 삼주완성!", "ing": false},
                    {"project_id": 3, "name": "해범이 만들기!", "ing": true}],
                "badges": [{"badge_name": "출석왕", "badge_photourl": "/images/badge/first.jpg", "own_badge": true},
                    {"badge_name": "에스라인마스터", "badge_photourl": "/images/badge/second.jpg", "own_badge": true}]
            }
        });
    } else {
        var err = new Error('SSL/TLS Upgrade Required');
        err.status = 426;
        next(err);
    }
});

// --- 12. 프로필사진변경 --- //
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

// --- 10. 친구 프로필 보기 --- //
router.get('/1234',function(req,res,next){
    if(req.secure){
        res.json({
            "result" : {
                "message":"친구프로필 페이지가 정상적으로 조회되었습니다...",
                "friend": {
                    "friend_name": "장한솔",
                    "friend_photourl": "/images/profile/jang.jpg",
                    "badgeCnt": 5,
                    "hours": 250,
                    "exctype_name": "헬스 타입",
                },
                "project_history":[{"project_id":1, "name":"비키니 프로젝트!","ing":true},
                                   {"project_id":2, "name":"힙업 삼주완성!","ing":false},
                                   {"project_id":3, "name":"해범이 만들기!","ing":true}],
                "badges":[{"badge_name":"출석왕", "badge_photourl":"/images/badge/first.jpg"},
                          {"badge_name":"에스라인마스터", "badge_photourl":"/images/badge/sline.jpg"}]
            }
        });
    }else{
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
