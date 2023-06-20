import express from "express";
import { GetPlaylist, Search, getAboutChannel, getChannel, getTrending, getVideoComments, getVideoInfo, getVideoRelated } from "../controllers/YoutubeControllers.js";

var router = express.Router()


router.get('/AboutChannel',getAboutChannel)
router.get('/getChannel',getChannel)
router.get('/getVideoRelated',getVideoRelated) //Request failed with status code 400
router.get('/getVideoComments',getVideoComments)
router.get('/getTrending',getTrending)
router.get('/getVideoInfo',getVideoInfo)
router.get('/GetPlaylist',GetPlaylist)
router.get('/Search',Search)





export default router;
