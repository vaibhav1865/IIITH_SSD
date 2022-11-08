const Query = require('../models/querrySchema')
const express = require('express')
const router = express.Router()




router.post('/addquery', async (req, res) => {
    const { exam_name, course_name, question_num, ta_roll, std_roll, ta_comment, std_comment, IsActive
    } = req.body

    if (!exam_name || !course_name || !question_num || !ta_roll || !std_roll || !ta_comment || !std_comment || !IsActive) {
        return res.status(400).send("Please fill all the fields")
    }
    const query = await Query.findOne({ exam_name, course_name, question_num, ta_roll, std_roll, ta_comment, std_comment, IsActive })

    const newQuery = new Query({ exam_name, course_name, question_num, ta_roll, std_roll, ta_comment, std_comment, IsActive })
    await newQuery.save()
    res.send("Query added successfully")

})
//retrive all queries of a student by roll number

router.get('/getquery/:rollnumber', async (req, res) => {
    // console.log(req.params)
    const { rollnumber } = req.params
    const query = await Query.find({ std_roll: rollnumber })
    res.status(200).json({ "data": query })
    return;
})

//retrive all queries of a ta by roll number
router.get('/getqueryta/:rollnumber', async (req, res) => {
    console.log(req.params)
    const { rollnumber } = req.params
    const query = await Query.find({ ta_roll: rollnumber })
    res.status(200).json({ "data": query })
    return;
})




module.exports = router