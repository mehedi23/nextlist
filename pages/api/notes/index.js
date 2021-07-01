import dbConnect from '../../../utils/dbConnect';
import Note from '../../../models/Note';

dbConnect();

// export default async ( req , res) => {
//   res.json({ test : "test" })
// }


export default async ( req , res) => {
  const { method } = req;

  switch(method){

    // Get =====================================
    case "GET" : 
      try {
        const notes = await Note.find({})

        res.status(200).json({ success : true , data:notes })

      } catch (error) {
        res.status(400).json({ success : false , data:'no data' })
      }
      break;

    // Post =====================================
    case "POST" : 
      try {
        const notes = await Note.create(req.body)

        res.status(201).json({ success : true , data:notes })

      } catch (error) {
        res.status(400).json({ success : false })
      }
      break;

    default:
      res.status(400).json({ success : false })
      break;
  }


}