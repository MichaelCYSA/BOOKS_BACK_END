const request = require('request')

class BooksService {
    async getBooks(req, res) {
        try {
            if(!req.query.search){
                return res.status(404).json({message: 'Not found'})
            }
            const limit = Number(req.query.limit)
            const offset = Number(req.query.offset)
            console.log(limit , offset)
            request(
                `https://www.googleapis.com/books/v1/volumes?q=
                 ${req.query.search}
                 ${offset ? `&startIndex=${offset}`: ''}
                 ${limit ? `&maxResults=${limit}`: ''}
                `, 
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
            console.log(req.params)
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