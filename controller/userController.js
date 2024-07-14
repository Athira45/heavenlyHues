
const LoadIndex = async(req,res)=>{
    res.render('home');
}

const LoadSignup = async(req,res)=>{
    res.render('signup');
}

module.exports = {
    LoadIndex,
    LoadSignup
}