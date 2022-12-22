module.exports = (res,req) => {
    res.status(404).json({message: '404 page not found'})
}