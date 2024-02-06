import dbconnect from "@/DB/DB";
import user from "@/Models/user";

 dbconnect();

export default async function handler(req, res) {
  switch (req.method) {
    case "POST":
      try {
        const body = await user.create(req.body);

        res.status(201).json({
          message: body,
          success: true,
        });
      } catch (error) {
        res.status(200).json({
          message: error,
          success: false,
        });
      }

      break;

      case "GET":
        try {
          const body = await user.find();

          res.status(201).json({
            message: body,
            success: true,
          });
        } catch (error) {
          console.log(error)
          res.status(500).json({
            message: error,
            success: false,
          });
        }

        break;

        case "DELETE":
          try {
            const {id} = req.query
            console.log(id)
            const body = await user.findByIdAndDelete(id);

            res.status(201).json({
              message: "the user was deleted",
              success: true,
            });
          } catch (error) {
            res.status(500).json({
              message: error,
              success: false,
            });
          }

          break;
          case "PUT":
            try {
              const {id} = req.query
              console.log(req.query)
              const body = await user.findByIdAndUpdate(id,req.body, {
                new: true,
              });;
  
              res.status(201).json({
                message: "",
                success: true,
              });
            } catch (error) {
              console.log(error)
              res.status(500).json({
                message: error,
                success: false,
              });
            }
  
            break;
    default:
      break;
  }
}
