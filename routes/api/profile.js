import express  from 'express';

const router = express.Router();

// @route   api/profile/test
// @desc    test profile route
// @access  public 

router.get('/test', (req, res) => res.json({ msg: "profile Works"}));

export default router;