var express = require('express');
var router = express.Router();

// --- 17. 뱃지 보여주기 --- //
router.get('/:badge_id', function (req, res, next) {
  var badge_id = req.params.badge_id;

  res.json({
    "result": {
      "message": "뱃지 가져오기에 성공하였습니다...",
      "badge": {
        "badge_name": "첫 걸음마 성공",
        "badge_photourl": "https://s3.ap-northeast-2.amazonaws.com/fitmakerbucket/test/badges_choong.jpg"
      }
    }
  });

});

module.exports = router;