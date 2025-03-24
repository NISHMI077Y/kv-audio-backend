import Review from "../models/review.js";

export function addReview(req,res){
    if (req.user == null) {
        res.status(401).json({
            message: "Please login and try again"
        });
        return;
    }

    const data = req.body;

    data.name = req.user.firstName + " " + req.user.lastName;
    data.profilepicture = req.user.profilepicture;
    data.email = req.user.email;

    const newReview = new Review(data)

    newReview.save().then(()=> {
        res.json({ message: "Review added successfully"});
    }).catch(() => {
        res.status(500).json({ error: "Review addition failed"});
    });
}

export function getReviews(req,res){

    const user = req.user;

    if (user == null || user.role != "admin"){
        Review.find({isApproved : true}).then((reviews)=>{
            res.json(reviews);
        })
        return

        }
    if(user.role == "admin"){
        Review.find().then((Review)=>{
            res.json(reviews);
        })
    }

    }

    export function deleteReview(req, res) {
        const email = req.params.email;

        if(res.user == null){
            res.status(401).json
            ({message: "Please login and try again"});
            return
        }
        if (req,user.role == "admin"){
           Review.deleteOne
           ({email : email}).then(()=>{
            res.json({message: "Review deleted successfully"});
           }).catch(()=>{
            res.status(500).json
            ({error: "Review delection failed"});
           });
           return
        }

    if (req.user.role == "customer"){

        if(req.user.email == email){
            Review.deleteOne
            ({email: email}).then(()=>{
                res.json
            ({message: "Review deleted successfully"});

            }).catch(()=>{
                res.status(500).json
                ({error: "Reviw delection failed"});
            });
        }else{
            res.status(403).json
            ({message:"You are not authorized to perform thhis action"});
        }

    }


       
    }

    export function approvedReview(req,res){
        const email = req.params.email;

        if(req.user == null){
            res.status(401).json({message: "Please login and try again"});
            return
        }

        if(req.user.role == "admin"){
            Review.updateOne(
                {
                email :  email

            },
            {
                isApproved: true,

            }).then(()=>{
                res.json({ message: "Review approved successfully"});

            }).catch(()=>{
                res.statusa(500).json({error: "Review approvel failed"});

            });


        }else{
            res.status(403).json({ message: "you are not and admin. only admin can approve reviews"});
        }
    }
