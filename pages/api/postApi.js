import data from './postApi.json'

export default (req,res)=>{
    res.status(200).json(data)
}