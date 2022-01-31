const request = require('request')

class BooksService {
    async getBooks(req, res) {
        try {
            if(!req.query.search){
                return res.status(404).json({message: 'Not found'})
            }
            request(
                `https://www.googleapis.com/books/v1/volumes?q=${encodeURI(req.query.search)}`, 
                function(_ , err , result) {
                   // return result
                   return res.status(200).json(JSON.parse(result))
                }
               
            )
        } catch (e) {
            return res.status(400).json({ message: 'Error , try again!' })
        }
    }

    async getBooksById(req, res) {
        try {
            if(!req.params.id){
                return res.status(404).json({message: 'Not found'})
            }
            request(
                `https://www.googleapis.com/books/v1/volumes/${req.params.id}`, 
                function(_ , err , result) {
                   // return result
                   return res.status(200).json(JSON.parse(result))
                }
               
            )
        } catch (e) {
            return res.status(400).json({ message: 'Error , try again!' })
        }
    }
}

module.exports = new BooksService()