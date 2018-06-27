'use strict';
const db = require('../../lib/LeagueService.js')
  , util = require('../../lib/util.js')
  , express = require('express')
  , router = express.Router();

router.get('/:coach_id', util.checkCache, async function(req, res){
  res.redirect(`/rebbl/coach/${req.params.coach_id}/matches`);
});

router.get('/:coach_id/team', util.checkCache, async function(req, res){
  let data =  await db.getCoach(req.params.coach_id);
  data.matches = await db.getMatchesForCoach(req.params.coach_id);
  res.render('rebbl/coach/coach', data);
});

router.get('/:coach_id/matches', util.checkCache, async function(req, res){
  let data =  await db.getCoach(req.params.coach_id);
  data.matches = await db.getMatchesForCoach(req.params.coach_id);
  res.render('rebbl/coach/coach', data);
});

module.exports = router;