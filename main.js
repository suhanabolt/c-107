function startClassification()
{
navigator.mediaDevices.getUserMedia({audio:true})
classifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/SfYDKXsm-/model.json",modelready)
}
function modelready()
{
classifier.classify(gotResult)
}
function gotResult(error,result) 
{
    console.log("gotResult")
}