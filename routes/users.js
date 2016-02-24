var express = require('express');
var router = express.Router();

// --- 6. 회원 가입 --- //
router.post('/',function(req, res, next) {
    res.json({
       "message":"회원가입이 정상적으로 처리되었습니다..."
    });

});

// --- 7. facebook 로그인 --- //
router.get('/facebook',function(req, res, nex){

    res.json({
       "message":"페이스북 로그인이 정상적으로 처리되었습니다."
    });

});

// --- 8. 마이페이지 --- //
router.get('/me',function(req,res,next){

    console.log(req.url);
    if(req.method.toLowerCase() === 'get') {

        if (req.secure) {
            //var user = req.user;

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
    }else{
        res.send('마이페이지를 조회하려면 GET 메소드를 사용하세요...');
    }
});

// --- 9. 프로필사진변경 --- //
router.put('/me',function(req,res,next){

    if(req.method.toLowerCase() === 'put') {
        res.json({
            "message": "프로필 사진이 성공적으로 변경되었습니다"
        });
    }else{
        res.send('프로필 사진을 변경하려면 PUT 메소드를 사용하세요...');
    }

});

// --- 10. 친구 프로필 보기 --- //
router.get('/5',function(req,res,next){

    if(req.secure){
        res.json({
            "result" : {
                "message":"친구프로필 페이지가 정상적으로 조회되었습니다...",
                "user_name":"장한솔",
                "user_photourl":"/images/profile/jang.jpg",
                "badge_Cnt":5,
                "hours":250,
                "exctype_name":"헬스 타입",
                "project_history":[{"project_id":1, "name":"비키니 프로젝트!","ing":true},
                                   {"project_id":2, "name":"힙업 삼주완성!","ing":false},
                                   {"project_id":3, "name":"해범이 만들기!","ing":true}],
                "badges":[{"badge_name":"출석왕", "badge_photourl":"/images/badge/first.jpg","own_badge":true},
                          {"badge_name":"에스라인마스터", "badge_photourl":"/images/badge/sline.jpg","own_badge":true}]
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
