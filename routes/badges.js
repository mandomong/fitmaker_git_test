var express = require('express');
var router = express.Router();

// --- 9. 뱃지 가져오기 --- //
router.get('/1', function (req, res, nex) {

  res.json({
    "result": {
      "message": "뱃지 가져오기에 성공하였습니다...",
      "badge": {
        "badge_name": "첫 걸음마 성공",
        "badge_photourl": "first.jpg",
      }
    }
  });

});

module.exports = router;