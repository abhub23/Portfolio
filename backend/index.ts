import express from 'express'
import cors from 'cors'
const Port = 8000

const app = express()
app.use(cors({
    origin: "*"
}))

app.post('/send', (req , res) => {
        res.status(200).json({
            message: "Success"
        })
    
})

app.listen(Port, () => {
    console.log(`Server listening on port ${Port} `)
})