logIn = (req, res) => {
    const q = "SELECT * FROM owners WHERE id = ? AND"
    db.query(q,[req.query.name],(err,data)=>{
        if(err) return  res.send("error")
        res.send(data)
    })

}