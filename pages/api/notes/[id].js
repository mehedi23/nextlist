import dbConnect from '../../../utils/dbConnect';
import Note from '../../../models/Note';

dbConnect();


export default async ( req , res) => {
    const {
            query : { id },
            method
        } = req;



  switch(method){

    // Get By Id =====================================
    case "GET" : 
      try {
        const notes = await Note.findById(id)

        if(!notes){
            res.status(400).json({ success : false , data : "no data" })
        }

        console.log(notes)

        res.status(200).json({ success : true , data:notes })

      } catch (error) {
        res.status(400).json({ success : false })
      }
      break;

    // Update =====================================
    case "PUT" : 
      try {
        const notes = await Note.findByIdAndUpdate( id , req.body , {
          new : true ,
          runValidators: true
        })

        if(!notes){
          res.status(400).json({ success : false })
        }

        res.status(200).json({ success : true })

      } catch (error) {
        res.status(400).json({ success : false })
      }
      break;

    // delete =====================================
    case "DELETE" : 
      try {
        const deleteNotes = await Note.deleteOne( _id , id)

        if(!deleteOne){
          return res.status(400).json({ success : false })
        }

      } catch (error) {
        res.status(400).json({ success : false })
      }
      break;

    default:
      res.status(400).json({ success : false })
      break;
  }


}